import { useState } from 'react';
import { hasLength, isNotEmpty, useForm } from '@mantine/form';
import { TextInput, FileInput, Group, Button } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { productApi } from '../../../api/products';
import '../style.css'

function UpdateForm() {
    const { id } = useParams('');
    const [product, setProduct] = useState({ title: '', image: null });

    const form = useForm({
        initialValues: {
            title: '',
            image: null
        },
        validate: {
            title: hasLength({ min: 2, max: 50 }, 'Title must be 2-50 characters long'),
            image: isNotEmpty("Enter the image of the product")
        }

    })

    const fetchIdData = async (id) => {
        const res = await productApi.get("/api/products");
        return res.data;
    }

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const handleForm = (e) => {
        e.preventDefault();
        console.log(product);
    }


    const { data, isError, error } = useQuery({
        queryKey: ['product'],
        queryFn: id ? async () => fetchIdData() : null
    })
    if (isError) {
        console.log(error);
    }
    else if (data) {
        const { item } = data.data;
        setProduct();
    }

    return (
        <form className='p-form-width' style={{ marginInline: "auto" }} onSubmit={form.onSubmit(() => { })} onReset={form.onReset}>
            <Group display="block">
                <TextInput label="Title" name='title' placeholder='Name of the product' {...form.getInputProps('title')} onChange={handleChange} />
                <FileInput label="Image" name='image' placeholder='Product image' {...form.getInputProps('image')} onChange={handleChange} />
            </Group>
            <Group display="inline">
                <Button mt="md" mr="xs" variant='filled' type='submit'>Add</Button>
                <Button mt="md" mx="xs" variant='outline' type='submit'>Add More</Button>
                <Button mt="md" ml="xs" variant='default' type='reset'>Reset</Button>
            </Group>
        </form >
    )
}

export default UpdateForm;
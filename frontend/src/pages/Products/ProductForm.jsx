import { useState } from 'react';
import { hasLength, isNotEmpty, useForm } from '@mantine/form';
import { TextInput, FileInput, Group, Button } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { productApi } from '../../api/products';
import './style.css'

function ProductForm() {
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

    const { data, isError, isInitialLoading, error } = useQuery({
        queryKey: ['product'],
        queryFn: id ? async () => fetchIdData() : null
    })
    if (isInitialLoading) {
        return <div>loading...</div>
    }
    else if (isError) {
        console.log(error);
    }
    else if (data) {
        const { item } = data.data;
        setProduct();
    }

    return (
        <form className='p-form-width' style={{ marginInline: "auto" }} onSubmit={form.onSubmit(() => { })} onReset={form.onReset}>
            <Group display="block">
                <TextInput label="Title" placeholder='Name of the product' defaultValue={product.title} {...form.getInputProps('title')} />
                <FileInput label="Image" placeholder='Product image' {...form.getInputProps('image')} />
            </Group>
            <Group display="inline">
                <Button mt="md" mr="xs" variant='filled' type='submit'>Add</Button>
                <Button mt="md" mx="xs" variant='outline' type='submit'>Add More</Button>
                <Button mt="md" ml="xs" variant='default' type='reset'>Reset</Button>
            </Group>
        </form >
    )
}

export default ProductForm;
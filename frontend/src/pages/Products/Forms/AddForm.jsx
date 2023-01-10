//import { useState } from 'react';
import { hasLength, isNotEmpty, useForm } from '@mantine/form';
import { TextInput, FileInput, Group, Button } from '@mantine/core';
import '../style.css';
import axios from 'axios';
function AddForm() {
    //const [product, setProduct] = useState({ title: '', image: null });

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
    const handleForm = async (values) => {
        //setProduct({ title: values.title, file: values.image });
        console.log(values);
    }

    return (
        <form className='p-form-width' style={{ marginInline: "auto" }} onSubmit={form.onSubmit((values) => handleForm(values))} onReset={form.onReset}>
            <Group display="block">
                <TextInput label="Title" placeholder='Name of the product' {...form.getInputProps('title')} />
                <FileInput label="Image" placeholder='Product image' {...form.getInputProps('image')} />
            </Group>
            <Group display="inline">
                <Button mt="md" mr="xs" variant='filled' type='submit' >Add</Button>
                <Button mt="md" mx="xs" variant='outline' type='submit'>Add More</Button>
                <Button mt="md" ml="xs" variant='default' type='reset'>Reset</Button>
            </Group>
        </form >
    )
}

export default AddForm;
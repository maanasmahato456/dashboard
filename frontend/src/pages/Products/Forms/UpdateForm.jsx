import { useState, useEffect } from 'react';
import { Group, Button, TextInput, Card } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { productApi, updateProduct } from '../../../api/products';
import '../style.css'


function UpdateForm() {
    const { id } = useParams('');
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchById = async () => {
            const res = await productApi.get(`/api/products/${id}`)
            const item = res.data.data;
            setTitle(item.attributes.title);
            setPrice(item.attributes.price);
            setCount(item.attributes.count);
        }
        fetchById();
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = {
            id,
            title,
            count: parseInt(count),
            price: parseInt(price)
        }
        updateProduct(updatedData);
    }
    return (

        <form className='p-form-width' style={{ marginInline: "auto" }} onSubmit={handleSubmit} >
            <Card shadow="lg" >
                <Group display="block">
                    <TextInput label="Title" type="text" name="title" placeholder='Name of the product' defaultValue={title || ''} onChange={e => setTitle(e.target.value)} />
                    <TextInput label="Count" type="number" name="count" value={count || ''} onChange={e => setCount(e.target.value)} />
                    <TextInput label="Price" type="number" name="price" value={price || ''} onChange={e => setPrice(e.target.value)} />
                </Group>
                <Group display="inline">
                    <Button mt="md" mr="xs" variant='filled' type='submit' >Update</Button>
                    <Button mt="md" ml="xs" variant='default' type='reset'>Reset</Button>
                </Group>
            </Card >
        </form >
    );
}

export default UpdateForm;
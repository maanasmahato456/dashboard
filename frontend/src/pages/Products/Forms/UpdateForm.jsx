import { Group, Button, TextInput, NumberInput } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import '../style.css'
import { productApi, updateProduct } from '../../../api/products';
import { useState } from 'react';
import { useEffect } from 'react';

function UpdateForm() {
    const { id } = useParams('');
    //const [updatedData, setUpdatedData] = useState({ id: id, title: '', count: '', price: '' });
    const [title, setTitle] = useState('');
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();


    const fetchById = async () => {
        const res = await productApi.get(`/api/products/${id}`)
        return res.data.data
    }
    const { data, isInitialLoading, isError, error } = useQuery({
        queryKey: ['ProductDataById'],
        queryFn: () => fetchById()

    })
    useEffect(() => {
        setTitle(data.attributes.title);
        setCount(data.attributes.count);
        setPrice(data.attributes.price);
    }, [data]);
    if (data) {
        const handleSubmit = (e) => {
            e.preventDefault();
            const updatedData = {
                id,
                title,
                count,
                price
            }
            updateProduct(updatedData);
        }
        return (
            <form className='p-form-width' style={{ marginInline: "auto" }} onSubmit={handleSubmit} >
                <Group display="block">
                    <TextInput label="Title" type="text" name="title" placeholder='Name of the product' value={title || ''} onChange={e => setTitle(e.target.value)} />
                    <NumberInput label="Count" type="number" name="count" defaultValue={data.attributes.count} onChange={e => setCount(e.target.value)} />
                    <NumberInput label="Price" type="number" name="price" defaultValue={data.attributes.price} onChange={e => setPrice(e.target.value)} />
                </Group>
                <Group display="inline">
                    <Button mt="md" mr="xs" variant='filled' type='submit' >Update</Button>
                    <Button mt="md" ml="xs" variant='default' type='reset'>Reset</Button>
                </Group>
            </form >
        );
    }
    else if (isInitialLoading) {
        return <div>loading...</div>
    }
    else if (isError) {
        console.log(error);
        return <div>error</div>
    }

    return <div></div>
}

export default UpdateForm;
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ActionIcon, Button, Space, Table } from '@mantine/core';
import { deleteProduct, getProducts } from "../../api/products";
import { FcCancel, FcAddImage } from 'react-icons/fc';
import { BsPlusSquare } from 'react-icons/bs';
import './style.css';

function Products() {
    const navigate = useNavigate();
    const { data, isError, error, isInitialLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => getProducts()
    })

    const updateItem = (id) => {
        navigate(`/products/update/${id}`);
    }

    if (isInitialLoading) {
        return <h1>loading...</h1>
    }
    else if (isError) {
        console.log(error);
    }
    else {
        const rows = data.data.map((item, idx) => {
            return <tr key={idx}>
                <td>{item.attributes.title}</td>
                <td>{item.attributes.count}</td>
                <td>{item.attributes.price}</td>
                <td><ActionIcon onClick={() => updateItem(item.id)}><FcAddImage size={16} /></ActionIcon></td>
                <td><ActionIcon onClick={() => deleteProduct(item.id)}><FcCancel size={16} /></ActionIcon></td>
            </tr>
        })
        return (
            <section>
                <Button onClick={() => navigate('/products/add')} ><BsPlusSquare size={24} /></Button>
                <Space h="lg" />
                <Table highlightOnHover withBorder withColumnBorders>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>In Stock</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </section>
        )
    }
}

export default Products;
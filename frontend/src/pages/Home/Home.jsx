import { Card, Text, Button, Image, Group, Flex } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import users from '../../assets/Home/users.jpg';
import products from '../../assets/Home/products.jpg';
import sales from '../../assets/Home/sales.png';
import piechart from '../../assets/Home/piechart.png';
import './style.css';

function Home() {
    const navigate = useNavigate();
    return (
        <section className='bg'>
            <Flex gap="lg" direction="row" wrap="wrap" justify="space-evenly">
                <Card shadow="lg" p="md" className='card-width'>
                    <Image src={products} alt="products" my='md' />
                    <Group>
                        <Text size="md">
                            Manage Products
                        </Text>
                        <Button variant='primary' onClick={() => navigate('/products')}>Explore</Button>
                    </Group>
                </Card>
                <Card shadow="lg" p="md" className='card-width'>
                    <Image src={users} alt="Users" my='md' />
                    <Group>
                        <Text size="md">
                            Manage Users
                        </Text>
                        <Button variant='primary' onClick={() => navigate('/users')}>Explore</Button>
                    </Group>
                </Card>
                <Card shadow="lg" p="md" className='card-width'>
                    <Image src={sales} alt="Sales" my='md' />
                    <Group>
                        <Text size="md">
                            Manage Sales
                        </Text>
                        <Button variant='primary' onClick={() => navigate('/sales')}>Explore</Button>
                    </Group>
                </Card>
                <Card shadow="lg" p="md" className='card-width' >
                    <Image src={piechart} alt="analytics" my='md' />
                    <Group>
                        <Text size="md">
                            Analyze Data
                        </Text>
                        <Button variant='primary' onClick={() => navigate('/analytics')}>Explore</Button>
                    </Group>
                </Card>
            </Flex>
        </section>
    )
}

export default Home;
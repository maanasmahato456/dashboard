import { Flex, Card, Text, Group, Badge, Button, Image } from '@mantine/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts } from "../../api/products";
import './style.css';

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const res = await getProducts();
            setProducts(res.data);
        }
        fetch();
    }, [])

    console.log(products)
    return (
        <section>
            <Flex gap="lg" direction="row" justify="space-evenly" wrap="wrap">
                {
                    products.map((item, idx) => {
                        const { title, image, desc, count, relasedDate, price } = item.attributes;
                        return <Card shadow="sm" p="lg" radius="md" withBorder key={idx} className='p-card-width'>
                            <Card.Section>
                                <Image
                                    src={`http://localhost:1337${image.data.attributes.url}`}
                                    alt={title}
                                />
                            </Card.Section>

                            <Group position="apart" mt="md" mb="xs" display="block">
                                <Text weight={500}>{title}</Text>
                                <Badge color="pink" variant="light">
                                    Manufacture Date: {relasedDate}
                                </Badge>
                            </Group>

                            <Group display="block">
                                <Text size="md" color="dimmed">
                                    {desc}
                                </Text>
                                <Text size="sm" color="dimmed">
                                    Pirce: Rs.{price}
                                </Text>
                            </Group>

                            <Group display="inline" mt="lg" >
                                <Button variant="light" color="blue" mt="md" mr="xs" radius="md">
                                    Update
                                </Button>
                                <Button variant="light" color="blue" mt="md" ml="xs" radius="md">
                                    Delete
                                </Button>
                            </Group>

                        </Card>
                    })
                }
            </Flex>
        </section>
    )
}

export default Products;
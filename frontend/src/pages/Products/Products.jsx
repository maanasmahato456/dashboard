import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Flex, Card, Text, Group, Badge, Button, Image } from '@mantine/core';
import { getProducts } from "../../api/products";
import './style.css';

function Products() {
    const [products, setProducts] = useState([]);
    const { data, isError, error, isInitialLoading } = useQuery({
        queryKey: [products],
        queryFn: () => getProducts()
    })

    if (isInitialLoading) {
        return <h1>loading...</h1>
    }
    else if (isError) {
        console.log(error);
    }
    else {
        console.log();
        return (
            <section>
                <Flex gap="lg" direction="row" justify="space-evenly" wrap="wrap">
                    {
                        data.data.map((item, idx) => {
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
}

export default Products;
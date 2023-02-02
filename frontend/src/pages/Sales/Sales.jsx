import { useQuery } from '@tanstack/react-query';
import { deleteSale, getSales } from '../../api/sales';
import { ActionIcon, Card, Table, Group, Button, Input, Select, Space } from '@mantine/core';
import { FcCancel, FcSearch } from 'react-icons/fc';

function Sales() {

    const { data, isInitialLoading, isError, error } = useQuery({
        queryKey: ['sales'],
        queryFn: () => getSales()
    })


    if (isInitialLoading) {
        return <div>loading...</div>
    }
    else if (isError) {
        return alert("error: ", error)
    }
    else {
        const rows = data.data.map((item, idx) => {
            return <tr key={idx}>
                <td>{item.attributes.title}</td>
                <td>{item.attributes.desc}</td>
                <td>{item.attributes.count}</td>
                <td>{item.attributes.price}</td>
                <td><ActionIcon onClick={() => deleteSale(item.id)} ><FcCancel size={16} /></ActionIcon></td>
            </tr>
        })
        const categories = [
            { value: "all", label: "all" },
            { value: "upperbody", label: "upperbody" },
            { value: "underwears", label: "underwears" },
            { value: "lower_body", label: "lower_body" },
        ]
        return (
            <section>
                <Group position="apart">
                    <Input style={{ width: "60%" }} icon={<FcSearch size={16} />} placeholder="search" rightSection={<Button>Search</Button>} />
                    <Select display="inline-flex" placeholder="category" data={categories} />
                </Group>
                <Space h="lg" />
                <Card shadow="lg">
                    <Table highlightOnHover withBorder withColumnBorders>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Description</th>
                                <th>Count</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </Table>
                </Card>
            </section>
        )
    }
}

export default Sales;
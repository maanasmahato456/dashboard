import { useQuery } from '@tanstack/react-query';
import { deleteSale, getSales } from '../../api/sales';
import { ActionIcon, Table } from '@mantine/core';
import { FcCancel } from 'react-icons/fc';

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
        return (
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
        )
    }
}

export default Sales;
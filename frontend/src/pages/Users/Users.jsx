import { useQuery } from '@tanstack/react-query';
import { deleteUser, getUser } from '../../api/users';
import { ActionIcon, Table } from '@mantine/core';
import { FcCancel } from 'react-icons/fc';

function Users() {
    const { data, isInitialLoading, isError, error } = useQuery({
        queryKey: ['users'],
        queryFn: () => getUser()
    })
    if (isInitialLoading) {
        return <h1>loading...</h1>
    }
    else if (isError) {
        return alert("error: ", error);
    }
    else {
        const rows = data.data.map((item, idx) => {
            return <tr key={idx}>
                <td>{item.attributes.username}</td>
                <td>{item.attributes.email}</td>
                <td>{item.attributes.phone}</td>
                <td><ActionIcon onClick={() => deleteUser(item.id)}><FcCancel size={16} /></ActionIcon></td>
            </tr>
        })
        return (
            <Table highlightOnHover withBorder withColumnBorders>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone no.</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        )
    }

}

export default Users
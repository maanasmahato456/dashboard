import { useQuery } from '@tanstack/react-query';
import { deleteUser, getUser } from '../../api/users';
import { ActionIcon, Card, Table, Group, Input, Button, Space } from '@mantine/core';
import { FcCancel, FcSearch } from 'react-icons/fc';

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
            <section>
                <Group position="left">
                    <Input style={{ width: "60%" }} icon={<FcSearch size={16} />} placeholder="search" rightSection={<Button>Search</Button>} />
                </Group>
                <Space h="lg" />
                <Card shadow="lg">
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
                </Card>
            </section>


        )
    }

}

export default Users;
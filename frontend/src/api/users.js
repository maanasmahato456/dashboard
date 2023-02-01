import axios from 'axios';


const userApi = axios.create({
    baseURL: 'http://localhost:1337'
})

async function getUser() {
    const res = await userApi.get('/api/customers');
    return res.data;
}
async function deleteUser(id) {
    await userApi.delete(`/api/customers/${id}`);
}


export { getUser, deleteUser };
import axios from 'axios';


const userApi = axios.create({
    baseURL: 'http://localhost:1337'
})

async function getUser() {
    const res = await userApi.get('/api/users');
}

async function addUser() {
    const rest = await userApi.post('/api/users');
}
async function updateUser() {

}
async function deleteUser() {

}


export { getUser, addUser, updateUser, deleteUser };
import axios from "axios";


const salesApi = axios.create({
    baseURL: 'http://localhost:1337'
})

async function getSales() {
    const res = await salesApi.get('/api/sales');
    return res.data;
}


async function deleteSale(id) {
    await salesApi.delete(`/api/sales/${id}`)
}


export { getSales, deleteSale };
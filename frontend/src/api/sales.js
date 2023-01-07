import axios from "axios";


const salesApi = axios.create({
    baseURL: 'http://localhost:1337'
})

async function getSales() {
    const res = await salesApi.get('/api/sales');
}

async function addSale() { }

async function updateSale() { }


async function deleteSale() { }


export { getSales, addSale, updateSale, deleteSale };
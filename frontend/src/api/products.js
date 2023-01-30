import axios from 'axios';

const productApi = axios.create({
    baseURL: 'http://localhost:1337'
})

async function getProducts() {
    const res = await productApi.get('/api/products');
    return res.data;
}

async function addProduct(data) {
    await productApi.post('/api/products', {
        "data": data
    });
}

async function updateProduct(data) {
    await productApi.put(`/api/products/${data.id}`, {
        "data": data
    })
}

async function deleteProduct(id) {
    await productApi.delete(`/api/products/${id}`);
}

export { getProducts, addProduct, updateProduct, deleteProduct, productApi };
import axios from 'axios';

const productApi = axios.create({
    baseURL: 'http://localhost:1337'
})

async function getProducts() {
    const res = await productApi.get('/api/products');
    return res.data;
}

async function addProduct(data) {
    console.log(data);
    await productApi.post('/api/products', {
        "data": data
    });
}

async function updateProduct(data) {
    console.log(data);

}

async function deleteProduct() {

}

export { getProducts, addProduct, updateProduct, deleteProduct, productApi };
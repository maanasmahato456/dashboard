import axios from 'axios';

const productApi = axios.create({
    baseURL: 'http://localhost:1337'
})

async function getProducts() {
    const res = await productApi.get('/api/products?populate=*');
    return res.data;
}

async function addProduct() {

}

async function updateProduct() {

}

async function deleteProduct() {

}

export { getProducts, addProduct, updateProduct, deleteProduct };
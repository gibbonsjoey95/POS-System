import axios from 'axios';
const baseUrl = 'http://localhost:4000/api/products/';

const getAllProducts = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const productService = { getAllProducts };

export default productService;

import axios from 'axios';
const baseUrl = 'https://pizza-pay.fly.dev/api/products';

const getAllProducts = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const productService = { getAllProducts };

export default productService;

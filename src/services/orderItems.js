import axios from 'axios';
const baseUrl = 'http://localhost:4000/api/items/';

const getAllOrderItems = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createOrderItem = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const itemService = { getAllOrderItems, createOrderItem };

export default itemService;

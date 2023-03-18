import axios from 'axios';

const size = () => {
  axios.get('http://localhost:4000/api/v1/').then((response) => {
    let pizza = response.data;

    console.log(pizza);
  });
};

export default size;

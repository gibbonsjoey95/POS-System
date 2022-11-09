import pizza from '../pizza';

const Toppings = ({ active, toppingName }) => {
  const styles = {
    backgroundColor: active ? '#FF7F11' : '',
  };

  return (
    <button className='button blue' style={styles}>
      {toppingName}
    </button>
  );
};

export default Toppings;

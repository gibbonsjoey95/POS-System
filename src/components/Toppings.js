const Toppings = ({ active, toppingName, toggle, id }) => {
  const styles = {
    backgroundColor: active ? '#FF7F11' : '',
  };

  return (
    <button className='button blue' style={styles} onClick={() => toggle(id)}>
      {toppingName}
    </button>
  );
};

export default Toppings;

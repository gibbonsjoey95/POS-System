const PizzaButton = ({ active, buttonName, toggle, setFunction, id }) => {
  const styles = {
    backgroundColor: active ? '#FF7F11' : '',
  };

  return (
    <button
      style={styles}
      className='button blue'
      onClick={() => toggle(setFunction, id)}
    >
      {buttonName}
    </button>
  );
};

export default PizzaButton;

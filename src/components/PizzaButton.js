const PizzaButton = ({ active, pizzaOption, toggle, id }) => {
  const styles = {
    backgroundColor: active ? '#FF7F11' : '',
  };

  return (
    <button style={styles} className='button blue' onClick={() => toggle(id)}>
      {pizzaOption}
    </button>
  );
};

export default PizzaButton;

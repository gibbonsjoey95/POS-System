const Size = ({ active, pizzaOption }) => {
  const styles = {
    backgroundColor: active ? '#FF7F11' : '',
  };

  return (
    <button style={styles} className='button blue'>
      {pizzaOption}
    </button>
  );
};

export default Size;

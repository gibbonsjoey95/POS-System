const Button = ({ onClick, value }) => {
  return (
    <button type='button' onClick={onClick} className='button'>
      {value}
    </button>
  );
};

export default Button;

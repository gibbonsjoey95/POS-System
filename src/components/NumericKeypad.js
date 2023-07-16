import { useState } from 'react';

// const NumericKeypad = ({ onInput, onCancel }) => {
const NumericKeypad = ({
  enteredNumbers,
  setEnteredNumbers,
  onDelete,
  onKeyPress,
}) => {
  const [value, setValue] = useState('');

  // const handleInput = (number) => {
  //   if (enteredNumbers.length < 19) {
  //     const updatedNumbers = enteredNumbers.replace(/\D/g, '') + number; // Remove non-digit characters
  //     const formattedNumbers = updatedNumbers.replace(/(\d{4})(?=\d)/g, '$1-');

  //     setEnteredNumbers(formattedNumbers);
  //   }
  // };

  const handleInput = (number) => {
    onKeyPress(number);
  };

  // const handleInput = (number) => {
  //   setValue((prevValue) => prevValue + number);
  //   // onInput(value + number);
  //   console.log(value);
  // };

  const handleDelete = () => {
    onDelete();
  };

  // const handleCancel = () => {
  //   setValue('');
  //   onCancel();
  // };

  return (
    <div className='numeric-keypad'>
      <div className='numeric-keypad-row'>
        <button className='button blue' onClick={() => handleInput('1')}>
          1
        </button>
        <button className='button blue' onClick={() => handleInput('2')}>
          2
        </button>
        <button className='button blue' onClick={() => handleInput('3')}>
          3
        </button>
      </div>
      <div className='numeric-keypad-row'>
        <button className='button blue' onClick={() => handleInput('4')}>
          4
        </button>
        <button className='button blue' onClick={() => handleInput('5')}>
          5
        </button>
        <button className='button blue' onClick={() => handleInput('6')}>
          6
        </button>
      </div>
      <div className='numeric-keypad-row'>
        <button className='button blue' onClick={() => handleInput('7')}>
          7
        </button>
        <button className='button blue' onClick={() => handleInput('8')}>
          8
        </button>
        <button className='button blue' onClick={() => handleInput('9')}>
          9
        </button>
      </div>
      <div className='numeric-keypad-row'>
        <button className='button blue'>Cancel</button>
        <button className='button blue' onClick={() => handleInput('0')}>
          0
        </button>
        <button className='button blue' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NumericKeypad;

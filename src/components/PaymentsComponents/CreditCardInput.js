import { useState } from 'react';
import NumericKeypad from '../NumericKeypad';

const CreditCardInput = ({ creditCardInfo }) => {
  const [enteredNumbers, setEnteredNumbers] = useState('');

  // const handleCreditCardInputChange = (event) => {
  //   const input = event.target.value;
  //   setEnteredNumbers(input);
  // };

  const handleCreditCardInputChange = (event) => {
    const input = event.target.value;
    const sanitizedInput = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    const formattedInput = sanitizedInput
      .slice(0, 16) // Limit to a maximum of 16 digits
      .replace(/(.{4})/g, '$1-') // Insert '-' after every 4 characters
      .slice(0, -1); // Remove the trailing '-'

    setEnteredNumbers(formattedInput);
  };

  const handleDeleteOneNumberFromCreditCard = () => {
    if (enteredNumbers.length > 0) {
      let updatedNumbers = enteredNumbers.slice(0, -1);

      if (updatedNumbers.slice(-1) === '-') {
        updatedNumbers = updatedNumbers.slice(0, -1);
      }

      setEnteredNumbers(updatedNumbers);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    // handleCreditCardChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <div>
        <NumericKeypad
          enteredNumbers={enteredNumbers}
          setEnteredNumbers={setEnteredNumbers}
          onDelete={handleDeleteOneNumberFromCreditCard}
        />
      </div>
      <label htmlFor='cardNumber'>Card Number:</label>
      <input
        type='text'
        id='cardNumber'
        name='cardNumber'
        value={enteredNumbers}
        onChange={handleCreditCardInputChange}
        maxLength={19}
        autoComplete='off'
        required
      />

      <label htmlFor='expirationDate'>Expiration Date:</label>
      <input
        type='text'
        id='expirationDate'
        name='expirationDate'
        value={creditCardInfo.expirationDate}
        onChange={handleChange}
        maxLength='5'
        minLength='5'
        required
      />

      <label htmlFor='cvv'>CVV:</label>
      <input
        type='text'
        id='cvv'
        name='cvv'
        value={creditCardInfo.cvv}
        onChange={handleChange}
        maxLength='3'
        minLength='3'
        required
      />
    </div>
  );
};

export default CreditCardInput;

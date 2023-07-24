import { useState } from 'react';
import NumericKeypad from '../NumericKeypad';

const CreditCardInput = ({ creditCardInfo }) => {
  // const [activeField, setActiveField] = useState('CreditCard');
  // const [enteredNumbers, setEnteredNumbers] = useState('');

  // const [expirationDate, setExpirationDate] = useState('');
  // const [cvv, setCvv] = useState('');

  // const handleCreditCardInputChange = (event) => {
  //   const input = event.target.value;
  //   const sanitizedInput = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  //   const formattedInput = sanitizedInput
  //     .slice(0, 16) // Limit to a maximum of 16 digits
  //     .replace(/(.{4})/g, '$1-') // Insert '-' after every 4 characters
  //     .slice(0, -1); // Remove the trailing '-'

  //   setEnteredNumbers(formattedInput);
  // };

  // const handleDeleteOneNumberFromCreditCard = () => {
  //   if (enteredNumbers.length > 0) {
  //     let updatedNumbers = enteredNumbers.slice(0, -1);

  //     if (updatedNumbers.slice(-1) === '-') {
  //       updatedNumbers = updatedNumbers.slice(0, -1);
  //     }

  //     setEnteredNumbers(updatedNumbers);
  //   }
  // };

  const [activeField, setActiveField] = useState('CreditCard');
  const [enteredNumbers, setEnteredNumbers] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the corresponding state variable based on the field name
    switch (name) {
      case 'creditNumber':
        console.log('here');
        setEnteredNumbers(value);
        break;
      case 'expirationDate':
        setExpirationDate(value);
        break;
      case 'cvv':
        setCvv(value);
        break;
      default:
        break;
    }
  };

  // console.log('outside', enteredNumbers);
  // const handleKeyPress = (number) => {
  //   // Determine the active field and update the corresponding state variable
  //   switch (activeField) {
  //     case 'CreditCard':
  //       const sanitizedInput = enteredNumbers.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  //       const formattedInput = sanitizedInput
  //         .slice(0, 16) // Limit to a maximum of 16 digits
  //         .replace(/(.{4})/g, '$1-') // Insert '-' after every 4 characters
  //         .slice(0, -1); // Remove the trailing '-'

  //       setEnteredNumbers(formattedInput);
  //       console.log('sanitized input', sanitizedInput);
  //       console.log('formatted input', formattedInput);

  //       if (enteredNumbers.length < 16) {
  //         setEnteredNumbers(enteredNumbers + number);
  //       } else {
  //         console.log('16 digits');
  //       }
  //       break;
  //     case 'ExpirationDate':
  //       setExpirationDate(expirationDate + number);
  //       break;
  //     case 'Cvv':
  //       setCvv(cvv + number);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const handleCreditCardKeyPress = (number) => {
    //   const sanitizedInput = enteredNumbers.replace(/[^0-9]/g, '');
    //   const formattedInput = sanitizedInput
    //     .slice(0, 16)
    //     .replace(/(.{4})/g, '$1-')
    //     .slice(0, -1);

    const sanitizedInput = enteredNumbers.replace(/\D/g, ''); // Keep only numbers
    const formattedInput = sanitizedInput.replace(/(.{4})(?=.)/g, '$1-');

    if (formattedInput.length < 19) {
      setEnteredNumbers(formattedInput + number);
    } else {
      return enteredNumbers;
    }
  };

  const handleExpirationDateKeyPress = (number) => {
    setExpirationDate(expirationDate + number);
  };

  const handleCvvKeyPress = (number) => {
    setCvv(cvv + number);
  };

  const handleKeyPress = (number) => {
    switch (activeField) {
      case 'CreditCard':
        handleCreditCardKeyPress(number);
        break;
      case 'ExpirationDate':
        handleExpirationDateKeyPress(number);
        break;
      case 'Cvv':
        handleCvvKeyPress(number);
        break;
      default:
        break;
    }
  };

  const handleCreditFocus = () => {
    setActiveField('CreditCard');
  };

  const handleExpirationFocus = () => {
    setActiveField('ExpirationDate');
  };

  const handleCvvFocus = () => {
    setActiveField('Cvv');
  };

  return (
    <div>
      <div>
        <NumericKeypad
          // enteredNumbers={enteredNumbers}
          // setEnteredNumbers={setEnteredNumbers}
          // onDelete={handleDeleteOneNumberFromCreditCard}
          onKeyPress={handleKeyPress}
        />
      </div>
      <label htmlFor='cardNumber'>Card Number:</label>
      <input
        type='text'
        id='card-number'
        name='cardNumber'
        value={enteredNumbers}
        // onChange={handleCreditCardInputChange}
        // onChange={handleInputChange}
        onChange={handleKeyPress}
        onFocus={handleCreditFocus}
        maxLength={19}
        minLength={19}
        autoComplete='off'
        required
      />

      <label htmlFor='expirationDate'>Expiration Date:</label>
      <input
        type='text'
        id='expiration-date'
        name='expirationDate'
        value={expirationDate}
        // value={creditCardInfo.expirationDate}
        // onChange={handleChange}
        onChange={handleInputChange}
        onFocus={handleExpirationFocus}
        maxLength={5}
        minLength={5}
        required
      />

      <label htmlFor='cvv'>CVV:</label>
      <input
        type='text'
        id='cvv'
        name='cvv'
        value={cvv}
        // value={creditCardInfo.cvv}
        // onChange={handleChange}
        onChange={handleInputChange}
        onFocus={handleCvvFocus}
        maxLength={3}
        minLength={3}
        required
      />
    </div>
  );
};

export default CreditCardInput;

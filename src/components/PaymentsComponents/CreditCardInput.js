import { useState } from 'react';
import NumericKeypad from '../NumericKeypad';

const CreditCardInput = ({ creditCardInfo }) => {
  const [activeField, setActiveField] = useState('CreditCard');
  const [enteredNumbers, setEnteredNumbers] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const formatCreditCardNumber = (input) => {
    const sanitizedInput = input.replace(/\D/g, '').slice(0, 16);
    const formattedInput = sanitizedInput.replace(/(.{4})(?=.)/g, '$1-');

    return formattedInput;
  };

  const formatExpirationDate = (input) => {
    const sanitizedInput = input.replace(/\D/g, '');
    const formattedInput = sanitizedInput.replace(/(.{2})(?=.)/g, '$1/');

    return formattedInput;
  };

  const handleCreditCardKeyPress = (number) => {
    const sanitizedInput = enteredNumbers.replace(/\D/g, '');
    const formattedInput = sanitizedInput.replace(/(.{4})/g, '$1-');

    if (formattedInput.length < 19) {
      setEnteredNumbers(formattedInput + number);
    } else {
      return enteredNumbers;
    }
  };

  const handleExpirationDateKeyPress = (number) => {
    if (expirationDate.length < 5) {
      setExpirationDate(expirationDate + number);

      const sanitizedInput = (expirationDate + number).replace(/\D/g, '');
      const formattedInput = sanitizedInput.replace(/(.{2})(?=.)/g, '$1/');

      setExpirationDate(formattedInput);
    }
  };

  const handleCvvKeyPress = (number) => {
    if (cvv.length < 3) {
      setCvv(cvv + number);
    }
  };

  // handles keyboard entries
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the corresponding state variable based on the field name
    switch (name) {
      case 'cardNumber':
        setEnteredNumbers(formatCreditCardNumber(value));
        break;
      case 'expirationDate':
        // setExpirationDate(value);
        setExpirationDate(formatExpirationDate(value));
        break;
      case 'cvv':
        setCvv(value);
        break;
      default:
        break;
    }
  };

  // handles NumericKeypad.js entries
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

  const handleDeleteOneFromCreditCard = () => {
    if (enteredNumbers.length > 0) {
      let updatedNumbers = enteredNumbers.slice(0, -1);

      if (updatedNumbers.slice(-1) === '-') {
        updatedNumbers = updatedNumbers.slice(0, -1);
      }

      setEnteredNumbers(updatedNumbers);
    }
  };

  const handleDeleteOneFromExpiration = (number) => {
    if (expirationDate.length > 0) {
      let updatedExpirationDate = expirationDate.slice(0, -1);

      setExpirationDate(updatedExpirationDate);
    }
  };

  const handleDeleteOneFromCvv = (number) => {
    if (cvv.length > 0) {
      let updatedCvv = cvv.slice(0, -1);

      setCvv(updatedCvv);
    }
  };

  const handleDeletePress = (number) => {
    switch (activeField) {
      case 'CreditCard':
        handleDeleteOneFromCreditCard(number);
        break;
      case 'ExpirationDate':
        handleDeleteOneFromExpiration(number);
        break;
      case 'Cvv':
        handleDeleteOneFromCvv(number);
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
          onDelete={handleDeletePress}
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
        // onChange={handleKeyPress}
        onChange={handleInputChange}
        // onKeyDown={handleInputChange}
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

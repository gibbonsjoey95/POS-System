import NumericKeypad from '../NumericKeypad';

const CreditCardInput = ({ handleCreditCardChange, creditCardInfo }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div>
        <NumericKeypad />
      </div>
      <label htmlFor='cardNumber'>Card Number:</label>
      <input
        type='text'
        id='cardNumber'
        name='cardNumber'
        // value={creditCardInfo.cardNumber}
        onChange={handleChange}
        maxLength='16'
        minLength='16'
        required
      />

      <label htmlFor='expirationDate'>Expiration Date:</label>
      <input
        type='text'
        id='expirationDate'
        name='expirationDate'
        // value={creditCardInfo.expirationDate}
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
        // value={creditCardInfo.cvv}
        onChange={handleChange}
        maxLength='3'
        minLength='3'
        required
      />
    </div>
  );
};

export default CreditCardInput;

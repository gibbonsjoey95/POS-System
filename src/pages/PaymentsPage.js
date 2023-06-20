import { useState } from 'react';

import CreditCardInput from '../components/PaymentsComponents/CreditCardInput';

const PaymentsPage = ({ orderTotal }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handlePaymentMethodSubmit = (e) => {
    e.preventDefault();
    setPaymentMethod(e.target.value);

    console.log(paymentMethod);
  };

  const handleCreditCardChange = (name, value) => {
    setCreditCardInfo((prevCreditCardInfo) => ({
      ...prevCreditCardInfo,
      [name]: value,
    }));
  };

  return (
    <div className='order-page'>
      <form>
        <div className='container--payments'>
          <div className='payments--options'>
            <div>
              <button
                type='button'
                onClick={() => setPaymentMethod('Cash')}
                className={
                  paymentMethod === 'Cash' ? 'button active' : 'button blue'
                }
              >
                Cash
              </button>
              <button
                type='button'
                onClick={() => setPaymentMethod('Credit')}
                className={
                  paymentMethod === 'Credit' ? 'button active' : 'button blue'
                }
              >
                Credit
              </button>
            </div>
            <div>
              <h3 className='payments--order-total'>
                Order Total: ${orderTotal()}
              </h3>
            </div>
          </div>
          {paymentMethod === 'Credit' && (
            <CreditCardInput
              handleCreditCardChange={handleCreditCardChange}
              creditCardInfo={creditCardInfo}
            />
          )}
        </div>
        <button
          type='submit'
          className='button blue'
          onClick={handlePaymentMethodSubmit}
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentsPage;

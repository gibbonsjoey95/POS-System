import { useState } from 'react';

import CreditCardInput from '../components/PaymentsComponents/CreditCardInput';

const PaymentsPage = ({ orderTotal }) => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentMethod(e.target.value);

    console.log(paymentMethod);
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
            <div>{orderTotal()}</div>
          </div>
          {paymentMethod === 'Credit' && <CreditCardInput />}
        </div>
        <button
          type='submit'
          className='button blue'
          onClick={handlePaymentSubmit}
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentsPage;

const OrderInfo = ({ items, orderTotal, onDownClick, onUpClick }) => {
  return (
    <div>
      <div className=''>
        <div className='order-to-be-paid'>
          <p>Paid</p>
          <p>$0.00</p>
        </div>
        <div className='order-total'>
          <p>({items.length} Items)Total</p>
          <p>${orderTotal()}</p>
        </div>
      </div>
      <div className='order-nav'>
        <button className='button blue' onClick={() => onDownClick()}>
          Down
        </button>
        <button className='button blue' onClick={() => onUpClick()}>
          Up
        </button>
        <button className='button blue'>Tax and Total</button>
      </div>
    </div>
  );
};

export default OrderInfo;

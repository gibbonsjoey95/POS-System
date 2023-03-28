const OrderInfo = ({ items }) => {
  const getOrderTotal = () => {
    let initialTotal = 0;

    for (let i = 0; i < items.length; i++) {
      initialTotal += items[i].price;
    }

    return initialTotal.toFixed(2);
  };

  return (
    <div>
      <div className=''>
        <div className='order-to-be-paid'>
          <p>Paid</p>
          <p>$0.00</p>
        </div>
        <div className='order-total'>
          <p>({items.length} Items)Total</p>
          <p>${getOrderTotal()}</p>
        </div>
      </div>
      <div className='order-nav'>
        <button className='button blue'>Down</button>
        <button className='button blue'>Up</button>
        <button className='button blue'>Tax and Total</button>
      </div>
    </div>
  );
};

export default OrderInfo;

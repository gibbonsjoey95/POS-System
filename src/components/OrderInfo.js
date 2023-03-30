const OrderInfo = ({ items, onDownClick, onUpClick }) => {
  const getOrderTotal = () => {
    let initialTotal = 0;

    for (let i = 0; i < items.length; i++) {
      initialTotal += items[i].price;
    }

    return initialTotal.toFixed(2);
  };

  // const moveActiveDown = () => {
  //   let actives = items.map((item) => item.active);

  //   // console.log('actives', actives);

  //   for (let i = 0; i < actives.length; i++) {
  //     if (actives[i] === true) {
  //       console.log(actives);
  //       actives[i + 1] = true;
  //       actives[i] = false;
  //       console.log(actives);
  //       return;
  //     }
  //   }
  // };

  // const moveActiveUp = () => {
  //   console.log('up');
  // };

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

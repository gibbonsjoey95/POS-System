const OrderItem = ({
  active,
  onItemClick,
  id,
  size,
  crust,
  toppings,
  price,
}) => {
  const styles = {
    backgroundColor: active ? '#FF7F11' : '',
  };

  return (
    <div className='order-item' style={styles} onClick={() => onItemClick(id)}>
      <p>
        (1) {size} {crust} Crust
      </p>
      <ul>{toppings}</ul>
      <p className='order-item--cost'>${price}</p>
    </div>
  );
};

export default OrderItem;

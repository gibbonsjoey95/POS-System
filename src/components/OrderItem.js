import { Link } from 'react-router-dom';

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
    <Link to={'pizzas-page'}>
      <div
        className='order-item'
        style={styles}
        onClick={() => onItemClick(id)}
      >
        <p>
          (1) {size} {crust} Crust
        </p>
        <ul>{toppings}</ul>
        <p className='order-item--cost'>${price}</p>
      </div>
    </Link>
  );
};

export default OrderItem;

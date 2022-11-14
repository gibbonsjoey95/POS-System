import { Link } from 'react-router-dom';

const OrderTaskList = ({ active, linkTo, name, toggle, id }) => {
  const styles = {
    backgroundColor: active ? '#FF7F11' : '',
  };

  return (
    <div className='style'>
      <Link className='order-task-link' to={linkTo} onClick={() => toggle(id)}>
        <div className='order-task-container button blue' style={styles}>
          {name}
        </div>
      </Link>
    </div>
  );
};

export default OrderTaskList;

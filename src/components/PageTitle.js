const PageTitle = ({ pageName, onAddItemClick, onDeleteItemClick }) => {
  return (
    <div className='title-bar'>
      <h1>{pageName}</h1>
      <div className='title--title-btn'>
        <button className='button blue' onClick={() => onAddItemClick()}>
          New Pizza
        </button>
        <button className='button blue'>Minus One</button>
        <button className='button blue'>
          Qty <input type='number' />
        </button>
        <button className='button blue'>Plus One</button>
        <button className='button red' onClick={() => onDeleteItemClick()}>
          Delete Pizza
        </button>
      </div>
    </div>
  );
};

export default PageTitle;

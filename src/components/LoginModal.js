import { useState } from 'react';
import Button from './Button';
import OrderEntryModal from './OrderEntryModal';

const LoginModal = ({ setOpenLogin }) => {
  const [login, setLogin] = useState('');
  const [openOrderEntry, setOpenOrderEntry] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenOrderEntry(true);
  };

  const handleLogin = (event) => {
    setLogin(event.target.value);
  };

  return (
    <div className='modal-background'>
      <form onSubmit={handleSubmit} className='modal-container'>
        <input
          value={login}
          type='number'
          onChange={handleLogin}
          className='login-input'
          autoFocus
        />
        <div className='row-1'>
          <Button value={1} onClick={() => setLogin(login.concat(1))} />
          <Button value={2} onClick={() => setLogin(login.concat(2))} />
          <Button value={3} onClick={() => setLogin(login.concat(3))} />
        </div>
        <div className='row-2'>
          <Button value={4} onClick={() => setLogin(login.concat(4))} />
          <Button value={5} onClick={() => setLogin(login.concat(5))} />
          <Button value={6} onClick={() => setLogin(login.concat(6))} />
        </div>
        <div className='row-3'>
          <Button value={7} onClick={() => setLogin(login.concat(7))} />
          <Button value={8} onClick={() => setLogin(login.concat(8))} />
          <Button value={9} onClick={() => setLogin(login.concat(9))} />
        </div>
        <div className='row-4'>
          <Button value={'Clear'} onClick={() => setLogin('')} />
          <Button value={0} onClick={() => setLogin(login.concat(0))} />
          <Button value={'Log In'} onClick={handleSubmit} type={'submit'} />
        </div>
      </form>
      {openOrderEntry && <OrderEntryModal setOpenLogin={setOpenLogin} />}
    </div>
  );
};

export default LoginModal;

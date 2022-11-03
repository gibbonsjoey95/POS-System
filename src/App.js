import './styles.css';
import Button from './components/Button';
import LoginModal from './components/LoginModal';

import { useState } from 'react';

const App = () => {
  const [openLogin, setOpenLogin] = useState(false);

  const loginModalOpen = () => {
    setOpenLogin(true);
  };

  return (
    <main>
      <div className='login-btn-center'>
        <Button onClick={loginModalOpen} value='Log In' />
        {openLogin && (
          <LoginModal setOpenLogin={setOpenLogin} openLogin={openLogin} />
        )}
      </div>
    </main>
  );
};

export default App;

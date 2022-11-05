import './styles.css';
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
        <button className='button blue' onClick={loginModalOpen}>
          Log In
        </button>
        {openLogin && (
          <LoginModal setOpenLogin={setOpenLogin} openLogin={openLogin} />
        )}
      </div>
    </main>
  );
};

export default App;

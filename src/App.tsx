import { useEffect, useState } from 'react';
import './App.css';
import Router from './components/Router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from 'firebaseApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';

function App() {
  const auth = getAuth(app);
  // auth를 체크하기 전에 (initialize 전)loader를 띄워주는 용도
  const [init, setInit] = useState<boolean>(false);
  // auth의 currentUser가 있으면 authenticated로 변경
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );
  //초기값은 auth에 currentUser 값이 있으면 true, 아니면 false 로 router 렌더링

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </>
  );
}

export default App;

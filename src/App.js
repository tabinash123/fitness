import './App.css';
import LoginOrSignup from './LoginOrSignup';
import Main from './Main';
import Second from './Second';
import Signup from './Signup';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { FitnessContext } from './Context';

function App() {
  
  const { detail, getItem } = useContext(FitnessContext);
  useEffect(() => {
    getItem();
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<LoginOrSignup />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="Second" element={<Second />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

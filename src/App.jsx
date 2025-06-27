import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css'
import ShooticHeader from "./components/common/ShooticHeader";
import ShooticFooter from './components/common/ShooticFooter';
import AppRouter from './router/AppRouter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ShooticHeader />
     <div className="main">
     

      <AppRouter />





     </div>
     <ShooticFooter />
    </>
  )
}

export default App

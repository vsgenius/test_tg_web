import { useEffect } from 'react';
import './App.css';
import Header from './components/header/header';

const tg = window.Telegram.WebApp

function App() {
  useEffect(()=>{
    tg.ready()
  },[])
  const onClose = () => {
    tg.close()
  }
  return (
    <div className="App">
      work
      <Header />
    <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;

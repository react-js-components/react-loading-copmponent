import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Loading } from './loading';
function App() {
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },8000)
  },[])

  return (
    <div>
    {
      loading ?
      <div className='loading'>

        <Loading loading={loading}/>
      </div>
      :


      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
       reload the page to see how loading app works again.
      </p>
      
      </header>
      </div>
    }
    </div>
  );
}

export default App;

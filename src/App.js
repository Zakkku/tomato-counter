import { useState } from 'react';
import './App.css';
import TomatoBox from './TomatoBox';
import ButtonContainer from './ButtonContainer';
import Header from './Header';

function App() {

 
  const [tomatoes, setTomatoes] = useState(0);




  return (
    <div className="App">
      <div className='window'>
        < Header />
        < TomatoBox tomatoes={tomatoes}/>
        < ButtonContainer tomatoes={tomatoes} setTomatoes={setTomatoes} />
      </div>
    </div>
  );
}

export default App;

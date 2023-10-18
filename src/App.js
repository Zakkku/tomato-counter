import { useState } from 'react';
import './App.css';
import TomatoBox from './TomatoBox';
import ButtonContainer from './ButtonContainer';

function App() {

 
  const [tomatoes, setTomatoes] = useState(0);




  return (
    <div className="App">
      <div className='window'>
        <h1>Pomodoro Tomato Counter</h1>
        <h4>A simple React counter app with useState</h4>
        < TomatoBox tomatoes={tomatoes}/>
       < ButtonContainer tomatoes={tomatoes} setTomatoes={setTomatoes} />
      </div>
    </div>
  );
}

export default App;

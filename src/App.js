import { useState } from 'react';
import './app.css'
function App() {
  const [state, setState] = useState("");
  function calculate(e) {
    e.preventDefault();
    let result = eval(state);
    setState(result);
  }
  return (
    <>
      <div className='container'>
        <div className='first'><p>{state}</p><button onClick={() => setState("")}>C</button></div>
        <div>
          <button onClick={() => setState(state + "1")}>1</button>
          <button onClick={() => setState(state + "2")}>2</button>
          <button onClick={() => setState(state + "3")}>3</button>
          <button onClick={() => setState(state + "/")}>/</button>
        </div>
        <div>
          <button onClick={() => setState(state + "4")}>4</button>
          <button onClick={() => setState(state + "5")}>5</button>
          <button onClick={() => setState(state + "6")}>6</button>
          <button onClick={() => setState(state + "-")}>-</button>
        </div>
        <div>
          <button onClick={() => setState(state + "7")}>7</button>
          <button onClick={() => setState(state + "8")}>8</button>
          <button onClick={() => setState(state + "9")}>9</button>
          <button onClick={() => setState(state + "+")}>+</button>
        </div>
        <div>
          <button onClick={() => setState(state + ".")}>.</button>
          <button onClick={() => setState(state + "0")}>0</button>
          <button onClick={calculate}>=</button>
          <button onClick={() => setState(state + "*")}>*</button>
        </div>
      </div>
    </>
  );
}

export default App;

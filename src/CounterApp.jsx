import { Fragment,useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {

  const [counter,setCounter] = useState(value);

  const handleAdd=()=> {
    // console.log(event);
    //setCounter(counter+1);
    setCounter((c)=>c+1);
  }
  const handleRest=()=> {
    setCounter((c)=>c-1);
  }
  const handleReset=()=> {
    setCounter((c)=>value);
  }


  return (
    <Fragment>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleRest}>-1</button>
      <button aria-label="btn-reset" onClick={handleReset}>Reset</button>
    </Fragment>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

import { Fragment } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  function handleAdd(event, newValue) {
    // console.log(event);
    console.log(newValue);
  }

  return (
    <Fragment>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <button onClick={(event) => handleAdd(event, "hola")}>+1</button>
    </Fragment>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

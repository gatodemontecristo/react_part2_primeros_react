import { Fragment } from "react";
import PropTypes from "prop-types"

const newMessage = {
  message: "Hola Mundo",
  title: "Fernando",
};
const getMensajito = (a, b) => {
  return `La operacion mas basica es de ${a + b}`;
};

export const FirstApp = ({title, subTitle, name}) => {


  return (
    <Fragment>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
      <h1>{getMensajito(3, 4)}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>Spy un subtitulo</p>
    </Fragment>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  title: "No hya ningun titulo",
  subTitle: "No hya ningun subtitulo",
  name: "Fernando Herrera"
}

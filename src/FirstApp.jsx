import { Fragment } from "react";

const newMessage = {
  message: "Hola Mundo",
  title: "Fernando",
};
const getMensajito = (a, b) => {
  return `La operacion mas basica es de ${a + b}`;
};

export const FirstApp = () => {
  return (
    <Fragment>
      <h1>{getMensajito(3, 4)}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>Spy un subtitulo</p>
    </Fragment>
  );
};

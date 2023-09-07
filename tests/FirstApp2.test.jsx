const { render, screen } = require("@testing-library/react");
const { FirstApp } = require("../src/FirstApp");

describe('Pruebas en <FirstApp/>', () => { 

    const title = "Hola, soy Goku";
    const subTitle = 2023;
    test('debe de hacer match con el snapshot', () => { 
      const {container} = render(<FirstApp title={title} subTitle={subTitle}></FirstApp>);
      expect(container).toMatchSnapshot();
     });

     test('debe mostrar el mensaje "Hola, soy Goku', () => { 
       render(<FirstApp title={title} subTitle={subTitle}></FirstApp>);
      expect(screen.getByText(title)).toBeTruthy();
     });
 })
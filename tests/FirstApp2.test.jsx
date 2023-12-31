const { render, screen } = require("@testing-library/react");
const { FirstApp } = require("../src/FirstApp");

describe('Pruebas en <FirstApp/>', () => { 

    const title = "Hola, soy Goku";
    const subTitle = 2023;
    // test('debe de hacer match con el snapshot', () => { 
    //   const {container} = render(<FirstApp title={title} subTitle={subTitle}></FirstApp>);
    //   expect(container).toMatchSnapshot();
    //  });

     test('debe de mostrar el mensaje "Hola, Soy Goku"', () => { 
      const {container} = render(<FirstApp title={title} subTitle={subTitle}></FirstApp>);
      expect(screen.getByText(title)).toBeTruthy();
     });

     test('debe de mostrar el titulo en un h1', () => { 
       render(<FirstApp title={title} subTitle={subTitle}></FirstApp>);
      expect(screen.getByRole('heading',{level: 1}).innerHTML).toContain(title);
     });

     test('debe de mostrar el subtitulo enviado por props', () => { 
      render(<FirstApp title={title} subTitle={subTitle}></FirstApp>);
      expect(screen.getAllByText(subTitle).length).toBe(2);
    });
 })
const { render } = require("@testing-library/react");
const { FirstApp } = require("../src/FirstApp");

describe('Pruebas en <FirstApp/>', () => { 

    // test('debe de hacer match con el snapshot',()=>{
    //     const title = 'Hola, Soy Goku'; 
    //     const subTitle = 2023;
    //     const {container} = render(<FirstApp title={title} subTitle={subTitle}></FirstApp>);
    //     expect(container).toMatchSnapshot();
    // });

    test('debe de mostrar el titulo en un h1', () => { 

        const title = 'Hola, Soy Goku'; 
        const subTitle = 2023;
        const {container, getByText, getByTestId} = render(<FirstApp title={title} subTitle={subTitle}></FirstApp>);

        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toBe(title);
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);


     })

     test('debe de mostrar el subtitulo enviado por props', () => { 
        const title = 'Hola, Soy Goku'; 
        const subTitle = 2023;
        const {getByText} = render(<FirstApp title={title} subTitle={subTitle}></FirstApp>);
        expect(getByText(subTitle)).toBeTruthy();
      })

 })
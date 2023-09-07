const { render,screen, fireEvent } = require("@testing-library/react");
const { CounterApp } = require("../src/CounterApp");

describe('Pruebas en <CounterApp/>', () => { 
    const value = 100;
    test('debe de hacer match con el snapshot', () => { 
           const {container} = render(<CounterApp value={value}></CounterApp>);
            expect(container).toMatchSnapshot();
     });

     test('debe de mostrar el valor inicial de 100', () => { 
        render(<CounterApp value={100}></CounterApp>);
        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100');
      
    });

    test('deve de incrementar con el botón +1', () => { 
        render(<CounterApp value={10}></CounterApp>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
     })

     test('deve de decrementar con el botón -1', () => { 
        render(<CounterApp value={10}></CounterApp>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
     })

     test('deve de funcionar el boton de reset', () => { 
        render(<CounterApp value={355}></CounterApp>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));
        expect(screen.getByText('355')).toBeTruthy();
     })
 })
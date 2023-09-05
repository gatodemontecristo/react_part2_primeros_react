const { render } = require("@testing-library/react");
const { FirstApp } = require("../src/FirstApp");

describe('Pruebas en <FirstApp/>', () => { 

    test('debe de hacer match con el snapshot',()=>{
            render(<FirstApp></FirstApp>)
    });

 })
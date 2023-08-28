const { usContext } = require("../../src/base-pruebas/06-deses-obj");

describe('Prueba de tarea ', () => { 
    test('usContext debe de retornar un objeto', () => { 
        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const contexto = usContext(persona);
        const testeo = {
            nombreClave: persona.clave,
            anios: persona.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };


        expect(testeo).toEqual(contexto);

     })

 }) 
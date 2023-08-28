const { getHeroeById,getHeroesByOwner } = require("../../src/base-pruebas/08-imp-exp");
const { default: heroes } = require("../../src/data/heroes");

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un héroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroeById debe de retornar undefined si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test("getHeroeById debe de retornar toda la colección de DC", () => {
    const dueno = 'DC';
    const coleccion = getHeroesByOwner(dueno);

    expect(coleccion.length).toBe(3);
  });

  test("getHeroeById debe de retornar toda la colección de Marvel", () => {
    const owner = 'Marvel';
    const coleccion2 = getHeroesByOwner(owner);
    expect(coleccion2.length).toBe(2);
    expect(coleccion2).toEqual(heroes.filter(heroe=>heroe.owner === owner));

  
  });

  


});



test('Esta prueba inicial no puede fallar', ()=> {
        // 1 Inicializacion (Arragle)
    const message1 = 'Hola Mundo   ';

        //2 Validacion  Act

    const message2 = message1.trim();

        //3 Afirmacion (Assert)

    expect( message1 ).toBe( message2);
    


})
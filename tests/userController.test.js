const user = require('../controllers/userController');


describe('Grupo de teste para salvar usuário ', () => {
   
    test('Deve buscar o usuário id 1', async () => {
        const result = await user.show(1);
        expect(result).toEqual({
            id: 1,
            email:'dani@mail.com',
            password: '123',
            name: 'Dani'
        });
    });

    test('Deve salvar um novo usuário', async () => {
        const result = await user.store('alessandro', 'alessandro@mail.com', '1255');
        const [serverStatus] = [result[0].serverStatus];
        expect(serverStatus).toBe(2);
    });

    test('Deve listar todos os usuários cadastrados ', async () => {
        const result = await user.index();
        expect(result.length).toBeGreaterThan(2);
    });
    
});
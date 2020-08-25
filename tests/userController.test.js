const user = require('../controllers/userController');


describe('Grupo de teste para salvar usuário ', () => {
   
    test('Deve buscar o usuário id 1', async () => {
        const result = await user.findByPk(1);
        console.log(result);
        expect(result).toEqual({
            id: 1,
            email:'dani@mail.com',
            password: '123',
            name: 'Dani'
        });
    });
    
});
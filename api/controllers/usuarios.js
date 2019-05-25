module.exports = function (app) {

    app.get('/usuarios', function (req, res) {
        var usuario = {};
        usuario.Nome = "Usuário Teste";
        usuario.Login = "usuario";
        usuario.Senha = "123456";

        console.log('Recebida');
        res.send(usuario);
    });

    app.post('/usuarios', function (req, res) {

        //console.log(req);
        res.send(req.body);
    });

    app.put('/usuarios', function (req, res) {

        //console.log(req);
        res.send('Usuário atualizado com sucesso');
    });

    app.delete('/usuarios', function (req, res) {

        //console.log(req);
        res.send('Usuário deletado com sucesso');
    });
}
module.exports = function (app) {

    app.get('/pagamentos', function (req, res) {
        console.log('Recebida')
        res.send('OK');
    });

    app.post('/pagamentos/pagamento', function () {
        var pagamento = req.body;
        console.log(pagamento);
        res.send('OK');
    });

}

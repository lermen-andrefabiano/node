const app = require('express')();

const Boleto = require('node-boleto').Boleto;

const boleto = new Boleto({
    'banco': "santander", // nome do banco dentro da pasta 'banks'
    'data_emissao': new Date(),
    'data_vencimento': new Date(new Date().getTime() + 5 * 24 * 3600 * 1000), // 5 dias futuramente
    'valor': 1500, // R$ 15,00 (valor em centavos)
    'nosso_numero': "1234567",
    'numero_documento': "123123",
    'cedente': "Pagar.me Pagamentos S/A",
    'cedente_cnpj': "18727053000174", // sem pontos e traços
    'agencia': "3978",
    'codigo_cedente': "6404154", // PSK (código da carteira)
    'carteira': "102"
  });

app.get('/boleto', function (req, res) {
    boleto.renderHTML(function (html) {
      return res.send(html)
    })
  });
  
  // Constants
const PORT = 3000;

app.listen(PORT, function () {
    console.log('Running');
});
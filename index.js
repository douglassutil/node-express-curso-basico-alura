const customExpress = require("./config/customExpress");
const conexao = require('./infra/database/conexao');
const tabelas = require('./infra/database/tabelas');

conexao.connect(error => {
    if(error)
        console.log(`Falha na conexão com banco de dados: ${error}`);
    else {
        tabelas.init(conexao);
        const app = customExpress();
        app.listen(3000, () => console.log('Servidor rodando na porta 3000.'));
    }
});


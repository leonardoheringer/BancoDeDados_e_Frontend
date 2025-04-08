const URL = 'http://localhost:3000/cadastro';

async function cadastrarUsuario() {
    try {
        const resp = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: 'Fulano Teste0',
                email: 'fulano0@gmail.com',
                senha: '12345'
            }),
        });

        const data = await resp.json();

        // Verifica o código de status da resposta
        if (resp.status === 500) {
            console.error('Erro interno no servidor:', data.message);
        } else if (resp.status !== 200 && resp.status !== 201) {
            // Se o código de status não for 200 ou 201, exibe erro
            console.error('Erro:', resp.status, data.message || data.error);
        } else {
            // Se a resposta for ok (200 ou 201), mostra sucesso
            console.log('Cadastro bem-sucedido!');
            console.log('Token JWT:', data.token);
        }
    } catch (erro) {
        console.error('Erro ao chamar a API:', erro);
    }
}

cadastrarUsuario();

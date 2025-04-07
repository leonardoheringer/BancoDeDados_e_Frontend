const URL = 'http://localhost:3000/cadastro';

async function cadastrarUsuario() {
    try {
        const resp = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: 'Fulano Teste2',
                email: 'fulano22@gmail.com',
                senha: '12345'
            }),
        });

        const data = await resp.json();

        if (!resp.ok) {
            console.error('Erro:', resp.status, data.message || data.error);
        } else {
            console.log('Cadastro bem-sucedido!');
            console.log('Token JWT:', data.token);
        }
    } catch (erro) {
        console.error('Erro ao chamar a API:', erro);
    }
}

cadastrarUsuario();
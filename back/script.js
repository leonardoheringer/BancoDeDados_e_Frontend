
const URL = 'http://localhost:3000/login';

async function chamarApi() {
    try {
        const resp = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'papo@gmail.com',     // <-- coloque um email válido cadastrado no banco
                senha: '12345'                 // <-- coloque a senha correspondente
            }),
        });

        const data = await resp.json();

        if (!resp.ok) {
            console.error('Erro:', resp.status, data.message || data.error);
        } else {
            console.log('Login bem-sucedido!');
            console.log('Token JWT:', data.token);
        }
    } catch (erro) {
        console.error('Erro ao chamar a API:', erro);
    }
}

chamarApi();


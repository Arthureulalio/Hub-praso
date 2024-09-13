// Função de redirecionamento ao clicar no botão de login
document.getElementById('loginButton').addEventListener('click', function() {
    // Pegar os valores dos campos de email e senha
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar se os valores correspondem às credenciais corretas
    if (email === 'teste@praso.com.br' && password === 'praso284546') {
        // Redirecionar para a página home.html
        window.location.href = "home.html";
    } else {
        // Exibir mensagem de erro caso as credenciais estejam incorretas
        alert('Email ou senha incorretos.');
    }
});

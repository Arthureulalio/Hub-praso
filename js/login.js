// Função de redirecionamento ao clicar no botão de login
document.getElementById('loginButton').addEventListener('click', function() {
    // Simular validação de login (opcional: aqui você pode validar o formulário antes de redirecionar)
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Redirecionar para a página home.html
        window.location.href = "home.html";
    } else {
        alert('Por favor, insira o email e a senha.');
    }
});

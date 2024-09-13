function handleCfunction handleCredentialResponse(response) {
    // Decodificar o JWT para obter os dados do usuário
    const data = jwt_decode(response.credential);

    console.log(data);  // Exibir dados do usuário no console
    alert(`Bem-vindo, ${data.name}!`);

    // Redirecionar para a página home
    window.location.href = "index.html";
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: 'SEU_CLIENT_ID.apps.googleusercontent.com',
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.querySelector('.g_id_signin'), 
        { theme: 'outline', size: 'large' }  // Personalize o botão
    );

    google.accounts.id.prompt(); // Exibe o prompt
};
redentialResponse(response) {
    // Decodificar o JWT para obter os dados do usuário
    const data = jwt_decode(response.credential);

    console.log(data);  // Exibir dados do usuário no console
    alert(`Bem-vindo, ${data.name}!`);

    // Redirecionar para a página home
    window.location.href = "index.html";
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: 'SEU_CLIENT_ID.apps.googleusercontent.com',
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.querySelector('.g_id_signin'), 
        { theme: 'outline', size: 'large' }  // Personalize o botão
    );

    google.accounts.id.prompt(); // Exibe o prompt
};

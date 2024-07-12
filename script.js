const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Usando Constraint API
    isValid = form.checkValidity();
    // Estilo da mensagem para erro
    if(!isValid) {
        message.textContent = 'Por favor, preencha todos os campos.';
        message.style.color = 'black';
        messageContainer.style.borderColor = 'black';
        return;
    }
    // Verificar se as senhas são iguais
    if(password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'As senhas não são iguais.';
        message.style.color = 'black';
        messageContainer.style.borderColor = 'black';
        password1El.style.borderColor = 'black';
        password2El.style.borderColor = 'black';
        return;
    }
    // Se o formulário for válido e as senhas forem iguais
    if(isValid && passwordsMatch) {
        message.textContent = 'Registro Criado com Sucesso!';
        message.style.color = 'blue';
        messageContainer.style.borderColor = 'blue';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // Fazer algo com os dados do usuário
    console.log(user);
    // return user;
}

function processFormData(e) {
    // Previne o envio do formulário
    e.preventDefault();
    // Validar Formulário
    validateForm();
    // Enviar Dados se Formulário for Válido
    if(isValid && passwordsMatch) {
        storeFormData();
    }
}


// Event Listener
form.addEventListener('submit', processFormData);


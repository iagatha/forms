const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirme = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passworConfirmeValue = passwordConfirme.value;


    if(usernameValue === '') {
        setErrorFor(username, "O nome de usuário é obrigatório.");
    }else{
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, "O email é obrigatório");
    }else if (!checkEmail(emailValue)){
        setErrorFor(email, 'Por favor, insira um email válido.')
    }else {
        setSuccessFor(email);
    }

    if(password === '') {
        setErrorFor(password, "A senha é obrigatória");
    }else if(passwordValue.length < 7) {
        setErrorFor(password, 'A senha precisa conter no mínimo 7 caracteres');
    }else{
        setSuccessFor(password);
    }

    if(passworConfirmeValue === '') {
        setErrorFor(passwordConfirme, 'A confirmação de senha é obrigatório')
    }else if(passworConfirmeValue !== passwordValue){
        setErrorFor(passwordConfirme, "As senhas não conferem");
    }else{
        setSuccessFor(passwordConfirmeVlue);
    }
    
    const formControls = form.querySelectorAll('form-control');
    const formIsValid = [... formControls].every((formControl) => {
        return(formControl.className = "form-control sucess");
    })

    if(formIsValid) {
        console.log("O formulário está 100% válido")
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // adicionar a mensagem de error
    small.innerText = message;
    
    //adiciona a classe de error
    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;

    // adicionar class de success
    formControl.className = 'form-control success';
}
function checkEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}


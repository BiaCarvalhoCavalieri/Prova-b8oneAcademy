//JS - INDEX


// Validação e-mail

function validatedEmail() {
  let inputEmail = document.querySelector('input[type="email"]').value;
  const regex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const textEmail = document.getElementsByClassName('login-email__input')[0];
  const msgError = document.getElementsByClassName('login-email__error')[0];
  if (inputEmail.match(regex)){
    msgError.classList.add('disabled');
    textEmail.classList.remove('active');
  } else {
    msgError.classList.remove('disabled');
    textEmail.classList.add('active');
  }
}; 

// Senha visivel

function passwordVisible(){
  const textPassword = document.getElementsByClassName('login-password__input')[0];
  const invisiblePassword = document.getElementsByClassName('login-password__button--invisible')[0];
  const visiblePassword = document.getElementsByClassName('login-password__button--visible')[0];

  if(textPassword.type === 'password'){
    textPassword.type = 'text';
    visiblePassword.classList.remove('disabled');
    invisiblePassword.classList.add('disabled');

  } else{
    textPassword.type = 'password';
    visiblePassword.classList.add('disabled');
    invisiblePassword.classList.remove('disabled');
  }
};

// API - LOGIN
function login() {
  const inputEmail = document.querySelector('input[type="email"]');
  const inputPassword = document.querySelector('input[type="password"]');
  const submitButton = document.querySelector('.login-get-in__btn');
  
   if (submitButton){
    submitButton.addEventListener('click', async (event) => {
      event.preventDefault();
      await fetch('https://test-final.b8one.academy/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, /',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: inputEmail.value,
          password: inputPassword.value
        })
      }).then(response =>  {
          return response.json()
        })
        .then(res => {
          console.log('erro:', res)
           if(typeof res === 'boolean' && res) {
             localStorage.setItem('userLoggin', 'true');        
             window.location.href = 'dashboard.html'
           } else {
             alert('O E-mail e/ou a senha está(ão) incorreto(s)')    
            }
        })
        .catch(error => console.error(error));

    });
    
  }
}

window.onload = login;
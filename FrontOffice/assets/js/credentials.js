

async function requestLogin() {
  var email = document.getElementById('your-email').value;
  var password = document.getElementById('password').value;



  fetch('https://ptsibackend.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then(result => {
    console.log(result)
    if (result.status == 200) {
      Swal.fire({
        icon: 'success',
        title: 'Login Efetuado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
      sessionStorage.setItem('email', email);
      window.setTimeout(function() { window.location.replace("semregisto.html") }, 1700);
    }
    else {
      Swal.fire({
        title: 'Error!',
        text: 'Erro ao efetuar o login, verifique as suas credenciais e tente de novo!',
        icon: 'error',
        confirmButtonText: 'Close'
      })
      console.log("Erro!")
    }
    return result.json();
  })
}



function requestRegister() {

  var name = document.getElementById('full-name').value;
  var username = document.getElementById('username').value;
  var email = document.getElementById('your-email').value;
  var morada = document.getElementById('morada').value;
  var codigopostal = document.getElementById('codigopostal').value;
  var localidade = document.getElementById('localidade').value;
  var pais = document.getElementById('pais').value;
  var telefone = document.getElementById('telefone').value;
  var nif = document.getElementById('nif').value;
  var password = document.getElementById('password').value;



  fetch('https://ptsibackend.herokuapp.com/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      name: name,
      username: username,
      email: email,
      morada: morada,
      codigopostal: codigopostal,
      localidade: localidade,
      pais: pais,
      telefone: telefone,
      nif: nif,
      password: password

    })
  }).then(result => {
    console.log(result)
    if (result.status == 200) {
      Swal.fire({
        icon: 'success',
        title: 'Registo efetuado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
      sessionStorage.setItem('email', email);
      window.setTimeout(function() { window.location.replace("login.html") }, 1700);
    }
    else {
      Swal.fire({
        title: 'Error!',
        text: 'Erro, tente novamente!',
        icon: 'error',
        confirmButtonText: 'Close'
      })
      console.log("Erro!")
    }
    return result.json();
  })


}

/*
                      
  // Autenticar administrador na área privada
  btnLogin.addEventListener("click", function() {
    swal.fire({
      title: "Login",
      html:
      '<input type="email"id="txtEmail" class="swal2-input" placeholder="e-mail" >' +
      '<input type="password" id="txtPass" class="swal2-input" placeholder="password" >',      
      showCancelButton: true,
      confirmButtonText: "Entrar",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const email = document.getElementById('txtEmail').value
        const pass = document.getElementById('txtPass').value
        return fetch('https://ptsibackend.herokuapp.com/login', {
          headers: {
            'Content-Type': 'application/json'
          },          
          method: "POST",
          body: JSON.stringify({
            email: email,
            pass: pass
        })
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch(error => {
            swal.showValidationError(`Pedido falhado: ${error}`);
          });
      },
      allowOutsideClick: () => !swal.isLoading()
    }).then(result => {
      console.log(result.value)
      
      if (result.value.sucesss) {                       
          swal({title: "Autenticação feita com sucesso!"})
          window.location.replace("admin/participants.html")  
        } else {
          swal.fire({title: `${result.value.message.pt}`})  
        }
      
    });
  });
  

 /* btnLogin.addEventListener("click", function() {
    let timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
       Read more about handling dismissals below 
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  });
  */

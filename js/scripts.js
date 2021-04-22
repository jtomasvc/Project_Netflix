//Validar el formulario

const inputs = document.querySelectorAll('form .campo input');

//Listener a los inputs

inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
});

inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
});


function validarInput(e) {
    
    const estado = ['valido', 'no-valido']

    let clase;
    if(e.target.value.length === 0) {
        clase = estado[1]
    } else {
        clase = estado[0]
    }

    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    //inyectar dinamicamente el div con el error
    if(clase === 'no-valido') {
        if(e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            //mensaje de error
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alerta');
            //insertar el error
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextSibling);
        }

    } else {
        //limpiar error
        if(e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}

function validarformulario() {
    var usuario=document.forms["login"] ["usuario"].value;
    var password=document.forms["login"] ["password"].value;

    if((usuario == "usuario") && (password == "password")) {
        window.location.href = 'Usuarios.html'
        return false;
    } else {
        alert ("usuario y/o contraseña invalidos")
        window.location.href = 'index.html'
    }
}
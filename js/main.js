
function validarNombre(nombre){
    if (nombre.length===0){
        return 'Este campo no puede estar vacio';
    } else if (nombre.length>49){
        return 'Este campo debe tener menos de 50 caracteres';
    } else if (!/^[A-z]+$/i.test(nombre)){
        return 'Este campo solo acepta letras';
    } else{
        return '';
    }
}

function validarCiudad(ciudad){
    if (ciudad.length===0){
        return 'Debe seleccionar una ciudad';
    } else {
        return '';
    }
}

function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length === 0){
        return 'Este campo no puede estar vacio';
    } else if (descripcionRegalo.length>99){
        return 'Este campo debe tener menos de 100 caracteres';
    } else if (!/^[A-z0-9]+$/i.test(descripcionRegalo)){ 
        return 'Este campo solo acepta numeros y letras';
    } else{
        return '';
    }
}

function validarForm(event){
    event.preventDefault();

    let nombre = $form.nombre.value;
    let ciudad = $form.ciudad.value;
    let descripcionRegalo = $form['descripcion-regalo'].value;

    let errorNombre = validarNombre(nombre); 
    let errorCiudad = validarCiudad(ciudad);
    let errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }
    const esExito = manejarErrores(errores) === 0;
    if (esExito){
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
        /// que el mensaje se muestre 5 segundos y lo redireccione a wishlist.html
    }
}

function manejarErrores(errores){
   const keys = Object.keys(errores);
   //borrarErrores();
   const $errores = document.querySelector('#errores');
   let contadorErrores = 0;

   keys.forEach(function(key){
   
    const error = errores[key];
    if (error){
        contadorErrores++;
        $form[key].className = 'error';
        const $error = document.createElement('li');
        $error.className = 'error-list';
        $error.innerText = error;
        $errores.appendChild($error);
        /// borrar los li creados antes de empezar para no tener el error ese
    } else{
        /// punto bonus: borrar el campo adeacuado
        $form[key].className = '';
    }
   });

   return contadorErrores;
}

function borrarErrores(){
    const arrayError = document.querySelectorAll('.error-list');
    for (let i=0; i<arrayError.length; i++){
        arrayError[i].remove();
    }
}


const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarForm;

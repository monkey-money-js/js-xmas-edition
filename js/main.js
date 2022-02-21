
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
        regalo: errorDescripcionRegalo
    }
    manejarErrores(errores);
}

function manejarErrores(errores){
    if (errores.nombre !== ''){
        $form.nombre.className = 'error';
    }
    if (errores.ciudad !== ''){
        $form.ciudad.className = 'error';
    }
    if (errores.regalo !== ''){
        $form['descripcion-regalo'].className = 'error';
    }
}

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarForm;

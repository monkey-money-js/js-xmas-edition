
function validarNombre(nombre){
    if (nombre.length===0){
        return 'Este campo no puede estar vacio';
    }
    if (nombre.length>49){
        return 'Este campo debe tener menos de 50 caracteres';
    }
    if (!/^[A-z]+$/.test(nombre)){
        return 'Este campo solo acepta letras';
    }
    return '';
}

function validarCiudad(ciudad){
    if (ciudad.length===0){
        return 'Debe seleccionar una ciudad';
    }
    return '';
}

function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length === 0){
        return 'Este campo no puede estar vacio';
    }
    if (descripcionRegalo.length>99){
        return 'Este campo debe tener menos de 100 caracteres';
    }
    if (!/^[A-z0-9]/.test(descripcionRegalo)){ 
        return 'Este campo solo acepta numeros y letras';
    }
    return '';
}

function validarForm(event){
    event.preventDefault();

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre); 
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

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

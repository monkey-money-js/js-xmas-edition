const $form = document.querySelector('#carta-a-santa');
const nombre = $form.nombre.value;

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

const ciudad = $form.ciudad.value;
function validarCiudad(ciudad){
    if (ciudad.length===0){
        return 'Debe seleccionar una ciudad';
    }
    return '';
}

const descripcionRegalo = $form['descripcion-regalo'].value;
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

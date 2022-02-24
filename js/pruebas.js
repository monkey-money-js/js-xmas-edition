function pruebaValidarNombre(){
    console.assert(
        validarNombre('') === 'Este campo no puede estar vacio',
        'validarNombre no comprobo que el campo este vacio'
    )
    console.assert(
        validarNombre('lfgjdslkfjgkldsfgkfdsgkfdgkdfsjgksdfgjdffsdgsdfgsdfgdsfgdsfgfsdgsdfg') === 'Este campo debe tener menos de 50 caracteres',
        'validarNombre no comprobo que el campo sea menor a 50 caracteres'
    )
    console.assert(
        validarNombre('5894535') === 'Este campo solo acepta letras',
        'validarNombre no comprobo que el campo sea de solo caracteres'
    )
}

function pruebaValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Debe seleccionar una ciudad',
        'validarCiudad no comprobo que no se ha seleccionado nada'
    )
}

function pruebaValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'Este campo no puede estar vacio',
        'validarDescripcionRegalo no comprobo que el campo este vacio'
    )
    console.assert(
        validarDescripcionRegalo('jfkdsfnkjdsnfndsjfknsdjanfjksdnfjkdnsfjksdnjfknasdjkfnjkdnafjkasdnfkjndsafjkdasnfdasjkfndasjkfnfjkndajknfjkadsn') === 'Este campo debe tener menos de 100 caracteres',
        'validarDescripcionRegalo no comprobo que el campo tenga menos de 100 caracteres'
    )
    console.assert(
        validarDescripcionRegalo(',.,.,.,.') === 'Este campo solo acepta numeros y letras',
        'validarDescripcionRegalo no comprobo que el campo sea solo de letras y numeros'
    )
}

pruebaValidarNombre();
pruebaValidarCiudad();
pruebaValidarDescripcionRegalo();

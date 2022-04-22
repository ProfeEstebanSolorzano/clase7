function procesarFormulario() {
    const persona = {};

    const listaInputs = document.querySelectorAll('input[type=text]');
    //Esto:
    // const objetoInput = listaInputs[0];
    // const atributo = objetoInput['attributes'];
    // const keyNombre = atributo.name;
    // const nombre = keyNombre.value;
    //es lo mismo que esto:
    // listaInputs[0].attributes.name.value;

    for (let index = 0; index < listaInputs.length; index++) {
        const atributo = listaInputs[index].attributes.name.value
        persona[atributo] = document.querySelector(`input[name=${atributo}]`).value;
    }

    console.log(!!persona.peso.match(/[A-Za-z]/));
    return false;
}
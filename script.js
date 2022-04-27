function procesarFormulario() {
    const persona = {};

    const listaInputs = document.querySelectorAll('input[type=text]');
    const listaFinal = Array.from(listaInputs).concat(Array.from(document.querySelectorAll('input[type=radio]:checked')));

    //Esto:
    // const objetoInput = listaInputs[0];
    // const atributo = objetoInput['attributes'];
    // const keyNombre = atributo.name;
    // const nombre = keyNombre.value;
    //es lo mismo que esto:
    // listaInputs[0].attributes.name.value;

    for (let index = 0; index < listaFinal.length; index++) {
        const atributo = listaFinal[index].attributes.name.value
        persona[atributo] = listaFinal[index].value;
    }
    //expresiones regulares
    if (persona.altura.match(/[A-Za-z]/) || persona.peso.match(/[A-Za-z]/)) {
        alert('Los campos altura y/o peso no pueden llevar letras');
        return false;
    }

    document.querySelector('#display').classList.remove('escondida');
    document.querySelector('#display').classList.add('visible');
    document.querySelector('#display').textContent = JSON.stringify(persona, null, 4);

    //console.log(persona);
    return false;
}
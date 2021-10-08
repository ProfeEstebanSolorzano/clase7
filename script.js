function procesarFormulario() {
    const persona = {};
    //Forma 1    
    document.querySelectorAll('div.name-item input').forEach(elemento => {
        persona[elemento.placeholder.toLowerCase()] = elemento.value;
    });
    //Forma2
    // persona.nombre = document.querySelectorAll('div.name-item input')[0].value;
    // persona.apellido = document.querySelectorAll('div.name-item input')[1].value;

    //forma1
    persona.genero = document.querySelector('input[name="gender"]:checked').value;

    //forma2
    // document.querySelectorAll('input[name="gender"]').forEach(elemento => {
    //     if (elemento.checked) {
    //         persona.genero = elemento.value;
    //     }
    // });

    persona.peso = `${document.querySelector('input[name="peso"]').value} kgs`;
    persona.altura = `${document.querySelector('input[name="altura"]').value} cms`;
    persona.direccion = document.querySelector('input[name="direccion"]').value;

    document.querySelectorAll('div.city-item input').forEach(elemento => {
        persona[elemento.placeholder.toLowerCase()] = elemento.value;
    });

    persona.provincia = document.querySelector('div.city-item select').value;

    persona.email = document.querySelector('input[type=email]').value;

    const telefono = document.querySelector('input[name=telefono]').value;
    if (telefono.match(/\b\d{8}\b/)) {
        persona.telefono = document.querySelector('input[name=telefono]').value;
    } else {
        document.querySelector('input[name=telefono]').parentElement.children[0].classList.add('error');
        // alert('El campo en rojo está mal escrito');
        return false;
    }
    persona.personalTrainer = document.querySelector('input[name="personal-trainer"]:checked').value;

    persona.experiencia = document.querySelector('input[name="experiencia"]:checked').value;

    persona.membresia = document.querySelector('input[name="membership"]:checked').value;

    const display = document.querySelector('#display');

    display.textContent = JSON.stringify(persona, null, 4);

    display.setAttribute('class', 'visible');

    //console.log(JSON.stringify(persona, null, 4))
    return false;
}
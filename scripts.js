

function sortear () {
    const min = Math.ceil(document.querySelector('.input-min').value);
    const max = Math.floor(document.querySelector('.input-max').value);

    if (max > min) {
        const sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(sorteado)
    }else {
        alert('O valor mínimo deve ser menor que o máximo.')
    }
}
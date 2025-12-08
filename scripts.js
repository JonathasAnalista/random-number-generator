

function sortear () {
    const min = parseInt(document.querySelector('.input-min').value);
    const max = parseInt(document.querySelector('.input-max').value);
    const sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(sorteado);
}
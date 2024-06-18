const inputsContainer = document.getElementById('numeros-container');

for (let i = 0; i < 10; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.id = 'num' + i;
    inputsContainer.appendChild(input);
}

function contarNumeros() {
    const numeros = [];
    let Completo = true;

    for (let i = 0; i < 10; i++) {
        const valor = document.getElementById('num' + i).value;
        if (valor === '') {
            Completo = false;
            break;
        }
        numeros.push(parseInt(valor));
    }

    if (!Completo) {
        document.getElementById('error').innerText = 'Debe ingresar los 10 números.';
        return;
    } else {
        document.getElementById('error').innerText = '';
    }

    let positivos = 0;
    let negativos = 0;
    let ceros = 0;

    numeros.forEach(num => {
        if (num > 0) {
            positivos++;
        } else if (num < 0) {
            negativos++;
        } else {
            ceros++;
        }
    });

    document.getElementById('positivos').innerText = 'Positivos: ' + positivos;
    document.getElementById('negativos').innerText = 'Negativos: ' + negativos;
    document.getElementById('ceros').innerText = 'Ceros: ' + ceros;
}

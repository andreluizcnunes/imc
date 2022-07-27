// Capturando evento de submit do formulário
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso inválido');
        return;
    }

    if(!altura) {
        setResultado('Altura inválida');
        return;
    }

    const imc = getImc(peso, altura);

    nivelImc(imc);
});

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function nivelImc(imc){
    
    if(imc <= 18.5) {
        setResultado(`${imc} \n Abaixo do peso`);
    }else if (imc >= 18.5 && imc <= 24.9){
        setResultado(`${imc} \n Peso normal`);
    }else if (imc >= 25 && imc <= 29.9){
        setResultado(`${imc} \n Sobrepeso`);
    }else if (imc >= 30 && imc <= 39.9){
        setResultado(`${imc} \n Obesidade grau 1`);
    }else if (imc >= 35 && imc <= 39.9) {
        setResultado(`${imc} \n Obesidade grau 2`);
    }else if (imc > 40) {
        setResultado(`${imc} \n Obesidade grau 3`);
    }else {
        setResultado(`${imc} \n IMC invalido`);
    }
}

function setResultado (msg) {

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = `${msg}`;
    resultado.appendChild(p);

}
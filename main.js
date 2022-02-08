const btnCalc = document.querySelector('#btnCalc')

btnCalc.setAttribute('onClick', 'IMC()')

function IMC () {
    const divResult = document.querySelector('.result')

    const weight = document.querySelector('#weight').value
    const height = document.querySelector('#height').value / 100
    const imc = weight / height ** 2
    parseInt(imc)

    if (isNaN(imc) == true) {
        divResult.innerHTML = `<p>Peso ou altura inválido(s)</p>`
    } else {
        if (imc < 18.4){
            divResult.innerHTML = `<h3>${imc.toFixed(1)}</h3>
            <span>imc</span>
            <h4><i class="fas fa-exclamation-triangle"></i>Abaixo do Peso</h4>`
            divResult.classList.add('danger')
        }
        else if (imc > 24.9) {
            divResult.innerHTML = `<h3>${imc.toFixed(1)}</h3>
            <span>imc</span>
            <h4><i class="fas fa-exclamation-triangle"></i>Acima do Peso</h4>`
            divResult.classList.add('danger')
        }
        else if (imc >= 18.4 && imc <= 24.9) {
            divResult.innerHTML = `<h3>${imc.toFixed(1)}</h3>
            <span>imc</span>
            <h4><i class="fas fa-check-circle"></i>Peso Ideal</h4>`
            divResult.classList.remove('danger')
            divResult.classList.add('green')
        } 
    }
}



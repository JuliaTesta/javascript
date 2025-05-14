let num = document.getElementById('inum')
let lista = document.getElementById('iadd')
let resultado = document.getElementById('res')
valores = []

function adicionar(){ //vai adicionar se for um numero e nao estiver na lista
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value)) //push coloca o valor dentro do vetor
        item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado.`
        lista.appendChild(item) //deixa visível na lista
        resultado.innerHTML=''
    }
    else{
        window.alert('Número inválido ou já inserido.')
    }
    num.value=''
    num.focus()
}

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }
    else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf (Number(n))!=-1 ){ //se nao achar o -1 é que o valor ja foi digitado
        return true
    }
    else{
        return false
    }
}

function finalizar(){
    if(valores.length==0){
        window.alert('Digite algum valor antes de finalizar.')
    }
    else{
        let tot = valores.length//saber quantos valores tem no vetor.
        let maior = valores[0] 
        let menor = valores[0]
        let soma = 0
        let media 
        

        for(let pos=0;pos<valores.length;pos++){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        
        media = soma / tot

    resultado.innerHTML=''
    resultado.innerHTML +=`<p>Ao todo, temos ${tot} valores.</p>`
    resultado.innerHTML +=`<p>O maior valor é ${maior}.</p>`
    resultado.innerHTML += `<p> O menor valor é ${menor}.</p>`
    resultado.innerHTML += `<p> A soma dos valores é ${soma}.</p>`
    resultado.innerHTML += `<p> A média dos valores é ${media}.</p>`
    }
}


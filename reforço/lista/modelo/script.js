let num = document.getElementById('inum')
let lista = document.getElementById('iadd')
let res = document.getElementById('res')
valores = []

function isNumber(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }
    else{
        return false
    }
}
function inList(n,l){
    if(l.indexOf(Number(n))!=-1){ //indexOf busca o valor tal na lista (nao achou o -1, significa que ja tem o outro valor na lista)
        return true
    }
    else{
        return false
    }
}
function adicionar(){
    if(isNumber(num.value) && !inList(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        
    } 
    else{
        window.alert('Valor inválido ou já inserido.')
    }
    num.value=''
    num.focus()
}
function verificar(){
    if(valores.length==0){
        window.alert('Insira um valor antes de verificar.')
    }
    else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){//para cada posicao em valores[]
            soma += valores[pos]
        }
    }
}
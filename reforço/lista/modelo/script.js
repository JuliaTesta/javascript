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
               //1 2
function inList(n,l){
    if(l.indexOf(Number(n))!=-1){  //!=-1 significa que o valor foi encontrado na lista 
        return true
    }                                           
    else{
        return false
    }
}

function adicionar(){                   //1       2
    if(isNumber(num.value) && !inList(num.value, valores)){ /*só vai adicionar se for um numero (isNumber) e se não estiver na lista (!inList) ou seja, se a função inlist for falsa*/

        valores.push(Number(num.value)) //se for um numero e nao estiver na lista, adiciona no vetor. push é add elementos a um vetor. 
        //para adicionar o elemento e ficar visual no select, precisa de um option. 
        let item = document.createElement('option') //esse é o item que vai ficar dentro do select
        item.text=`Valor ${num.value} adicionado.`
        lista.appendChild(item) //para adicionar visualmente o item na lista
        res.innerHTML='' //para que quando adicione outro numero o res limpe
        
    }
    else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value='' //para que depois de digitar um numero o objeto num fique vazio.
    num.focus() //como se o mouse clicasse dnv
}
function finalizar(){
    if(valores.length==0){
        window.alert('Adicione valores antes de finalizar.') //se o vetor estiver vazio nao pode finalizar. 
    }
    else{
        let tot = valores.length //para mostrar quantos valores o vetor tem ('comprimento')
        let maior = valores[0] //pq quando analisa o primeiro apenas, ainda nao tem maior nem menor.entao ele é o maior e o menor
        let menor = valores[0]
        let soma = 0
        let media = 0
       
        for(let pos=0;pos<valores.length;pos++){//para cada posição em valores faz um teste
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
                
            }
            if(valores[pos]< menor){
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML='' //para res zerar o valor
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior número adicionado é ${maior}</p>`
        res.innerHTML += `<p>O menor número adicionado é ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos números é ${media}</p>`
    }

   
}
function calcular(){
    var num = document.getElementById('inum') //estou digitando em tal input
    var coment = document.getElementById('icomentario')

    if(num.value === '')
        window.alert('Por favor, digite um número') 

    else{
        var numero = Number(num.value) //pegou o valor digitado no input e transformou em numero
        var resultado = ''

        for(var i=0; i<=10;i++){
            resultado+=`${numero} x ${i} = ${numero * i}\n` //+= acumula a linha conforme o for vai repetindo 
        }
        coment.value= resultado
    }
   
    
}


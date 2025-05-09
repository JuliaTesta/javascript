function contar(){
    var num1 = document.getElementById('inum1') //oi, estou digitando no input tal
    var num2 = document.getElementById('inum2')
    var pass = document.getElementById('ipass')
    var res = document.getElementById('res')

    if(num1.value.length == 0 || num2.value.length == 0 || pass.value.length == 0){
         res.innerHTML = 'Impossível contar'
       window.alert('ERRO - Dados incompletos!')
      
    }
    else{
        //convertendo valores digitados pelo um usuário em números reais (Number)
        res.innerHTML = 'Contando:'
        var i = Number(num1.value) //oi, peguei o valor digitado no input tal e transformei em numero
        var f = Number(num2.value)
        var p = Number(pass.value)
        if(p<=0){
            window.alert('Inválido! Considerando PASSO 1')
            p = 1   
        }

        
        if(i<f){
            //Contagem Crescente
            for(var c=i; c<=f; c+=p){
                res.innerHTML += `${c} \u{1F449}` //+= para juntar o que ja tinha (contando) + o valor
                }
    
                res.innerHTML += `\u{1F3C1}`
        }
        else{
            //Contagem Decrescente
            for(var c=i; c>=f; c-=p){
                res.innerHTML += `${c} \u{1F449}` //+= para juntar o que ja tinha (contando) + o valor
                }
    
                res.innerHTML += `\u{1F3C1}`
        }

            
    }

}




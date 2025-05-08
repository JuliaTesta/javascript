function verificar(){
    var data = new Date
    var ano = data.getFullYear() //pega varialvel data e mostra o ano com 4 digitos 
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value)  > ano){
        window.alert('ERRO - tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('sexo') //usa name pq tem dois botoes radio com o mesmo nome
        var idade = ano - Number(fano.value) 
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
   

    if(fsex[0].checked){
        gênero = 'homem'
        if(idade>=0 && idade<10){
            img.setAttribute('src','menino.jpg')
        }
        else if(idade>=10 && idade <21){
            img.setAttribute('src','moco.jpg')
        }
        else{
            //IDOSO
            img.setAttribute('src','idoso.jpg')
        }
    }
    else if(fsex[1].checked){
        gênero =   'mulher'
        if(idade>=0 && idade <10){
            img.setAttribute('src','menina.jpg')
        }
        else if( idade >=21 && idade <50){
            //ADULTO
            img.setAttribute('src','mulher.jpg')
        }
        else{
            //IDOSO
            img.setAttribute('src','idosa.jpg')
        }
       
    }
    res.appendChild(img)
}
    
}

    
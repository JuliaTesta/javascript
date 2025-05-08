function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //ANO ATUAL COM 4 DIGITOS
    var fano= document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO tente novamente')
    }
    else{
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id','foto')
    }

    if(fsex[0].checked){
        gênero = 'Homem'
        if(idade >=0 && idade <10){
            //CRIANÇA
            img.setAttribute('src','menino.jpg')
        }
        else if(idade >=10 && idade < 21){
            //JOVEM
            img.setAttribute('src','moco.jpg')
        }
        else if( idade >=21 && idade <50){
            //ADULTO
            img.setAttribute('src','homem.jpg')
        }
        else{
            //IDOSO
            img.setAttribute('src','idoso.jpg')
        }
    }
    
    else if(fsex[1].checked){
        gênero = 'Mulher'
        if(idade >=0 && idade <10){
            //CRIANÇA
            img.setAttribute('src','menina.jpg')
        }
        else if(idade >=10 && idade < 21){
            //JOVEM
            img.setAttribute('src','moca.jpg')
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
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
}
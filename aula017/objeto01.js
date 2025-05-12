let amigo = {nome: 'Jose', 
    sexo:'m', 
    peso:85, engordar(p=0){ //se nao passar, o peso é zero
        console.log('engordou')
        this.peso += p 
    }}

    amigo.engordar(2)
    console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
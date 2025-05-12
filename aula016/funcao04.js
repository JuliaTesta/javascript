function fatorial(n){
    let fat=1
    for(let c = n; c>1; c--){ //nao coloca c<=1 justamente pq fat ja vale 1 e esta fazendo * c
        fat *= c
    }
    return fat
}

console.log(fatorial(5))
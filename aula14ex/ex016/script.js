function calculo(){
    inicio = document.getElementById('inicio')
    fim = document.getElementById('fim')
    passo = document.getElementById('passo')
    res = document.getElementById('res')

    i = Number(inicio.value)
    f = Number(fim.value)
    p = Number(passo.value)

    for (c = i;c <= f;c += p){
        res.innerHTML += `${c} > `
    }
    res.innerHTML += 'fim'
}   
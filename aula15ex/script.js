numeros = []
numt = document.getElementById('txtnum')
select = document.getElementById('select')
res = document.getElementById('res')


function adicionar(){
    num = Number(numt.value)
    item = document.createElement('option')
    item.text = `Valor ${num} adicionado!`
    select.appendChild(item)
    numeros.push(num)
}

function calcular(){
    soma = 0
    for (c in numeros){
        if (c == 0){
            maior = menor = numeros[c]
        } else if (numeros[c] > maior){
            maior = numeros[c]
        } else if (numeros[c] < menor){
            menor = numeros[c]
        }
        soma += numeros[c]     
    }
    res.innerHTML = `<p>Ao todo temos ${numeros.length} valores informados</p>`
    res.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`
    res.innerHTML += `<p>A soma dos valores foi de: ${soma}</p>`
    res.innerHTML += `<p>A média dos valores foi de: ${soma / numeros.length}</p>`
}

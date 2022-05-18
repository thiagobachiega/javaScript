function calculo(){
    numt = document.getElementById('txtn')
    num = Number(numt.value)
    c = 1

    /*while (c <= 10){
        item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        tab.appendChild(item)
        tab.value = `tab${c}`
        c++
    }*/
    res = document.getElementById('res')
    res.innerHTML = '<select name="select" id="select" size="10"></select>'
    tab = document.getElementById('select')
    tab.innerHTML = ''

    while (c <= 10){
        item = document.createElement('option') //criou a tag <option value=""></option> e guardou dentro da variável item
        item.text = `${num} x ${c} = ${num*c}` //alterou o texto que vai dentro da tag option, ficando: <option value="">${num} x ${c} = ${num*c}</option>
        tab.appendChild(item) //colocou o conteudo de item dentro da tag <select name="select" id="select" size="10"></select>
        c++    
    }
    
}
function calcularIdade(){
    data = new Date()
    ano = data.getFullYear()
    nasc = document.getElementById('nascimento')
    idade = ano - nasc.value
    img = document.getElementById('pessoa')
    txt = document.getElementById('text')
    rsex = document.getElementsByName('radsex')
    genero = 'aa'
    if (idade < 0){
        alert('ERRO, tente novamente!')
    } else {     
        if (rsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 18){
                img.src ='imagens/manha.jpg'
            } else if (idade < 60) {
                img.src ='imagens/tarde.jpg'
            } else if (idade >= 60) {
                img.src ='imagens/noite.jpg'
            }
        } else if (rsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 18){
                img.src ='imagens/manha.jpg'
            } else if (idade < 60) {
                img.src ='imagens/tarde.jpg'
            } else if (idade >= 60) {
                img.src ='imagens/noite.jpg'
            }
        }
    }   
    txt.innerHTML = `Detectamos ${genero} com ${idade} anos`
}   
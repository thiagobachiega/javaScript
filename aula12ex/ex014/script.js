function carregar(){
    var hora = new Date()
    var horaatual = hora.getHours()
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('mensagem')
    if (horaatual > 00 && horaatual < 12){
        msg.innerHTML = `São ${horaatual} horas, tenha um bom dia.`
        img.src = "imagens/manha.jpg"
        document.body.style = 'background: dark-blue;'
    } else if (horaatual > 12 && horaatual < 19){
        msg.innerHTML = `São ${horaatual} horas, tenha uma boa tarde.`
        img.src = "imagens/tarde.jpg"
        document.body.style = 'background: orange;'
    } else {
        msg.innerHTML = `São ${horaatual} horas, tenha uma boa noite.`
        img.src = "imagens/noite.jpg"
        document.body.style = 'background: grey;'
    }
}
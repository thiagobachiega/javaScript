agora = new Date()
diaSem = agora.getDay()

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')   
        break
    case 2:
        console.log('Terça')
        break    
    default:
        console.log('ERRO!')

}
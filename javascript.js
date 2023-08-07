/*projeto de Pedra,Papel e Tesoura
Primeiro = Criar function que faz com que 
           o computador escolha uma das 3 opções. > FEITO
           
Segundo =  De alguma forma, fazer o usuário escolher
           uma das 3 opções > FEITO
           
Terceiro =  Criar um round que funcione > FEITO    


Quarto = Criar um loop que roda o jogo 5 vezes

Cinco = Armazenar o ganhador de cada rodada e avisar o vencedor no final


*/





let opções = ['pedra','papel','tesoura']
let vitJog = 0     
let vitCpu = 0  
let rodadas = 0
function escolhaComputador() {
    let escolhaComputer = opções[Math.floor(Math.random()*opções.length)]
    console.log(escolhaComputer)
    return escolhaComputer
}


let teste

function jogo(teste) {
  
    let a= teste
    let b=escolhaComputador()
    let jogRes = document.querySelector('#jogResult')
    let cpuRes = document.querySelector('#cpuResult')
    let final = document.querySelector('#final')

 
    if(a==='papel'&&b==='pedra'){jogRes.innerHTML=`Papel ganha de Pedra, você ganhou`,vitJog++,rodadas++,console.log(rodadas)}
    else if(a===b){jogRes.innerHTML=`Foi um empate`,rodadas++,console.log(rodadas)}
    else if(a==='pedra'&&b==='tesoura'){jogRes.innerHTML=`Pedra ganha de Tesoura, você ganhou`,vitJog++,rodadas++,console.log(rodadas)}
    else if(a==='tesoura'&&b==='papel'){jogRes.innerHTML=`Tesoura ganha de Papel, você ganhou`,vitJog++,rodadas++,console.log(rodadas)}
    else if (a==="papel"&&b==="tesoura"){cpuRes.innerHTML='Perdeu! Tesoura vence Papel',vitCpu++,rodadas++,console.log(rodadas)}
    else if (a==="tesoura"&&b==="pedra"){cpuRes.innerHTML='Perdeu! Pedra vence Tesoura',vitCpu++,rodadas++,console.log(rodadas)}
    else if (a==="pedra"&&b==="papel"){cpuRes.innerHTML='Perdeu! Papel vence Pedra',vitCpu++,rodadas++,console.log(rodadas)}
    
        
    if (rodadas===5&&vitJog>vitCpu){final.innerHTML='Você venceu, parabéns'} else if(rodadas===5&&vitJog<vitCpu){final.innerHTML='Você perdeu, que pena'}else if(rodadas===5&&vitJog===vitCpu){final.innerHTML='Vocês empataram, impressionante'}
    let placar = document.querySelector('#placar')
    placar.innerHTML=`<strong>Placar</strong><br>${vitJog} - ${vitCpu}`

    let rod = document.querySelector('.rodadas')
    rod.innerHTML=`<strong>Rodadas:<br>${rodadas}`
            
    }

let placar = document.querySelector('#placar')
placar.innerHTML=`<strong>Placar</strong><br>${vitJog} - ${vitCpu}`


jogo()



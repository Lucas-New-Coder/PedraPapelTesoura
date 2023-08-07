/*projeto de Pedra,Papel e Tesoura
Primeiro = Criar function que faz com que 
           o computador escolha uma das 3 opções. > FEITO
           
Segundo =  De alguma forma, fazer o usuário escolher
           uma das 3 opções > FEITO
           
Terceiro =  Criar um round que funcione > FEITO    


Quarto = Criar um loop que roda o jogo 5 vezes

Cinco = Armazenar o ganhador de cada rodada e avisar o vencedor no final


*/





let opções = ['pedra','papel','tesoura'] //Escolhas do Computador
let vitJog = 0  //Contador de vitorias do usuario
let vitCpu = 0  //Contador de Vitorias do CPU
let rodadas = 0 //Contador de rodadas 
function escolhaComputador() {
    let escolhaComputer = opções[Math.floor(Math.random()*opções.length)]
    console.log(escolhaComputer)
    return escolhaComputer
}//Faz com que o computador escolha aleatoriamente entre as opções


let teste

function jogo(teste) {
  
    let a= teste //Valor do SVG clicado
    let b=escolhaComputador() //Escolha do Computadir 
    let jogRes = document.querySelector('#jogResult') // Texto de vitoria do jogador
    let cpuRes = document.querySelector('#cpuResult')// Texto de vitoria do cpu
    let final = document.querySelector('#final') // resultado final da partida

 
    if(a==='papel'&&b==='pedra'){jogRes.innerHTML=`Papel ganha de Pedra, você ganhou`,vitJog++,rodadas++,console.log(rodadas)}// papel ganha de pedra - jogador

    else if(a===b){jogRes.innerHTML=`Foi um empate`,rodadas++,console.log(rodadas)} // Empate

    else if(a==='pedra'&&b==='tesoura'){jogRes.innerHTML=`Pedra ganha de Tesoura, você ganhou`,vitJog++,rodadas++,console.log(rodadas)} // Pedra Ganha de tesoura - jogador

    else if(a==='tesoura'&&b==='papel'){jogRes.innerHTML=`Tesoura ganha de Papel, você ganhou`,vitJog++,rodadas++,console.log(rodadas)} //tesoura ganha de papel - jogador

    else if (a==="papel"&&b==="tesoura"){jogRes.innerHTML='Perdeu! Tesoura vence Papel',vitCpu++,rodadas++,console.log(rodadas)} //papel perde para tesoura - cpu

    else if (a==="tesoura"&&b==="pedra"){jogRes.innerHTML='Perdeu! Pedra vence Tesoura',vitCpu++,rodadas++,console.log(rodadas)} // tesoura perde para pedra - cpu

    else if (a==="pedra"&&b==="papel"){jogRes.innerHTML='Perdeu! Papel vence Pedra',vitCpu++,rodadas++,console.log(rodadas)} // pedra perde para papel - cpu
    
        
    if (rodadas===5&&vitJog>vitCpu){final.innerHTML='Você venceu, parabéns'} else if(rodadas===5&&vitJog<vitCpu){final.innerHTML='Você perdeu, que pena'}else if(rodadas===5&&vitJog===vitCpu){final.innerHTML='Vocês empataram, impressionante'} //contador de roradas 


    let placar = document.querySelector('#placar')
    placar.innerHTML=`<strong>Placar</strong><br>${vitJog} - ${vitCpu}` // altera o texto do placar 

    let rod = document.querySelector('.rodadas')
    rod.innerHTML=`<strong>Rodadas:<br>${rodadas}` // altera o texto das rodadas
            
    }

let placar = document.querySelector('#placar')
placar.innerHTML=`<strong>Placar</strong><br>${vitJog} - ${vitCpu}`


jogo()



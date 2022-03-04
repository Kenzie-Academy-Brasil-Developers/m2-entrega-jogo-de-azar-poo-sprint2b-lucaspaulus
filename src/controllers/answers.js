import {ball8magic} from "../models/answers.js"
import {answerDb} from "../db/answerDb.js"
import {randomNumbers} from "../models/randomNumbers.js"
import {animateBall8} from "../models/animate.js"

const smallCircle = document.getElementsByClassName("circle__small")[0]
const number8 = document.getElementsByClassName("hide")[0]
const input = document.getElementsByTagName("input")[0]

const mensagem = document.createElement("p")


smallCircle.appendChild(mensagem)


function showNumber8(){
    number8.style.display = "block"
}

function hideNumber8(){
    number8.style.display = "none"
}
class answerControl{
    static execute(){
        
        mensagem.style.fontSize = "14px"

        animateBall8.addBallEfect()
        const magicAnswer = new ball8magic(answerDb, randomNumbers.getnumber(9,0))

        let answer = magicAnswer._answer
        let randomNumberResult = ''
        
        if(input.value.length < 1){
            hideNumber8()
            mensagem.innerHTML = "insira uma pergunta acima"
        }else{
            randomNumberResult = magicAnswer._randomNumber
        }

        switch(randomNumberResult){
            case 0:
                hideNumber8()
                mensagem.innerHTML = `${answer[0]}`
                break
            case 1:
                hideNumber8()
                mensagem.innerHTML = `${answer[1]}`
                break
            case 2:
                hideNumber8()
                mensagem.innerHTML = `${answer[2]}`
                break
            case 3:
                hideNumber8()
                mensagem.innerHTML = `${answer[3]}`
                break
            case 4:
                hideNumber8()
                mensagem.innerHTML = `${answer[4]}`
                break
            case 5:
                hideNumber8()
                mensagem.innerHTML = `${answer[5]}`
                break
            case 6:
                hideNumber8()
                mensagem.innerHTML = `${answer[6]}`
                break
            case 7:
                hideNumber8()
                mensagem.innerHTML = `${answer[7]}`
                break
            case 8:
                hideNumber8()
                mensagem.innerHTML = `${answer[8]}`
                break
                        
        }
         
    }
}

export {answerControl}
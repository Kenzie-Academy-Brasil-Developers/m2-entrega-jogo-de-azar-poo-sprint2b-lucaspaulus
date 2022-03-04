// Escreva seu código aqui
//import {ball8magic} from "./models/answers.js"
import { answerControl} from "./controllers/answers.js"
const btn = document.getElementsByClassName("btn")[0]
btn.addEventListener("click", answerControl.execute)



/* class ball8magic{
    constructor(answer){
        this._answer = answer
    }

    get answer(){
        
        return this._answer
    }
    
    set answer(strings){
        this._answer = strings
    }

    startAnswers(){
         console.log("ola")
    }
}

const ball8 = new ball8magic("hello")

ball8.startAnswers() */


// Escreva seu código aqui
import { answerControl} from "./controllers/answers.js"
const btn = document.getElementsByClassName("btn")[0]
btn.addEventListener("click", answerControl.execute)





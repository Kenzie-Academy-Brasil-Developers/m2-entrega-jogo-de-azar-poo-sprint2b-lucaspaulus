class randomNumbers{
    static getnumber(maxNumber,minNumber){
          
         return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber
    }
}

/* let result = randomNumbers.getnumber(8,0)


console.log(result) */

export {randomNumbers}
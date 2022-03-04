class randomNumbers{
    static getnumber(maxNumber,minNumber){
          
         return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber
    }
}

export {randomNumbers}
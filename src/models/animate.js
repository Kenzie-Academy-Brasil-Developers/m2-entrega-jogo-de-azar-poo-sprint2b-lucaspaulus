class animateBall8{
    static addBallEfect(){
        const smallCircleAnimate = document.getElementsByClassName("circle__small")[0]
        const bigCircleAnimate = document.getElementsByClassName("circle__big")[0]
      
        smallCircleAnimate.classList.add("circle__small-animate")
        bigCircleAnimate.classList.add("circle__big-animate")
    }
}

export {animateBall8}
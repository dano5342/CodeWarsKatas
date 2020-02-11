/*
You need to work out if the shark will get to you before you can get to the pontoon. 
To make it easier... as you do the mental calculations in the water you either freeze when you realise you are 
dead, or swim when you realise you can make it!

You are given 5 variables: sharkDistance = distance the shark needs to cover to eat you in metres, 
sharkSpeed = how fast it can move in metres/second, 
pontoonDistance = how far you need to swim to safety in metres, 
youSpeed = how fast you can swim in metres/second, 
dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

If you make it, return "Alive!", if not, return "Shark Bait!".
*/

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) {
        sharkSpeed /= 2;
    }
    return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ? "Alive!" : "Shark Bait!";
}

// ES6 
const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
    let youTime = pontoonDistance / youSpeed
    let sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)
    
    return sharkTime < youTime ? 'Shark Bait!' : 'Alive!'
  }

// Horrible one liner:
shark = (pD, sD, yS, sS, d) => yS / pD  > sS / sD / (d ? 2 : 1) ? "Alive!" : "Shark Bait!";

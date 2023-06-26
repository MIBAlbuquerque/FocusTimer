import {
  playBtn,
  stopBtn,
  plusBtn,
  minusBtn,
  forestBtn,
  rainBtn,
  coffeeBtn,
  fireBtn,
  sunBtn,
  moonBtn,
} from "./elements.js";

import Sounds from "./sounds.js"

import Timer  from "./functions.js"

const timer = Timer ()
const sound = Sounds ()


playBtn.addEventListener("click", timer.countdown)

stopBtn.addEventListener("click", timer.resetTimer)

plusBtn.addEventListener("click", timer.addMinutes)

minusBtn.addEventListener("click", timer.minusMinutes)

forestBtn.addEventListener("click", sound.playForest)
rainBtn.addEventListener("click", sound.playRain)
coffeeBtn.addEventListener("click", sound.playCoffee)
fireBtn.addEventListener("click", sound.playFire)

sunBtn.addEventListener("click", timer.darkModeToggle)
moonBtn.addEventListener("click", timer.darkModeToggle)
import { forestBtn, rainBtn, coffeeBtn, fireBtn } from "./elements.js";
export default function Sounds (){

const forestAudio = new Audio(
  "https://github.com/devgustavosantos/focus-timer-dark-mode/blob/main/assets/sound/forest.wav?raw=true"
);

 const rainAudio = new Audio(
  "../audios/rain.wav"
);

const coffeeAudio = new Audio(
  "https://github.com/devgustavosantos/focus-timer-dark-mode/blob/main/assets/sound/coffee-shop.wav?raw=true"
);

const fireAudio = new Audio(
  "https://github.com/devgustavosantos/focus-timer-dark-mode/blob/main/assets/sound/fire-pit.wav?raw=true"
);

fireAudio.loop = true
forestAudio.loop = true

let currentAudio;

function playAudio (audio){
  currentAudio?.pause()

  if(currentAudio !== audio){
    currentAudio = audio
    currentAudio.play()

  }
  else {
    currentAudio = undefined
  }
}

function playForest () {
  playAudio(forestAudio)
  forestBtn.classList.toggle("selected")
  rainBtn.classList.remove("selected")
  coffeeBtn.classList.remove("selected")
  fireBtn.classList.remove("selected")

}


function playRain () {
  playAudio(rainAudio)
  forestBtn.classList.remove("selected")
  rainBtn.classList.toggle("selected")
  coffeeBtn.classList.remove("selected")
  fireBtn.classList.remove("selected")
}

function playCoffee () {
  playAudio(coffeeAudio)
  forestBtn.classList.remove("selected")
  rainBtn.classList.remove("selected")
  coffeeBtn.classList.toggle("selected")
  fireBtn.classList.remove("selected")
}

function playFire () {
  playAudio(fireAudio)
  forestBtn.classList.remove("selected")
  rainBtn.classList.remove("selected")
  coffeeBtn.classList.remove("selected")
  fireBtn.classList.toggle("selected")
}

  return {
    playForest, 
    playRain,
    playCoffee,
    playFire,
  }
}
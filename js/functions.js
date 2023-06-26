// funcao para o timer funcionar
import {
  displayMinutes,
  displaySeconds,
  minusBtn,
  playBtn,
  plusBtn,
  stopBtn,
  sunBtn,
  moonBtn,
  body,
  timerDisplay,
  timerControls,
  soundBtns,
} from "./elements.js";

export default function Timer() {
  let timerTimeOut;
  let minutes = 25;
  let currentMinutes = minutes;
  let currentSeconds = 0;

  function resetTimer() {
   
    currentMinutes = minutes;
    
    currentSeconds = 0;
    clearInterval(timerTimeOut);
    updateDisplay();

    timerTimeOut = undefined;

    if((minutes + 5 ) > 60){
      disableBtn(plusBtn);
    }
    else {
      activateBtn(plusBtn)
    }
    activateBtn(playBtn);
    if((minutes -5) <= 0){
      disableBtn(minusBtn)
    }else {
      activateBtn(minusBtn)
    }
    disableBtn(stopBtn);
  }

  function updateDisplay() {
    displayMinutes.textContent = String(currentMinutes).padStart(2, "0");
    displaySeconds.textContent = String(currentSeconds).padStart(2, "0");
  }

  function countdown() {
    disableBtn(plusBtn);
    disableBtn(minusBtn);
    disableBtn(playBtn);
    activateBtn(stopBtn);

    if (timerTimeOut) {
      return;
    }

    timerTimeOut = setInterval(function () {

      if (currentMinutes === 0 && currentSeconds === 0) {
        resetTimer();
        return;
      }


      if (currentSeconds <= 0) {
        currentSeconds = 59;
        --currentMinutes;
      } else {
        --currentSeconds;
      }
      updateDisplay();
    }, 1000);
  }

  updateDisplay();
  disableBtn(stopBtn);

  if ((minutes - 5) <= 0) {
    disableBtn(minusBtn);
  }

  function addMinutes() {
    if ((minutes + 5) < 59) {
      minutes = minutes + 5;
      resetTimer();

    } else {
      minutes = 60;
      currentMinutes = minutes;
      disableBtn(plusBtn);
      updateDisplay();
      return;
    }
  }

  function minusMinutes() {
    minutes = minutes - 5;
    resetTimer();

    if ((minutes - 5) <= 0) {
      disableBtn(minusBtn);
    }
  }

  function disableBtn(btn) {
    btn.setAttribute("disabled", true);
    btn.classList.add("disabled");
  }

  function activateBtn(btn) {
    btn.removeAttribute("disabled");
    btn.classList.remove("disabled");
  }

  function darkModeToggle() {
    body.classList.toggle("dark");
    sunBtn.classList.toggle("hidden");
    moonBtn.classList.toggle("hidden");
    timerDisplay.classList.toggle("dark");
    timerControls.classList.toggle("dark");
    soundBtns.classList.toggle("dark");
  }

  return {
    countdown,
    resetTimer,
    updateDisplay,
    addMinutes,
    minusMinutes,
    darkModeToggle,
  };
}

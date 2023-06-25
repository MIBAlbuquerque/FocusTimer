// funcao para o timer funcionar
import { displayMinutes, displaySeconds, minusBtn, playBtn, plusBtn, stopBtn } from "./elements.js";

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

    activateBtn(plusBtn);
    activateBtn(minusBtn);
    activateBtn(playBtn);
    disableBtn(stopBtn)
  }


  function updateDisplay() {
    displayMinutes.textContent = String(currentMinutes).padStart(2, "0");
    displaySeconds.textContent = String(currentSeconds).padStart(2, "0");
  }

  function countdown() {

    disableBtn(plusBtn);
    disableBtn(minusBtn);
    disableBtn(playBtn);
    activateBtn(stopBtn)

    if(timerTimeOut){
      return
    }

    timerTimeOut = setInterval(function () {

      if (currentMinutes === 0 && currentSeconds === 0) {
        resetTimer();

        return;
      }

      if (currentSeconds <= 0) {
        currentSeconds = 59;
        --currentMinutes;
      }
      else {
        --currentSeconds;
      }
      updateDisplay();
    }, 1000);
  }

  updateDisplay()
  disableBtn(stopBtn)

  if((minutes - 5) < 0){
    disableBtn(minusBtn);
  }

  function addMinutes (){
    if ((minutes + 5) < 59){
      minutes = minutes + 5
      resetTimer();

    }
    else {
      minutes = 60;
      currentMinutes = minutes;
      disableBtn(plusBtn)
      updateDisplay();
      return;
    }
  }

  function minusMinutes (){
    minutes = minutes - 5;
    resetTimer();

    if((minutes - 5) <= 0){
      disableBtn(minusBtn);
    }
  }

  function disableBtn (btn){
    btn.setAttribute("disabled", true)
    btn.classList.add("disabled")
  }

  function activateBtn (btn){
    btn.removeAttribute("disabled")
    btn.classList.remove("disabled")
  }



  return {
    countdown,
    resetTimer,
    updateDisplay,
    addMinutes,
    minusMinutes,
  };
}

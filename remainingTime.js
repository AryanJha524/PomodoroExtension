// import {time} from './setTimer.js';


function grabButtons(){
    return document.getElementsByClassName("button");
}

function hideButtons() {
    // removes the div the buttons are in
    document.getElementById("time-select").remove();
}

// create function to act 
function beginCountDown(startingTime) {
    // here goes code for making a timer


    document.getElementById("countdown-timer").innerHTML = startingTime;
}


function addEventListenerToButtons(){
    // grab buttons from document
    var btns = grabButtons();
    // add event listener to each button 
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", setTimer)
    }
}


function setTimer(event) {
    let time = event.target.value
    hideButtons();
    beginCountDown(time);
}



addEventListenerToButtons();

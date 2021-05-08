// import {time} from './setTimer.js';


function grabButtons(){
    return document.getElementsByClassName("button");
}

function hideButtons() {
    // removes the div the buttons are in
    document.getElementById("time-select").remove();
}


function resetTimer(){
    // create buttons
    
    // call addEventListener to Buttons
}



function beginCountDown(startingTime) {
    // here goes code for making a timer
    var element = document.getElementById("countdown-timer")

    var countdown = parseInt(startingTime) * 60 * 1000; // time in milliseconds
    var timer = setInterval(function(){
        countdown -= 1000;
        var min = Math.floor(countdown / (60 * 1000));
        var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);

        if (countdown <= 0) {
            alert("Break Time");
            clearInterval(timer);
            // remove timer, re-add buttons
            element.innerHTML = "";
            
        } else {
            if (sec < 10) {
                element.innerHTML = (min + "m : 0" + sec + "s");
            }
            else {
                element.innerHTML = (min + "m : " + sec + "s");
            }
            
        }
    }, 1000); // execute this function every 1000 milliseconds AKA 1 second

    
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

// import {time} from './setTimer.js';


function grabButtons(){
    return document.getElementsByClassName("button");
}

function hideButtons() {
    document.getElementById("25min").remove();
    document.getElementById("30min").remove();
}


function resetTimer(){
    // create buttons
    var btn_25 = document.createElement("BUTTON");
    var btn_30 = document.createElement("BUTTON");
    

    btn_25.innerHTML = "25 minutes";
    btn_30.innerHTML = "30 minutes";

    // set class names and id for buttons
    btn_25.className = "button";
    btn_30.className = "button";
    btn_25.id = "25min";
    btn_30.id = "30min";

    btn_25.value = '25';
    btn_30.value = '30';

    // add buttons back to document
    var time_div = document.getElementById("time-select")
    time_div.appendChild(btn_25);
    time_div.appendChild(btn_30);

    // call addEventListener to Buttons
    addEventListenerToButtons();
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
            clearInterval(timer);
            // remove timer, re-add buttons
            element.innerHTML = "Break Time";
            // add button to ask to start another study session
            resetTimer();
            
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
    // hide heading
    var element = document.getElementById("countdown-timer")
    element.innerHTML = "";

    let time = event.target.value;
    hideButtons();
    beginCountDown(time);
}



addEventListenerToButtons();

// TODO: add styling 
// TODO: add counter of how make study sessions completed
// TODO: add cycle session: choose between manual mode or sessions mode
    // if session mode, just loop between break and study n amount of times 
    // if "manual mode", keep as is, user clicks buttons

function grabButtons(){
    return document.getElementsByClassName("button");
}

// change into loop and change input params to a single array of ids
function hideButtons(id1, id2) {
    document.getElementById(id1).remove();
    document.getElementById(id2).remove();
}

function createTimeButtons() {
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
}



function resetTimer(){
    // create buttons
    createTimeButtons();

    // call addEventListener to Buttons
    addEventListenerToButtons();
}


function handleChoice(event) {
    let choice = event.target.value;
    hideButtons("break", "reset");

    if (choice == 'break') {
        beginCountDown(5); // default break time
    }
    else if (choice == 'reset') {
        resetTimer();
    }

}


function userChoice() {
    // add button options to reset timer
    var time_div = document.getElementById("time-select");
    var breakBtn = document.createElement("BUTTON");
    var resetBtn = document.createElement("BUTTON");
    

    breakBtn.innerHTML = "Start Break";
    resetBtn.innerHTML = "Reset Study Timer";

    // set class names and id for buttons
    breakBtn.className = "button";
    resetBtn.className = "button";
    breakBtn.id = "break";
    resetBtn.id = "reset";

    breakBtn.value = 'break';
    resetBtn.value = 'reset';

    breakBtn.addEventListener("click", handleChoice);
    resetBtn.addEventListener("click", handleChoice);

    time_div.appendChild(breakBtn);
    time_div.appendChild(resetBtn);


}


function beginCountDown(startingTime) {
    var element = document.getElementById("countdown-timer")

    var countdown = parseInt(startingTime) * 60 * 1000; // time in milliseconds
    var timer = setInterval(function(){
        countdown -= 1000;
        var min = Math.floor(countdown / (60 * 1000));
        var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);

        if (countdown <= 0) {
            clearInterval(timer);
            // remove timer, re-add buttons
            element.innerHTML = "Session Complete";
            userChoice();
            
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
    hideButtons("25min", "30min");
    beginCountDown(time);
}



addEventListenerToButtons();

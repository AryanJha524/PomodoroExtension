const btns = document.getElementsByClassName("button")

// add event listener to each button
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", setTimer)
}


// start study countdown timer based on selected time
function setTimer(event) {
    let time = event.target.value
    // open a new url
    chrome.tabs.create({url: 'countdown.html'}) 
}



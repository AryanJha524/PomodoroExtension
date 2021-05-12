const btns = document.getElementsByClassName("button")


// add event listener to each button
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", setTimer)
}


// start study countdown timer based on selected time
function setTimer(event) {
    let choice = event.target.value
    if (choice == "True") {
        chrome.tabs.create({url: 'countdown.html'}) 
    }
    else {
        window.close()
    }

}



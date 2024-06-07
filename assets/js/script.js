var accent = "#02d498";
var difficultySelector = ""; /* default no diffulty selected */


/* Clears all content, for new content to be added */
function setGameContainerContent(screen) {
    /* clears the container first */
    let container = document.getElementById('game-container');
    container.innerHTML = '';

    /* determins which content to add to show a certain screen */
    if (screen == "pre-game") {
        container.innerHTML = "yo g";
    } else if (screen == "start-game") {
        container.innerHTML = "start game";
    } else {
        container.innerHTML = "ERROR";
    }
}



function selectDifficultyButton(buttonNumber) {

    let buttons = document.getElementById("difficulty-checkbox-container").children;
    let livesTimerList = document.getElementById("lives-timer-amounts").children;

    for (let i = 0; i < 3; i++) {
        if (i == buttonNumber) {
            /* adds different border colour to selected button */
            buttons[i].classList.add("difficulty-buttons-clicked");
            difficultySelector = buttons[i].innerHTML;

            if (i == 0) {
                livesTimerList[0].innerHTML = "Lives : 5";
                livesTimerList[1].innerHTML = "Timer : 10s";
            } else if (i == 1) {
                livesTimerList[0].innerHTML = "Lives : 4";
                livesTimerList[1].innerHTML = "Timer : 7s";
            } else if (i == 2) {
                livesTimerList[0].innerHTML = "Lives : 3";
                livesTimerList[1].innerHTML = "Timer : 5s";
            }

        } else {
            /* resets the rest of the buttons borders in case it was changed before*/
            buttons[i].classList.remove("difficulty-buttons-clicked");
        }
    }

}


/* makes sure a difficulty is selected for it to start game */
function checkDifficultyIsSelected() {

    if (difficultySelector != "") {
        setGameContainerContent("start-game");
    }
}




/* easy writing to console */
function print(consoleMsg) {
    console.log(consoleMsg);
}
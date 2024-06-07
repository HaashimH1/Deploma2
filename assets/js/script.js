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

    for (let i = 0; i < 3; i++) {
        if (i == buttonNumber) {
            /* adds different border colour to selected button */
            buttons[i].style.color = accent;
            buttons[i].style.borderColor = accent;
            difficultySelector = buttons[i].innerHTML;
            print(difficultySelector);
        } else {
            /* resets the rest of the buttons borders in case it was changed before*/
            buttons[i].style.color = "white";
            buttons[i].style.borderColor = "white";
        }
    }

}


/* makes sure a difficulty is selected for it to start game */
function checkDifficultyIsSelected(){

    if (difficultySelector != ""){
          setGameContainerContent("start-game");
    }
}




/* easy writing to console */
function print(consoleMsg) {
    console.log(consoleMsg);
}
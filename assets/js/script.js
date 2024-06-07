var accent = "#02d498";
var difficultySelector = ""; /* default no diffulty selected */

var homeHTML = ` <h1>Welcome to Game of Flags</h1>
            <p>Aim of this Game is to Figure out the Countrys Flag Shown.</p>
            <p> There are 3 levels to choose from, each with a
                different Timer length and Lives. If Time runs out or guess incorrectly you lose a live. Lose your lives
                and the Game ends.
            </p>

            <button class="buttons" id="game-button" onclick="setGameContainerContent('pre-game')">GAME</button>`;

var preGameHTML = `<h1>CHOOSE DIFFICULTY</h1>

            <div id="difficulty-content-container">
                <div id="difficulty-checkbox-container">
                    <button class="difficulty-buttons" onclick="selectDifficultyButton(0)">EASY</button>
                    <button class="difficulty-buttons" onclick="selectDifficultyButton(1)">MEDIUM</button>
                    <button class="difficulty-buttons" onclick="selectDifficultyButton(2)">HARD</button>
                </div>

                <ul id="lives-timer-amounts">
                      <li>Lives : 3-5</li>
                      <li>Timer : 10s-5s</li>
                </ul>

                <button class="buttons" onclick="checkDifficultyIsSelected()">START</button>`;


/* Clears all content, for new content to be added */
function setGameContainerContent(screen) {
    /* clears the container first */
    let container = document.getElementById('game-container');
    container.innerHTML = '';

    /* determins which content to add to show a certain screen */
    if (screen == "pre-game") {
        container.innerHTML = preGameHTML;
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
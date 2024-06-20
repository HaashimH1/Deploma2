# FLAGS
Flags website is a method to learn all the countrys flags in a fun and challenging way. This for people who dont want to learn them a boring way and wants to at least enjoy learning this new skill to recognize any countrys flag.
![website responsiveness on different screens](assets/images/README_images/readme1.png)
Link to the [Live Website](https://haashimh1.github.io/Deploma2/)


## Table of Contents

1. [User Stories](#user-stories)
2. [Design](#design)
3. [Game Breakdown](#game-breakdown)
4. [Technologies Used](#technologies-used)
5. [Testing](#testing)
6. [Deployment](#deployment)
7. [Credits](#credits)

## User Stories
First time User Expectations

- I want to test myself of my flag knowledge and improve upon it.
- I want to have fun no matter how little or big knowledge i have. 
- I want to know the answer even if i get it wrong to improve my knowledge.
- I want it to be clear structured and easy to use.

Returning User Expecations

- I want there to be alot of flags so i dont get bored too quickly.
- I want to be able to change my difficulty after each game.


## Design
### Colour Scheme
![colour scheme palette](assets/images/README_images/readme2.png)
- Black, white as main colours for good contrast between content and background.
- Emeraldish colour as an accent to give better identity to important elements  
- Slightly lighter shade of black as the game container background.
### Structure : Website split into 3 parts
- Header
  ![Header bar screenshot](assets/images/README_images/readme3.png)
  - Minimal design and content as it does serve much of purpose, only to hold the logo of the page and the tite.
- Main
  - Most important part as this is where the game container is held. 
![game container screenshot](assets/images/README_images/readme4.png)
  - Black background with white text since I want to have a very dark background for game container to provide consistency with website colour scheme, but also a slighly lighter shade of black to give some contrast between the content and its background.
- Footer
![footer screenshot](assets/images/README_images/readme5.png)
  - Again a minimal design to match the header as this aswell does not serve much of a purpose, only to hold a link ti my GitHub profile and my name for Author.

## Game Breakdown
This is a one page Website, therefore the game containers inner HTML content is changed to give an effect of travelling to a new page. The game is split into 4 pages :

- Home : Breakdown of the game.
- Pre Game : Select the difficulty.
- Game : Playing the game.
- Post game : Shows score and restart option.

Each page with a button to go to next page (Post game's restart button goes to Pre Game instead incase user wants to change the difficulty). Buttons will call the same function on click but with different arguements, which will asign the inner HTML contents of the game container to a respective Global variable which holds the HTML for that certain page. Example of one of those Global variables and the function :
![code snippet](assets/images/README_images/readme6.png)
![code snippet](assets/images/README_images/readme7.png)

- Home Page Breakdown
![home page screenshot](assets/images/README_images/readme8.png)
  - Short breakdown of the game and button to next page with the accent colours to signify its importance.


- Pre Game Breadown
- ![pre game screenshot](assets/images/README_images/readme9.png) ![button click effect screenshot](assets/images/README_images/readme10.png)
  - Buttons to select the difficulty and showcases the lives and timer amount for each. On difficulty button click a class of styles are added in a transition to show the importance of choosing your set difficulty, also updates a global variable set the difficulty currently chosen. Below is the function that makes sure a difficulty is chosen when start button is clicked.
  - ![code snippet](assets/images/README_images/readme11.png)
  - difficulty selector is set to empty string as default, to show one is not selected.

- Gameplay breakdown
- ![gameplay screenshot](assets/images/README_images/readme12.png) 
  - Gameplay consists of a country flg, 4 buttons to choose answer from and a display showing the remaining lives and timer. Before further breakdown, below is a table showing all global variables used and what it holds. All of these are blobal since it needs to be manipulated in multiple different functions.

    - | Vaiable Name     | Justification |
      |----------        |     ----------|
      | flags (const)    |Array of 250 objects, each holding a countrys name and a path link to its flags image file|
      | currentFlags    | Array of 250 objects, on new game it is asigned to flags (variable above) so that every flag chosen is then taken out this array, so game changes only affect this array and not the original above so that on game restart it can be reasigned to the original array holding all the flags again.|
      | difficultySelector    | String to hold the difficulty slected in pre game screen|
      | lives    | Integer to hold the lives left|
      | timer    | Integer to hold the start timer for each round|
      | currentTimer    | Integer to hold the time left in each round|
      | correctFlag    | Object holding the name of country chosen and its buttons index that it is in|
      | gameLoop    | Boolean to show if the game loop is on or off, an example of its use case is that timer only ticks down if game loop is on, otherwise it will count down below 0|
      | correctCount    | Intager to show how many correct answers the user has got|
      | gameContainer, timerDisplay, livesDisplay, answerButtonContainer, flagImage    | All are DOM Elements, these are global since we want to minimize the DOM searches as this is an intense task so all these are declared global and initialized when a game starts so it can manipluate the DOM with least searches.|
    
  - When the screen is changed to Game play, the function is called below to initialize some variables and set the game up.
    - ![code snippet](assets/images/README_images/readme13.png) 
      - First it resets correctCount to 0 incase the game was just restarted, then it initilizes the lives and timer variables repective to the difficulty chosen.
    - ![code snippet](assets/images/README_images/readme14.png) 
      - currentFlags is then asigned to the cont flags to reset the array incase game was restarted, game container style changes to better fit the new screen and the initialization of the DOM element variables that will be manipluated throughout the game (Note the gameContainer was initialized in a different function on Window Load up since this element was also maniplauted in previous screens) then newRound function is called to setup the new round.
  


  - New Round setup.
    - ![code snippet](assets/images/README_images/readme15.png) 
      - First is sets and updates the timer display to the start timer, updates the lives display to show the lives left, then chooses a random flag from currentFlags to be chosen as the correct answer, image source is updated to show the chosen flag, correctFlags is then asigned the name of the country chosen for future manipluation, then the flag chosen is then removed from the array so it is not chosen again for that game.
    - ![code snippet](assets/images/README_images/readme16.png)
      - Then the button holding the correct answer is randomized then asgined to correct flags' button index for future manipulation, then the rest of the buttons are randomized with wrong answers. Finnalt the gameLoop is set to true, this is done at the end so that the timer ticks only when the previous setup is done for fairness to user.

  - At this point in the program the round is fully setup, there is no functions running in the background apart from the time ticking function shown below.
    - ![code snippet](assets/images/README_images/readme17.png)
      - This function is called using setInterval every 1000ms (1 second) to update the timer accordingly.

  - Button is clicked to reveal answer
    - ![code snippet](assets/images/README_images/readme18.png)
      - In the HTML, the onclick attribute is used to call the function checkAnswer with its index as arguements.
    - ![code snippet](assets/images/README_images/readme19.png)
      - It first checks is the game loop is true just in case the user clicks multiple buttons causing rounds to skip, then checks if the index passed in mataches with correctFlags' index. If it does, correctCount is incremented as answer is correct and a effect is added by adding a class onto that certain buttons element. Same thing is done if the answer is wrong but with a different effect and the correctCount not changing. Below is an example of those effects.
        - Right Answer Chosen
          - ![right answer chosen button effect](assets/images/README_images/readme20.png)
        - Wrong Answer Chosen
          - ![wrong answer chosen button effect](assets/images/README_images/readme21.png)
        - Time runs out
          - ![No answer chosen button effect](assets/images/README_images/readme22.png)
    
    - After this, a function stopRound. It pauses the game by 1.5 seconds for the user to reflect on the answer, during this gameLoop is set to false so that timer stops ticking, then it checks if the lives is 0 or below, if it is then it calls a function endGame, if not then it resets the button effects that were just added and calls a new round.
      - ![code snippet](assets/images/README_images/readme23.png)

    - If endGame is called, this function will reset the styling changes that were made before, reset difficultySelector, set the new screen to Post Game and then updates the correct guesses HTML to show it to user. 
      - ![code snippet](assets/images/README_images/readme24.png)

- Post Game breakdown
  - ![Post game screen](assets/images/README_images/readme25.png)
    - Displays the correct guesses and a Restart button, onlick will set the screen to Pre Game for a difficulty to be chosen again and start another game.

## Technologies Used

- HTML5 - Blueprint and structure of website
- CSS - Unique styles and design to website.
- JavaScript - Interactabilty and logic to wesbite.
- Git - Version control.
- GitHub - Store the files/data of website.
- GitPod - Building the website
- GitHub Pages - Deploy this website for public to access.
- Chrome Developer Tools - View screen responsiveness on different screens and tools to test website.



## Testing

 ### Validators
   - HTML [W3C](https://validator.w3.org/) No errors
   - CSS [W3C Jigsaw](https://jigsaw.w3.org/css-validator/) No errors
   - JavaScript [JSHint](https://jshint.com/) No Significant errors

  Lighthouse on Desktop
  ![Lighthouse score on Desktop](assets/images/README_images/readme26.png)

  Lighthouse on Mobile
  ![Lighthouse scroe on Mobile](assets/images/README_images/readme27.png)

### Manual Testing
Website has been tested on:
 - Iphone 12 Pro
 - Samsung Galaxy s20
 - Lenovo laptop
 - Ipad Pro
 - Chrome
 - Firefox
 - Edge



### Features Testing

| Feature | Expectation | Result |
|-----    |----------   |--------|
| Game Button Onclick|Changes screen to Pre Game | Pass |
| Select Difficulty| Displays Lives/Timer for each difficulty selected  | Pass |
| Select Difficulty| Adds a selected button Effect | Pass |
| Select Difficulty   | Removes Deselected button effects | Pass |
| Start Button Onlick| Changes screen to Gameplay | Pass |
| Start Button Onlick| Cannot change screen untill a difficulty is chosen | Pass |
| Timer and Lives|Correct values set for difficulty chosen| Pass |
| Flag|Random Flag is chosen and displayed| Pass |
| Answer Buttons|The right and wrong answers are randomized and diplayed| Pass |
| Timer Ticking|Every second timer decreases by 1| Pass |
| Correct Answer Button Onclick|Adds correct effect and starts new round| Pass |
|incorrect Answer Button Onclick|Adds incorrect effects and starts new round if lives ran out| Pass |
| Timer runs out|Adds unique effect and starts new round if lives ran out| Pass |
| Game pause before New Round| Does not allow user to click another button for about 1.5seconds untill new round | Pass |
| New Round setup| Different Flag is chosen each round, timer resets and lives updated accordingly | Pass |
| Endgame| Changes screen if lives or flags left is 0 or below| Pass |
| Correct Answer Count display|Accurate value shown | Pass |
| Start New Game Button Onclick|Changes screen back to Pre Game| Pass |
| Select Difficulty After Restart| Cannot start game if difficulty is not chosen | Pass |
| GitHib Logo Onclick| Opens GitHib profile in new tab | Pass |


## Deployment


This website was deployed using GitHib Pages.

### Deployment Steps

1. In the GitHub repository, navigate to the **Settings** tab.
2. From the source section drop-down menu, select the **Master Branch**.
3. Once this is selected, the page will be automatically refreshed with a detailed ribbon display to indicate successful deployment. The live link can be found on GitHub [here](https://haashimh1.github.io/Deploma2/).


### Clone from GitHub

To clone this repository, follow these steps:

1. On the repository's GitHub page, click on the **Code** button.
2. In the dropdown, click on **Clone** to copy the repository's URL to your clipboard.
3. Open your terminal.
4. Go to the directory where you want to clone the repository.
5. Use the `git clone` command followed by the URL you copied, then hit ENTER.
6. Done, cloned to your local machine!



## Credits


- Logo shown in the header and favicon were generated from text descriptions with [DALL-E by OpenAI](https://openai.com/index/dall-e-3/).
- Compilation of Flags' Images were From [Flagpedia](https://flagpedia.net/download).
- GitHub logo is a free image from [Pixabay](https://pixabay.com/vectors/github-github-logo-github-icon-6980894/)
- Guidance on how to implement features such as timer, setting timout and removing a element from an array was from using [Stack Overflow](https://stackoverflow.com/).
- Font utilized in this website is from [Google Fonts](https://fonts.google.com/specimen/Nunito?query=nunito).
- Feedback from my mentor Akshat Garg @ [Code Institute](https://codeinstitute.net/)








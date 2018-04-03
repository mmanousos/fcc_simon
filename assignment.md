**Build A Simon Game**

*Objective:* Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/obYBjE.

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style:

**User Story:** I am presented with a random series of button presses.

**User Story:** Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.

**User Story:*** I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.

**User Story:** If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.

**User Story:** I can see how many steps are in the current series of button presses.

**User Story:** If I want to restart, I can hit a button to do so, and the game will return to a single step.

**User Story:** I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.

**User Story:** I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.

*Hint:* Here are mp3s you can use for each button: https://s3.amazonaws.com/freecodecamp/simonSound1.mp3, https://s3.amazonaws.com/freecodecamp/simonSound2.mp3, https://s3.amazonaws.com/freecodecamp/simonSound3.mp3, https://s3.amazonaws.com/freecodecamp/simonSound4.mp3.


**// DESIGN NOTES**

**Colors:**
Red: #FF0000;
Yellow: #FFDA00;
Green: #00C718;
Blue: #250EB2;

**Fonts:**
Logo - Ultra;
Controls - Roboto Condensed

<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed|Ultra" rel="stylesheet">

font-family: 'Ultra', serif;
font-family: 'Roboto Condensed', sans-serif;

**Elements:**
• Toggle switch for on/off (optional)
• Button for Start
• Indicator for number of moves / error
• Button and indicator for 'strict mode' on or off
• Buttons for each color


**// PSEUDOCODE**

User presses Start to initiate computer pattern (or reset the game):
	compPlays = [];
	userPlays = [];
	compCurrent = '';
	userCurrent = '';
	Count = 0;

Computer
1) increases count to 1,
2) randomly plays red, yellow, green, or blue, by showing the corresponding light and playing the appropriate sound. Displays for 1 second (each color)
	Function for random calculation:
	<= .249: 'red';
	<= .499: 'yellow';
	<= .749: 'green';
	else: 'blue';  
	Push selected color to compPlays.

3) waits for user to play,
4) checks if user's play was correct.
	As user plays, get corresponding position value from compPlays (hold as compCurrent)
	Check that value against what user presses (hold as userCurrent).
	If correct, push color of their selection to userPlays.

If player is correct, computer 1) increases count by 1, 2) clears userPlays array, 3) repeats play sequence adding another move (e.g. red, then yellow, etc.).

if player is incorrect (or does not push button for 5 seconds)
	if not in strict mode
		1) computer indicates there has been an error, 2) replays colors and sounds to that point.

otherwise (when in strict mode)
	1) computer resets count to 1, and 2) runs play sequence from the beginning. 	

...
after 8 successful plays by user, increase speed of display by computer (decrease display time to 700).

...
after 12 successful plays by user, increase speed of display by computer (decrease display time to 500).

...
after 16 successful plays by user, increase speed of display by computer (decrease display time to 400). *(Not sure if this increase is necessary.)*

...
after 20 successful plays by user,
display winning message. 	


**// TESTS**

Winning: If userPlays has .length of 20 and .deepMatch with compPlays is true, return "user wins".

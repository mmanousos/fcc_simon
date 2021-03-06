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
Blue: #5944E0;

**Button Play Colors:**
Red: #FF5E5E;
Yellow: #FFEB7B;
Green: #5AF46D;
Blue: #816FF3;

**Strict Mode Indicator Color:**
Yellow: #EBC909;

**Fonts:**
Logo - Ultra;
Controls - Roboto Condensed
Display - PT Mono

<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed|Ultra|PT+Mono" rel="stylesheet">

font-family: 'Ultra', serif;
font-family: 'Roboto Condensed', sans-serif;
font-family: 'PT Mono', monospace;

**Elements:**
• Toggle switch for on/off (optional)
• Button for Start
• Indicator for number of moves / error
• Button and indicator for 'strict mode' on or off
• Buttons for each color
https://stackoverflow.com/questions/16263358/quarter-of-a-ring-with-css-and-html#16263646


**// PSEUDOCODE**

User presses Start to initiate computer pattern (or reset the game):
	compPlays = [];
	userPlays = [];
	compCurrent = '';
	userCurrent = '';
	Count = 0;

Computer
1) increases count to 1,
2) randomly selects red, yellow, green, or blue, 3) pushes selected color to compPlays array, 4) alerts user to next play by showing the corresponding light and playing the appropriate sound. Displays for 1 second (for each color)
	Function for random calculation:
	<= .249: 'red';
	<= .499: 'yellow';
	<= .749: 'green';
	else: 'blue';  

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


##### *functionality:*
on start button press, change content of '#start-text' to 'reset' from 'start'.

on press of strict button, add class 'active' and attribute 'aria-pressed="true"' to button; change background-color of '#strict-indicate' to #EBC909;.

for computer to play: generate a random number and associate color appropriately. Push color name to 'compPlays' array.
Cycle through each array element -
element triggers the .quarter corresponding to that element color to lighten in color and the associated sound to play. Delay between each.

for user to play: pull appropriate element of CompPlays array into 'compCurrent' placeholder. User clicks on colored quarter button to match 'compCurrrent' - hold user play as userCurrent.

create variable for userPlayCount (to pull value from compPlays array).



**// TESTS**

Winning: If userPlays has .length of 20 and .deepMatch with compPlays is true, return "user wins".

/*
Write a program that counts and displays the number of times a specified
character appears in a string. Use the following:

Input String: “As he crossed toward the pharmacy at the corner he
involuntarily turned his head because of a burst of light that had ricocheted
from his temple, and saw, with that quick smile with which we greet a
rainbow or a rose, a blindingly white parallelogram of sky being unloaded
from the van—a dresser with mirrors across which, as across a cinema
screen, passed a flawlessly clear reflection of boughs sliding and swaying
not arboreally, but with a human vacillation, produced by the nature of
those who were carrying this sky, these boughs, this gliding façade.”

Character to Count: S

THe program should count lowercase and uppercase instances of the character.
*/

// Pseudocode
/*
--Variables and Constants--
Declare Variables for count and inputString.

--Calculate--
Run a loop that loops through each letter of inputString:
    each time the letter S or s appears in the loop, increase count variable.
    
--Display Values--
Display `The letter S occurs ${count} times.`
*/

var count = 0;
var inputString = `As he crossed toward the pharmacy at the corner he
involuntarily turned his head because of a burst of light that had ricocheted
from his temple, and saw, with that quick smile with which we greet a
rainbow or a rose, a blindingly white parallelogram of sky being unloaded
from the van—a dresser with mirrors across which, as across a cinema
screen, passed a flawlessly clear reflection of boughs sliding and swaying
not arboreally, but with a human vacillation, produced by the nature of
those who were carrying this sky, these boughs, this gliding façade.`;

for (var i = 0, letter = inputString.length; i < letter; i++) {
    if (inputString[i] == 'S' || inputString[i] == 's') {
        count += 1;
    }
}

console.log(`The letter S occurs ${count} times.`);

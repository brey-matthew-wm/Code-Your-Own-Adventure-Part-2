// confirmation
confirm("Are you ready to play?");
//asking their age
var age = prompt("whats your age");
// if younger than 13, they get the if message if older, they get the else message
if(age < 13)
{alert("You can play, but I am not responsible for any brain damage you might sustain.")}
else
{alert("You are old enough to play, have fun ")}
//intro
{alert("You aren't sure weather you are dreaming, or in reality. You don't know the difference between normality and insanity. The darkness is surrounding you. The screams echo around you. You can feel evil approaching.  ")}
// wdyd stands for what do you do, main part of code branches off of wdyd
var wdyd = prompt("What do you do?  Choose one option, and type it in the text box: scream, run, rationalize, nothing");
//this is the start of the scream path
if(wdyd === "scream")
{alert("You scream for help, but there is no response, you begin to panic.");
    var scream = prompt("Type A to scream again, or B to keep quiet.(Make sure to make A or b capital");
    if(scream === "A")
    {alert("Suddenly, you hear a voice in the darkness!");
        {alert("Don't worry the voice says, I will help you, all you have to do is solve this riddle.")}
        //the riddle of the sphinx :)
        var A = prompt("What is the creature that walks on four legs in the morning, two legs at noon and three in the evening?(type your answer in lower case)");
            if( A === "man")
                {alert("Congratulations, you have won, you may spend the rest of you days in paradise.")}
            else{alert("You have answered incorrect, you will now be eaten by a violent sphinx.");
                {alert("Game over!, restart the game, and answer correct.")}}}
    if(scream === "B")
        {alert("You chose wrong, if one kept quiet, they would find eternal suffering the only thing to find them!");
            {alert("Game over! 'hint, try screaming again next time'(Hit command v in the console to restart)")}}
}
if(wdyd === "run")
    {alert("Your legs don't work, you are stuck in a dead zone, you need help.");
    {alert("Game over, 'hint, try screaming next time'.(Hit command v in the console to restart)")}}
if(wdyd === "rationalize")
{alert("You try to think where you are, make sense of it, comprehend it, but you can't, you are filled with fear.");
    {alert("Game over, 'hint, try screaming next time'.(Hit command v in the console to restart)")}}
if(wdyd === "nothing")
{alert("Doing nothing is the action of a fool. Doing nothing in this place would yield eternal suffering");
    {alert("Game Over, 'hint, try screaming next time.'(Hit command v in the console to restart")}}

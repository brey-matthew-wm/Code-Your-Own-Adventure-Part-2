
var whatGame = ("What game would you like to play?");



confirm("Do you want to play a game?");
var datastore = [" huh? Well since your an adult, I wont hold back on you.",
    " huh? Well since your still a minor, ill try to go easy on you.",
    "! ",
    ",",
    "Welcome to The Riddler! The Riddler is a game based on riddles, make it through, and glory awaits!",
    "Hello "
    ];
var dude = prompt("Please enter your name");
{alert(datastore[5] + dude + datastore[2] + datastore[4]);}
var age = prompt("Before we begin, can you enter your age so I know what kind of riddles to give you?");
{if (age < 18)
{alert(age + datastore[1] )}
if (age >= 18)
    {alert(age + datastore[0] )}
}
alert("This first riddle is a classic, good luck with the rest of the game if you can't answer this one :) (hit ok to continue on to the riddle)");
var riddleOne = prompt("What is the creature that walks on four legs in the morning, two legs at noon, and three in the evening?");
if (riddleOne === "man")
{alert("Congratulations, you have solved the riddle of the sphinx! A man uses two arms and two legs in his infancy, uses two legs in his prime,and finally resorts to using his legs and a cane in his old age.");
    {alert("This next riddle can be a little bit tricky, but i believe in you!")}
  var riddleTwo = prompt("I'm round at the ends and high in the middle,What am I?");


        if (riddleTwo !== "ohio")
        {alert("You are incorrect, restart the game and try again!");}
         else
        alert("Nice! You are on a role! The next riddle might give you a challenge though.");
    var riddleThree = prompt("You're running a race and pass the person in 2nd place. What place are you in now");
if (riddleThree === "second")
{alert("Correct again! You are good at this! One more, and you will win.")}
else alert("You are incorrect, please restart the game and try again.");
var finalRiddle = prompt("What building has the most stories?");
if (finalRiddle === "library")
{alert("Congratulations, you are the smartest person in the world, may the force be with you.")}
else alert("You failed the final riddle, you suck! JK, restart and try again, i know you can make it.")}
else
{alert("You are incorrect, restart the game and try again!");}



/**
 * Created by session1 on 10/2/15.
 */
var storyThree = (" huh? Well since your an adult, I wont hold back on you.");
var storyTwo = (" huh? Well since your still a minor, ill try to go easy on you.");
var em = ("!");
var comma = (",");
var storyOne = (" Welcome to The Riddler! The Riddler is a game based on riddles, make it through, and glory awaits! ");
var hello = ("Hello ");
var dude = prompt("Please enter your name");

var datastore = ["huh? Well since your an adult, I wont hold back on you.",
    "huh? Well since your still a minor, ill try to go easy on you.",
    "!",
    ",",
    "Welcome to The Riddler! The Riddler is a game based on riddles, make it through, and glory awaits!",
    "Hello ",
prompt("Please enter your name")];





confirm("Do you want to play a game?");
var datastore = ["huh? Well since your an adult, I wont hold back on you.",
    "huh? Well since your still a minor, ill try to go easy on you.",
    "!",
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
        alert("Nice! You are on a role! The next riddle might give you a challenge though.")}
else
{alert("You are incorrect, restart the game and try again!");}
var riddleThree = prompt("You're running a race and pass the person in 2nd place. What place are you in now");
if (riddleThree === "third");
{alert("wrong!! restart the game and try again!")}
else
{alert()}
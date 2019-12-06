

var sillyEmoji = document.getElementById("silly");
var cryingEmoji = document.getElementById("crying");

var sillyResponseArray = ["u ok?", "that is a choice" , "Mmmmk"];
var cryingResponseArray = ["How can I help?", "What do you need?", "It will be ok", "luv u boo"];

// happyEmoji.addEventListener("onclick", changeHappyMessage());

function changeHappyMessage() {
    console.log("run happy msg");
  var happyEmoji = document.getElementById("happy");
  var happyResponseArray = ["YAAAS!", "You're amazing", "Perf."];
  var happyRandom = Math.floor(Math.random() * (happyResponseArray.length));
  document.getElementById("message").innerHTML = happyResponseArray[happyRandom];

}

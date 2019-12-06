// var current = 0;

function changeHappyMessage() {
    console.log("run happy msg");
  var happyEmoji = document.getElementById("happy");
  var happyResponseArray = ["YAAAS!", "You're amazing", "Perf."];
  var happyRandom = Math.floor(Math.random() * (happyResponseArray.length));
  //this was my attempt for iteration 2, didn't quite get it working but feel like i'm on the rtght track.
    //
    // if(happyRandom == current) {
    //   changeHappyMessage();
    // }
    // else {
    //   current = happyRandom;
    //   document.getElementById("message").innerHTML = happyRandom;
    // }

  document.getElementById("message").innerHTML = happyResponseArray[happyRandom];

}
function changeSillyMessage() {
  console.log("run silly msg");
  var sillyEmoji = document.getElementById("silly");
  var sillyResponseArray = ["u ok?", "that is a choice" , "Mmmmk"];
  var sillyRandom = Math.floor(Math.random() * (sillyResponseArray.length));
  document.getElementById('message').innerHTML = sillyResponseArray[sillyRandom];
}
function changeCryingMessage() {
  console.log('run crying msg');
  var cryingEmoji = document.getElementById("crying");
  var cryingResponseArray = ["How can I help?", "What do you need?", "It will be ok", "luv u boo"];
  var cryingRandom = Math.floor(Math.random() * (cryingResponseArray.length));
  document.getElementById('message').innerHTML =  cryingResponseArray[cryingRandom];
}

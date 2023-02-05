
var len = document.querySelectorAll(".drum").length;

for(var i = 0 ; i < len ; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click" , function() {


    var key = this.innerHTML;
    console.log(this.key);
//w a s d j k l
    switch(key) {

      case "w" :
        var tone1 = new Audio("sounds/tom-1.mp3");
        tone1.play();
        break;

      case "a" :
        var tone2 = new Audio("sounds/tom-2.mp3");
        tone2.play();
        break;

      case "s" :
        var tone3 = new Audio("sounds/tom-3.mp3");
        tone3.play();
        break;

      case "d" :
        var tone4 = new Audio("sounds/tom-4.mp3");
        tone4.play();
        break;

      case "j" :
        var tone5 = new Audio("sounds/snare.mp3");
        tone5.play();
        break;

      case "k" :
        var tone6 = new Audio("sounds/crash.mp3");
        tone6.play();
        break;

      case "l" :
        var tone7 = new Audio("sounds/kick-bass.mp3");
        tone7.play();
        break;
    }
  });
}

document.addEventListener("keypress" , function(event) {

  var pressedKey = event.key;
  animation(pressedKey);

  switch(pressedKey) {

    case "w" :
      var tone1 = new Audio("sounds/tom-1.mp3");
      tone1.play();
      break;

    case "a" :
      var tone2 = new Audio("sounds/tom-2.mp3");
      tone2.play();
      break;

    case "s" :
      var tone3 = new Audio("sounds/tom-3.mp3");
      tone3.play();
      break;

    case "d" :
      var tone4 = new Audio("sounds/tom-4.mp3");
      tone4.play();
      break;

    case "j" :
      var tone5 = new Audio("sounds/snare.mp3");
      tone5.play();
      break;

    case "k" :
      var tone6 = new Audio("sounds/crash.mp3");
      tone6.play();
      break;

    case "l" :
      var tone7 = new Audio("sounds/kick-bass.mp3");
      tone7.play();
      break;
  }
});

function animation(currentKey) {

  document.querySelector("." + currentKey).classList.add("pressed");

  setTimeout(function() {
    document.querySelector("." + currentKey).classList.remove("pressed");
  },100);
}

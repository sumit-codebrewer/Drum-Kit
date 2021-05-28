/*Here I am modifying the javascript code using jQuery for shortening the code*/
//Adding sounds to buttons

$("button").click(function(){
  var innerButtonHTML=this.innerHTML;
  keySelected(innerButtonHTML);
  buttonAnimation(innerButtonHTML);
});

$(document).keypress(function(event){
  keySelected(event.key);
  buttonAnimation(event.key);
});

function keySelected(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:console.log("Default key is pressed");
  }
}

function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
  $("h1").css("color", "red").slideUp(5000).slideDown(5000);
}

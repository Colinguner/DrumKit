alert("Lower volume 👌");

// ______________________________EventListeners START_____________________________
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;

        sound(buttonInnerHtml);
        flashAnimation(buttonInnerHtml);
});
}

document.addEventListener("keypress", function(event){
    console.log(event.key);
    sound(event.key);
    flashAnimation(event.key);
});
// ______________________________EventListeners END_____________________________





// ______________________________Sound Function START_____________________________
function sound (key){
    switch (key){
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
        case "a":
            var kick_bass = new Audio('sounds/kick-bass.mp3');
            kick_bass.play();
        break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
        case "d":
            var tom_1 = new Audio('sounds/tom-1.mp3');
            tom_1.play();
        break;
        case "j":
            var tom_2 = new Audio('sounds/tom-2.mp3');
            tom_2.play();
        break;
        case "k":
            var tom_3 = new Audio('sounds/tom-3.mp3');
            tom_3.play();
        break;
        case "l":
            var tom_4 = new Audio('sounds/tom-4.mp3');
            tom_4.play();
        break;
        
        default: console.log(buttonInnerHtml);
    }
}
// ______________________________Sound Function END_____________________________





// _____________________________Color Change START -style_____________________________
// function flashAnimation(key){
//     document.querySelector("." + key).style.color= "white";
//     setTimeout(function(){
//     document.querySelector("." + key).style.color= "#DA0463";    
//     }, 100);
// }
// _____________________________Color Change END_____________________________


// _____________________________Color Change START -class_____________________________
function flashAnimation(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){
    document.querySelector("." + key).classList.remove("pressed");    
    }, 100);
}
// _____________________________Color Change END_____________________________




//_____________________________Works but to complicated for now_____________________________
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
// function flashAnimation(key){
//     // działa--- tylko dodaje
//     // document.querySelector(key).setAttribute("color", "white");
//     document.querySelector("." + key).style.color= "white";
//     sleep(200).then(() => {
//         document.querySelector("." + key).style.color= "#DA0463";
//     });
// }
// _____________________________Works but to complicated for now_____________________________


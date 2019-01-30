
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    console.log(this.innerHTML);

    if(this.innerHTML == "w"){ 
        var audio = new Audio('sounds/crash.mp3');
                        audio.play();
       }
    else if(this.innerHTML == "a"){
        var audio = new Audio('sounds/kick-bass.mp3');
                     audio.play();
    }
    else if(this.innerHTML == "s"){ 
        var audio = new Audio('sounds/snare.mp3');
                     audio.play();
    }
    else if(this.innerHTML == "d"){
        var audio = new Audio('sounds/tom-1.mp3');
                     audio.play();
    }
    else if(this.innerHTML == "j"){
        var audio = new Audio('sounds/tom-2.mp3');
                     audio.play();
    }
    else if(this.innerHTML == "k"){
        var audio = new Audio('sounds/tom-3.mp3');
                     audio.play();
    }
    else{
        var audio = new Audio('sounds/tom-4.mp3');
                     audio.play();
    }           
    })
 
}
// ---------------------------------- nie działa
        // if (document.querySelectorAll(".drum")[i].classList.contains('.w')) {
        //     // do some stuff
        //     var audio = new Audio('sounds/crash.mp3');
        //     audio.play();
        // }
// 

function keyStuff(event) {
    // --------------------------
    var x = event.charCode || event.keyCode;  // Get the Unicode value
    var y = String.fromCharCode(x);  // Convert the value into a character
   

    console.log("You pressed " + y + " and its charCode is " + x);
    // display which key was pressed, along with its charCode, in an alert
    
    // -----------------------------
    if (x == 119) {
        var audio = new Audio('sounds/crash.mp3');
                    audio.play();
        }
    
    else if (x == 97) {
        var audio = new Audio('sounds/kick-bass.mp3');
                 audio.play();
        }
    
    else if (x == 115) {
        var audio = new Audio('sounds/snare.mp3');
                 audio.play();
        }
    
    else if (x == 100) {
        var audio = new Audio('sounds/tom-1.mp3');
                 audio.play();
        }
    else if (x == 106) {
        var audio = new Audio('sounds/tom-2.mp3');
                 audio.play();
    }

    else if (x == 107) {
        var audio = new Audio('sounds/tom-3.mp3');
                 audio.play();
    
    }else if (x == 108) {
        var audio = new Audio('sounds/tom-4.mp3');
                 audio.play();
    }
}

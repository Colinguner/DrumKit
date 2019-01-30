
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
        
/*----------------------------------SWITCH CASE INSTEAD OF IF ELSE----------------------------*/
        
        // var buttonInnerHtml = this.innerHTML;

        // switch (buttonInnerHtml){
        //     case "w":
        //         var crash = new Audio('sounds/crash.mp3');
        //         crash.play();
        //     break;
        //     case "a":
        //         var kick_bass = new Audio('sounds/kick-bass.mp3');
        //         kick_bass.play();
        //     break;
        //     case "s":
        //         var snare = new Audio('sounds/snare.mp3');
        //         snare.play();
        //     break;
        //     case "d":
        //         var tom_1 = new Audio('sounds/tom-1.mp3');
        //         tom_1.play();
        //     break;
        //     case "j":
        //         var tom_2 = new Audio('sounds/tom-2.mp3');
        //         tom_2.play();
        //     break;
        //     case "k":
        //         var tom_3 = new Audio('sounds/tom-3.mp3');
        //         tom_3.play();
        //     break;
        //     case "l":
        //         var tom_4 = new Audio('sounds/tom-4.mp3');
        //         tom_4.play();
        //     break;

        //     default: console.log(buttonInnerHtml);
        // }         

        
    })
 
}

// --------------------------


/*function keyStuff(event) {

    

    var x = event.charCode || event.keyCode;  // Get the Unicode value

    var y = String.fromCharCode(x);  // Convert the value into a character

  

    //console.log("You pressed " + y + " and its charCode is " + x);

    // -----------------------------

    if (x == 87) {
        var audio = new Audio('sounds/crash.mp3');
                    audio.play();
        }
    else if (x == 65) {
        var audio = new Audio('sounds/kick-bass.mp3');
                 audio.play();
        }
    else if (x == 83) {
        var audio = new Audio('sounds/snare.mp3');
                 audio.play();
        }
    else if (x == 68) {
        var audio = new Audio('sounds/tom-1.mp3');
                 audio.play();
        }
    else if (x == 74) {
        var audio = new Audio('sounds/tom-2.mp3');
                 audio.play();
    }
    else if (x == 75) {
        var audio = new Audio('sounds/tom-3.mp3');
                 audio.play();
    }else if (x == 76) {
        var audio = new Audio('sounds/tom-4.mp3');
                 audio.play();
    }
}
*/



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



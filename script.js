var divlength=document.querySelectorAll('.song').length
console.log(divlength);

for(var i=0; i<divlength; i++){
    var demo = document.querySelectorAll('.song')[i].addEventListener('click' , playsong);

    var demo = document.querySelectorAll('.song')[i].addEventListener('dblclick' , pausesong);

}

var song1 =new Audio(); 
song1.src= "../gana/alan.mp3";

var song2 =new Audio(); 
song2.src= "../gana/alan3.mp3";

var song3 =new Audio(); 
song3.src= "../gana/alan3.mp3";

var song4 =new Audio(); 
song4.src= "../gana/alan4.mp3";

var song5 =new Audio(); 
song5.src= "../gana/alan5.mp3";

var song6 =new Audio(); 
song6.src= "../gana/alan6.mp3";

var song7 =new Audio(); 
song7.src= "../gana/alan7.mp3";

var song8 =new Audio(); 
song8.src= "../gana/alan8.mp3";

var song9 =new Audio(); 
song9.src= "../gana/alan9.mp3";


function playsong() {

var songId= this.innerHTML;
console.log(songId);

switch(songId){
    case "a":
       song1.play();
       break;

       case "b":
        song2.play();
        break;

        case "c":
        song3.play();
        break;

        case "d":
        song4.play();
        break;

        case "e":
        song5.play();
        break;

        case "f":
        song6.play();
        break;

        case "g":
        song7.play();
        break;

        case "h":
        song8.play();
        break;

        case "i":
        song9.play();
        break;



    default:
        console.log("wrong input");
        break;

}
}

function pausesong(){
    alert("pause funtion is call");

}
// if i double clicked i must show alert;; let 


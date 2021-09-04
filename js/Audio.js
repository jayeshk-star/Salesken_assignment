var play=document.getElementById("play")
var audio=document.querySelector("audio")

var isaudio=false;

play.addEventListener("click",()=>{
    isaudio=!isaudio
    isaudio ? audio.pause() : audio.play()
    

})
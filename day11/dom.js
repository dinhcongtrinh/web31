// const audio = document.querySelector("audio");
// const btn = document.querySelector("btn")
// btn.addEventListener("click", function() {
//     if (audio.paused) {
//         audio.play();
//     } else {
//         audio.pause();
//     }
// });
const buttons = document.querySelector(".btn");
let current = null;
buttons.forEach(function (button) {
    button.addEventListener("click", function ()
    const audio = document.querySelector(button.dataset.target)
    if ( current && current != audio){
        current.pause();
        current.currentTime =0;
    }
    if (audio.pause) {
        audio.play();
    } else{
        audio.pause();
    }
    current = audio;)
    
});
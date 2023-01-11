const audio =  new audio("./file.mp3");

function toggle() {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }

}
const button = document.querySelector("button");
button.onclick = handleClick;

// cach 3
button.addEventListener("click",function (){
    if (audio.pause) {
        audio.play();
    } else {
        audio.pause();
    }
});
/// lắng nghe sự kiện ở 3 nut button theo 3 cach sau
// $(document).ready(function () {
//     $('input[type="radio"]').click(function () {
//         var inputValue = $(this).attr("value");
//         var targetBox = $("." + inputValue);
//         $(".box").not(targetBox).hide();
//         $(targetBox).show();
//     });
// });



//  const p = document.querySelector("#text");
//  const btn1 = document.querySelector("btn-1");
//  const btn2 = document.querySelector("btn-2");
//  const btn3 =  document.querySelector("btn-3");







//  function random_rgba() {

//  } 
//  btn3.addEventListener("click", function(){
//     p.style.backgroundColor = random_rgba();
//  });


// let p = document.querySelector('#text')

// let b1 = document.querySelector('#btn-1')
// console.log(b1)
// function changeText(){
//     p.textContent = 'random content'
// }

// let b2 = document.querySelector('#btn-2')

// function changeColor(){
//     p.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);;
// }



// b2.onclick = changeColor;

// let b3 = document.querySelector('#btn-3')

// function changeBackground(){
//     p.style.backgroundColor =
//       "#" + Math.floor(Math.random() * 16777215).toString(16);
// }
// ///
// const backtotop = document.querySelector(".back-to-top");
// backtotop.addEventListener("click", function() {
//     window.addEventListener("scroll,function")
// });




const 

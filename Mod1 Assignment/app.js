function problemOne(event) {

  const target = event.target;
  // code here:

}

// reference the elment "#remove-me" and add an eventlistener for the click event:
// your code here:
const btn1 = document.getElementById("remove-me");
btn1.addEventListener("click", function(){
  btn1.remove();
});
/* ---------------------------------------- */

function problemTwo(event) {
  const target = event.target;
  // your code here:
}

// reference the elment "#remove-my-children" and add an eventlistener for the click event:
// your code here
const btn2 = document.getElementById("remove-my-children");

btn2.addEventListener("click", function(){
  let child = btn2.firstElementChild;
  btn2.removeChild(child);
})
/* ---------------------------------------- */


function problemThree(event) {

  const target = event.target;
  // your code here

}

// reference the elment "#remove-my-children-then-me" and add an eventlistener for the click event:
// your code here:
const btn3 = document.getElementById("remove-my-children-then-me");

btn3.addEventListener("click", function(){

  let child = btn3.firstElementChild;

  if(child){
  btn3.removeChild(child);
  } else btn3.remove();

})

/* ---------------------------------------- */

function problemFour(event) {

  const target = event.target;
  // your code here

}

// reference the elment "#add-children" and add an eventlistener for the click event:
// your code here:
const btn4 = document.getElementById("add-children");

btn4.addEventListener("click", function(){

  const newDiv = document.createElement("div");
  newDiv.innerText = "Added Child";
  newDiv.className = "child";
  let child = btn4.firstElementChild;
  btn4.appendChild(newDiv);


})
/* ---------------------------------------- */

function problemFive(event) {

  const target = event.target;
  // your code here

}

// reference the elment "#to-the-back" and add an eventlistener for the mouseup event:
// your code here:
const btn5 = document.getElementById("to-the-back");
let children = btn5.children;
for(let i = 0; i < children.length; i++){
  children[i].addEventListener("click", function(){
    let child = btn5.children[i];
    btn5.appendChild(child);
  })
}
/* ---------------------------------------- */


function problemSix(event) {

  const target = event.target;
  // your code here

}

// reference the elment "#increment-child" and add an eventlistener for the click event:
// your code here:
const btn6 = document.getElementById("increment-child");
let children = btn6.children;
for(let i = 0; i < children.length; i++){
  children[i].addEventListener("click", function(){
    let number = children[i].innerHTML;
    number++;
    children[i].innerHTML = number;
  })
}


/* ---------------------------------------- */

/* Maybe code goes here, if some scope is needed... */

function problemSeven(event) {

  const target = event.target;
  // your code here


}

// reference the elment "#increment-decrement" and add an eventlistener for the click event:
// your code here:
const btn7 = document.getElementById("increment-decrement");

btn7.addEventListener("click", function(e){
  let number = btn7.innerHTML;
  if(e.shiftKey) {
    number--; 
  } else {
    number++;
  }
  btn7.innerHTML = number;
})
/* ---------------------------------------- */


function problemEight(event) {

 const target = event.target;
  // your code here

}

// reference the elment "#echo-user-input" and add an eventlistener for the keyup event:
// your code here:

/* ---------------------------------------- */

let ref = document.getElementById("echo-user-input");
let input = ref.querySelector("input").value;

ref.addEventListener("keyup", logKeys) ;

function logKeys(e) {
  let display = e.key;
  document.querySelector(".user-input-copy").innerHTML += display;
}




/* Maybe code goes here, if some scope is needed... */

function problemNine(event) {

  event.preventDefault();
  const target = event.target;
  // your code here
 
}

// reference the elment "#paste-place" and add an eventlistener for the paste event:
// your code here:
let ref2 = document.getElementById("paste-place");

/* ---------------------------------------- */

function problemTen(event) {
  const target = event.target;
  // your code here
}

// reference the elment "#show-hide" and add an eventlistener for the change event:
// your code here:

/* ---------------------------------------- */


function problemEleven( event ) {

  event.preventDefault();
  
  const target = event.target;
  // your code here

}

// your code here

/* ---------------------------------------- */

function problemTwelve ( ) {

    // your code here
}

// your code here

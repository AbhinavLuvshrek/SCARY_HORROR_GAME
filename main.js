// variables
let wuss = document.getElementById("wuss");
let begin = document.getElementById("start");
let time = Math.random * 10000;
//Event Listeners
wuss.addEventListener("click", selectWuss);
begin.addEventListener("click", selectBegin);

//functions

function selectWuss() {
  document.getElementById("body").remove();
  setTimeout(() => {
    console.log("shown");
  }, Math.floor(Math.random() * 10000));
}

function showGates() {
  console.log("shown");
}

function selectBegin() {
  console.log("mommy");
}

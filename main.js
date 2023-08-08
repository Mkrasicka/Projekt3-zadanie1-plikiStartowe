// tutaj rozwiązanie
const btn = document.querySelector("button");
const li = document.querySelectorAll("li");
let fontSize = 4;
// let display = document.querySelectorAll(li.)

const removeBlock = function() {
     fontSize++
  for (i= 0; i < li.length; i ++) {
  // console.log(li[i]);
   li[i].style.display = "block";

   li[i].style.fontSize = fontSize + "px";
  }
}

// const removeBlock = function() {
//   fontSize++
//   li.forEach((element) => {
//     element.style.display = "block";

//     element.style.fontSize = `${fontSize}px`;
//   })
//   }

btn.addEventListener("click", removeBlock);

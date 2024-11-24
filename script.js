let container = document.querySelector(".container");
for (var i = 1; i <= 100; i++) {
   container.innerHTML += `<div class="block"></div>`;
}

let blocks = document.querySelectorAll(".block");

blocks.forEach((block) => {
   var rand1 = Math.floor(Math.random() * 256);
   var rand2 = Math.floor(Math.random() * 256);
   var rand3 = Math.floor(Math.random() * 256);
   block.style.background = `rgb(${rand1}, ${rand2}, ${rand3})`;
});

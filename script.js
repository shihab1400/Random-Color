let container = document.querySelector(".container");
for (var i = 1; i <= 200; i++) {
   container.innerHTML += `<div class="block"></div>`;
}

let blocks = document.querySelectorAll(".block");

let hex = "";

blocks.forEach((block) => {
   var rand1 = Math.floor(Math.random() * 256);
   var rand2 = Math.floor(Math.random() * 256);
   var rand3 = Math.floor(Math.random() * 256);

   block.style.background = `rgb(${rand1}, ${rand2}, ${rand3})`;
});

var textArea = document.getElementById("myInput");

blocks.forEach((block) => {
   block.addEventListener("click", () => {
      let rgb = block.style.background;

      let matches = rgb.match(/\d+/g);

      let first = parseInt(matches[0]).toString(16);
      let second = parseInt(matches[1]).toString(16);
      let third = parseInt(matches[2]).toString(16);

      if (first.length == 1) {
         let temp = first;
         first = "";
         first = first.concat("0", temp);
      }

      if (second.length == 1) {
         let temp = second;
         second = "";
         second = second.concat("0", temp);
      }

      if (third.length == 1) {
         let temp = third;
         third = "";
         third = third.concat("0", temp);
      }

      hex = hex.concat(first, second, third);

      textArea.value = hex;

      var copyText = textArea;
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);

      hex = "";
   });
});

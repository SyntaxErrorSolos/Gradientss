// randomize & create a hex code (provided by chatGPT)
function hex() {
  const letters = "0123456789ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += letters[Math.floor(Math.random() * 16)];
  }
  return hex;
}

function hsl() {
  const hue = Math.floor(Math.random() * 360); // random hue value between 0 and 359
  const saturation = Math.floor(Math.random() * 101); // random saturation value between 0% and 100%
  const lightness = Math.floor(Math.random() * 101); // random lightness value between 0% and 100%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`; // return the HSL value as a string
} //provided by chatGPT



const start = hex();
const end = hex();
const gradient1 = document.getElementById("gradient");
const codes = document.getElementById("code");
const refresh = document.getElementById("refresh");
const heart = document.getElementById("heart");
const hearts = document.getElementById("hearts");
const hsl_start = hsl()
const hsl_end = hsl()
const change = document.getElementById("switch")


gradient1.style.backgroundImage = `linear-gradient(to right, ${start}, ${end})`;
change.addEventListener("click", function() {
  change.id = "rgb"
  codes.innerText = `Start: ${hsl_start}\nEnd: ${hsl_end}`
  document.getElementById("rgb").addEventListener("click", function() {
    change.id = "switch"
    change.style.fill = "#FFFFFF"
    codes.innerText = `Start: ${start}\nEnd: ${end}`
    gradient1.style.backgroundImage = `linear-gradient(to right, ${start}, ${end})`;
  
  })
  gradient1.style.backgroundImage = `linear-gradient(to right, ${hsl_start}, ${hsl_end})`
})

document.head.title = `${start} - ${end}`;
gradient1.addEventListener("click", function () {
  navigator.clipboard
    .writeText(`linear-gradient(to right, ${start}, ${end})`)
    .then(function () {
      alert("Copied!");
    });
});
codes.innerText = `Start: ${start}\nEnd: ${end}`;

refresh.addEventListener("click", function () {
  window.location.href = "gradient.html";
});

heart.addEventListener("click", function () {
  window.localStorage.setItem(
    `G-${Math.floor(Math.random() * 1000000)}`,
    `${start} - ${end}`
  );
  heart.style.fill = "#FF0000";
  heart.style.stroke = "#FF0000";
});

hearts.addEventListener("click", function () {
  window.open("hearts.html");
});

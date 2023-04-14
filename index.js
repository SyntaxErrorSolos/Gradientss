// randomize & create a hex code (provided by chatGPT)
function hex() {
  const letters = "0123456789ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += letters[Math.floor(Math.random() * 16)];
  }
  return hex;
}

const start = hex();
const end = hex();
const gradient1 = document.getElementById("gradient");
const codes = document.getElementById("code");
const refresh = document.getElementById("refresh");
const heart = document.getElementById("heart");
const hearts = document.getElementById("hearts");


gradient1.style.backgroundImage = `linear-gradient(to right, ${start}, ${end})`;
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

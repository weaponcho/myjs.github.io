const bodystyle = document.querySelector("body");
const block1Style = document.querySelector(".block1");
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[ Math.floor( Math.random() * images.length ) ];
block1Style.style.backgroundImage =`url(img/${chosenImage})`;


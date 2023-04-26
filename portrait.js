const typedTextSpan = document.querySelector(".typed-text");
const words = 'Hey, let your phone in landscape mode nhé !!!';
const typingDelay = 200;
const newLetterDelay = 3000;
let charIndex = 0;

const speech = document.querySelector('.speech');
const torchic = document.querySelector('#torchic');

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    torchic.style.opacity = 1;
    torchic.style.transition = "all 1s ease";
  }, 1000)

  setTimeout(() => {
    speech.style.opacity = 1;
    torchic.style.transition = "all 1.5s ease";
  }, 1500)

  setTimeout(type, newLetterDelay);
});

function type() {
    typedTextSpan.textContent += words.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay)
}
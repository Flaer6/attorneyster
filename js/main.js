"use strict";

const input = document.querySelectorAll(".application__input");
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("input", () => {
    input[i].style.color = "#fff";
    input[i].style.fontSize = "1.5625rem";
    input[i].style.lineHeight = "1.35rem";
  });
}

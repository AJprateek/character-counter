const characterCountLimit = 50;
const textAreaEl = document.querySelector("#text-area");
const remainingCharactersEl = document.querySelector(".remaining-characters");
const totalCharactersEl = document.querySelector(".total-characters");
const inputCountEl = document.querySelector(".input-count");
const remainingCountEl = document.querySelector(".remaining-count");

remainingCharactersEl.innerText = `Remaining : ${characterCountLimit}`;
totalCharactersEl.innerText = `Total characters : 0`;
textAreaEl.setAttribute("maxlength", characterCountLimit);
textAreaEl.addEventListener("input", () => {
  const inputLength = textAreaEl.value.length;
  totalCharactersEl.innerText = `Total characters : ${inputLength}`;
  remainingCharactersEl.innerText = `Remaining : ${characterCountLimit - inputLength}`;
});

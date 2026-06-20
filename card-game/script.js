const board = document.getElementById("board");
const attemptsEl = document.getElementById("attempts");

let attempts = 0;
let firstCard = null;
let secondCard = null;
let lockBoard = false;

let cards = ["A", "B", "C", "D", "E", "F", "A", "B", "C", "D", "E", "F"];

cards = cards.sort(() => Math.random() - 0.5);

cards.forEach((value, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.value = value;
  card.innerText = "";

  card.addEventListener("click", () => handleClick(card));

  board.appendChild(card);
});

function handleClick(card) {
  if (lockBoard) return;
  if (card.classList.contains("flipped")) return;

  card.classList.add("flipped");
  card.innerText = card.dataset.value;

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  attempts++;
  attemptsEl.innerText = attempts;

  checkMatch();
}

function checkMatch() {
  const isMatch = firstCard.dataset.value === secondCard.dataset.value;

  if (isMatch) {
    resetTurn();
  } else {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard.innerText = "";
      secondCard.innerText = "";

      resetTurn();
    }, 800);
  }
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

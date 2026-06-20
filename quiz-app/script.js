const questions = [
  {
    number: 1,
    question: "What is the capital of France?",
    correct: "Paris",
    answers: ["Paris", "Rome", "Baku", "Istanbul"],
  },

  {
    number: 2,
    question: "How many continents are there on Earth?",
    correct: 7,
    answers: [5, 4, 7, 3],
  },

  {
    number: 3,
    question: "What planet is known as the Red Planet?",
    correct: "Mars",
    answers: ["Yupiter", "Mars", "Earth", "Saturn"],
  },

  {
    number: 4,
    question: "Who founded Microsoft?",
    correct: "Bill Gates",
    answers: ["Elon Musk", "Steve Jobs", "Mark Zuckerberg", "Bill Gates"],
  },

  {
    number: 5,
    question: "What is the longest river on the world?",
    correct: "Nile River",
    answers: ["Nile River", "Amazon River", "Missisipi River", "Volga River"],
  },

  {
    number: 6,
    question: "What is the fastest land animal?",
    correct: "Cheetah",
    answers: ["Cheetah", "Cat", "Dog", "Lion"],
  },

  {
    number: 7,
    question: "Which country has the largest population?",
    correct: "China",
    answers: ["America", "Russia", "China", "India"],
  },

  {
    number: 8,
    question: "What is the smallest prime number?",
    correct: 2,
    answers: [3, 1, 2, 5],
  },

  {
    number: 9,
    question: "What is the largest ocean on Earth?",
    correct: "Pacific Ocean",
    answers: ["Pacific Ocean", "Atlantic Ocean", "Indian", "Arctic Ocean"],
  },

  {
    number: 10,
    question: "How many days are there in a leap year?",
    correct: 366,
    answers: [234, 350, 366, 280],
  },
];

let currentIndex = 0;
let userAnswers = {};

function loadQuestions() {
  document.querySelector(".start").style.display = "none";
  document.querySelector(".quiz").style.display = "block";

  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentIndex];

  document.querySelector(".quiz").innerHTML = `
    <div class="question-card">
          <div class="top">
            <span>${q.number}</span>
            <p>${q.question}</p>
          </div>
          <div class="answers">
          ${q.answers
            .map(
              (ans) =>
                `<div class="row">
              <input type="radio" name="answer" value="${ans}" ${userAnswers[currentIndex] === ans ? "checked" : ""} />
              <p>${ans}</p>
            </div>`,
            )
            .join("")}
          </div>

          <div class="buttons">
            <button onclick="back()" ${currentIndex === 0 ? "disabled" : ""}>Back</button>
            <button onclick="next()">${currentIndex === questions.length - 1 ? "Finish" : "Next"}</button>
          </div>
        </div>
  `;
}

function next() {
  const selected = document.querySelector("input[name='answer']:checked");

  if (selected) {
    userAnswers[currentIndex] = selected.value;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showScore();
  }
}

function back() {
  const selected = document.querySelector("input[name='answer']:checked");

  if (selected) {
    userAnswers[currentIndex] = selected.value;
  }

  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function showScore() {
  let score = 0;

  questions.forEach((q, i) => {
    if (userAnswers[i] == q.correct) {
      score++;
    }
  });

  document.querySelector(".quiz").innerHTML = `
    <div class="result">
      <h2>Score: ${score} / ${questions.length}</h2>
      <p>Correct: ${score} | Wrong: ${questions.length - score}</p>
    </div>
  `;
}

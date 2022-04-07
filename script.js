const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const spanText = document.getElementById("span-text");

var currentQuestion = 0;
console.log(quizData.length);
loadQuiz();

function loadQuiz() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.innerHTML = currentQuiz.question;
  a_text.innerHTML = currentQuiz.a;
  b_text.innerHTML = currentQuiz.b;
  c_text.innerHTML = currentQuiz.c;
  d_text.innerHTML = currentQuiz.d;
  spanText.classList.remove("showSpan");
  spanText.classList.add("hideSpan");
}

submitBtn.onclick = function () {
  let answer = getSelected();
  spanText.classList.remove("showSpan");
  spanText.classList.add("hideSpan");

  if (!answer) return;

  if (answer != quizData[currentQuestion].correct) {
    spanText.classList.add("showSpan");
    spanText.classList.remove("hideSpan");
  } else {
    currentQuestion++;
    removeSelected();
    loadQuiz();
  }
};

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  console.log(answer);
  return answer;
}

function removeSelected() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

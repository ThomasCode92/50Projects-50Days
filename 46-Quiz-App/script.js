const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const quizElement = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const answerAElement = document.getElementById('answerAText');
const answerBElement = document.getElementById('answerBText');
const answerCElement = document.getElementById('answerCText');
const answerDElement = document.getElementById('answerDText');
const submitBtnElement = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionElement.innerText = currentQuizData.question;
  answerAElement.innerText = currentQuizData.a;
  answerBElement.innerText = currentQuizData.b;
  answerCElement.innerText = currentQuizData.c;
  answerDElement.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerElements.forEach(answerElement => (answerElement.checked = false));
}

function getSelected() {
  let answer;

  answerElements.forEach(answerElement => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });

  return answer;
}

submitBtnElement.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizElement.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});

// timer
const startMinutes = 15;
let time = startMinutes * 60;

const countDown = document.querySelector(".timer")

let timerInterval = setInterval(timers,1000);

//questions part
let quizDB=[
    {
      question:"Q1: What is the full form of HTML?",
      options: {
          a:"Hello To My Land",
          b:"Hey Text Markup Language",
          c:"HyperText Makeup Language",
          d:"HyperText Markup Language",
      },
      answer: 3,
      selectedAnswer: undefined,
    },
    {
      question:"Q2: What is the full form of CSS?",
      options: {
          a:"Cascading Styles Sheets",
          b:"Cascading Style Sheep",
          c:"Cartoon Styles Sheets",
          d:"Cascading Super Sheets",
      },
      answer: 0,
      selectedAnswer: undefined,
    },
    {
      question:"Q3: What is the full form of HTTP?",
      options: {
          a:"HyperText Transfer Product",
          b:"Hey Tranfer Protcol",
          c:"HyperText Transfer Protocol",
          d:"HyperText Test Protocol",
      },
      answer: 3,
      selectedAnswer: undefined,
    },
    {
      question:"Q4: What is the full form of JS?",
      options: {
          a:"JavaScript",
          b:"JavaSuper",
          c:"JustScript",
          d:"JordenShoes",
      },
      answer: 0,
      selectedAnswer: undefined,
    },
    {
      question:"Q5: Javascript is an _______ language?",
      options: {
          a:"Object-Oriented",
          b:"Object-Based",
          c:"Procedural",
          d:"None of the above",
      },
      answer: 0,
      selectedAnswer: undefined,
    },
    {
      question:"Q6: Which of the following keywords is used to define a variable in JS?",
      options: {
          a:"var",
          b:"let",
          c:"Both a and b",
          d:"None of the above",
      },
      answer: 2,
      selectedAnswer: undefined,
    },
    {
      question:"Q7: How can a datatype be declared to be a constant type?",
      options: {
          a:"const",
          b:"var",
          c:"let",
          d:"constant",
      },
      answer: 0,
      selectedAnswer: undefined,
    },
    {
      question:"Q8: Which of the following are closures in JS?",
      options: {
          a:"variable",
          b:"functions",
          c:"objects",
          d:"All of the above",
      },
      answer: 3,
      selectedAnswer: undefined,
    },
    {
      question:"Q9: How to stop an interval timer in JS?",
      options: {
          a:"clearInterval",
          b:"clearTimer",
          c:"intervalOver",
          d:"None of the above",
      },
      answer: 0,
      selectedAnswer: undefined,
    },
    {
      question:"Q10: How do we write a comment in JS?",
      options: {
          a:"/* */",
          b:"//",
          c:"#",
          d:"$$",
      },
      answer: 1,
      selectedAnswer: undefined,
    },
];


function timers() {
  const minutes = Math.floor(time/60);
  let seconds = time%60;
  seconds = seconds<10?'0'+ seconds : seconds;
  countDown.innerHTML = `${minutes} : ${seconds}`
  time--;
  if(time < 0) {
    clearInterval(timerInterval);
    showResult();
  }
};

function showResult() {
    const form = document.querySelector('#formDiv');
    const resultEle = document.querySelector('#result');
    const name = document.querySelector('#resultName');
    const fName = document.querySelector('#resultFatherName');
    const email = document.querySelector('#resultEmail');
    const phoneNumber = document.querySelector('#resultNumber');
    const questions = document.querySelector('#resultQuestions');
    const wrongAnswers = document.querySelector('#resultWrongAnswers');
    const correctAnswers = document.querySelector('#resultCorrectAnswers');
    const blankAnswers = document.querySelector('#resultBlankAnswers');
    const score = document.querySelector('#resultScore');
    var wAns = 0, corAns = 0, bAns = 0; 
    for(let i = 0; i < quizDB.length; i++) {
        if(quizDB[i].selectedAnswer) {
            if(quizDB[i].answer === parseInt(quizDB[i].selectedAnswer)) {
                corAns++;
            } else {
                wAns++;
            }
        } else {
            bAns++;
        }
    }

    form.style.display =  "none";
    resultEle.style.display = "block";
    formData = JSON.parse(sessionStorage.getItem("userData"));
    name.innerHTML = formData.name;
    fName.innerHTML = formData.fatherName;
    email.innerHTML = formData.email;
    phoneNumber.innerHTML = formData.phoneNo;
    questions.innerHTML = quizDB.length;
    wrongAnswers.innerHTML = wAns;
    correctAnswers.innerHTML = corAns;
    blankAnswers.innerHTML = bAns;
    score.innerHTML = corAns + "/" + quizDB.length;
}


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const next = document.querySelector('#next');
const form = document.querySelector('#quizForm');

const answers = document.querySelectorAll('.answer')


let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  form.reset();
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.options.a;
  option2.innerText = questionList.options.b;
  option3.innerText = questionList.options.c;
  option4.innerText = questionList.options.d;
}

loadQuestion();

next.addEventListener('click',()=>{
  if(document.querySelector('input[name="answer"]:checked')) {
    let answerSelected = document.querySelector('input[name="answer"]:checked').value;
    quizDB[questionCount].selectedAnswer = answerSelected;   
  }
  questionCount++;
  if(questionCount === quizDB.length - 1) {
    next.innerHTML = "Submit";
    loadQuestion();
  } else if(questionCount < quizDB.length){
    next.innerHTML = "Next";
    loadQuestion();
  } else if(questionCount >= quizDB.length) {
    clearInterval(timerInterval);
    showResult();
  }

});
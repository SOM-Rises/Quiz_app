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
    question: "Who is the President of USWho is the President of US??",
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

let question_number = 0;
let score = 0;
const question_head = document.getElementById("question_head");
const text_a = document.getElementById("text_a");
const text_b = document.getElementById("text_b");
const text_c = document.getElementById("text_c");
const text_d = document.getElementById("text_d");
const submitBtn = document.getElementById("submitBtn");
const quiz = document.getElementById('quiz');

const getSelect = () =>{
    const answerEls = document.querySelectorAll(".answer");
    let answer = undefined;
    answerEls.forEach((answerEl)=>{
            if(answerEl.checked){
              answer = answerEl.id;
              return answer;
            }
    })
    return answer;
}

const deselect = () =>{
  const answerEls = document.querySelectorAll(".answer");
  answerEls.forEach((answerEl)=>{
    answerEl.checked = false;
})
}

  const questionfunc = () => {
    deselect();
    const quiz_question = quizData[question_number];
    question_head.innerText = quiz_question.question;
  
    text_a.innerText = quiz_question.a;
    text_b.innerText = quiz_question.b;
    text_c.innerText = quiz_question.c;
    text_d.innerText = quiz_question.d;
    
  };
  questionfunc();


  submitBtn.addEventListener("click", () => {
    let answer = getSelect();
    if(answer){
      if(answer === quizData[question_number].correct){
        score++;
        console.log(score);
      }
      question_number++;

      if (question_number < quizData.length) {
        questionfunc();
      } else {
        quiz.innerHTML = `<h1>Your Final Score is ${score}/${quizData.length}.</h1> <button onclick="location.reload()">reload</button>`;
      }
    }
   
    
  });

 



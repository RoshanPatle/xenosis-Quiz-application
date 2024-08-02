const questions = [
  {
    question: "which is largest animal in the world?",
    answers: [
      { text: "shark", correct: "false" },
      { text: "Blue whale", correct: "true" },
      { text: "Elephant", correct: "false" },
      { text: "Giraffe", correct: "false" },
    ],
  },

  {
    question: "which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: "false" },
      { text: "Australia", correct: "true" },
      { text: "Arctic", correct: "false" },
      { text: "Africa", correct: "false" },
    ],
  },

  {
    question: "What is the capital of Italy?",
    answers: [
      { text: "Madrid", correct: "false" },
      { text: "Rome", correct: "true" },
      { text: "Berlin", correct: "false" },
      { text: "Paris", correct: "false" },
    ],
  },

  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: "false" },
      { text: "Mars", correct: "false" },
      { text: " Saturn", correct: "false" },
      { text: "Jupiter", correct: "true" },
    ],
  },

  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Helium", correct: "false" },
      { text: "Silver", correct: "false" },
      { text: " Gold", correct: "false" },
      { text: "Oxygen", correct: "true" },
    ],
  },


  {
    question: "What is the sum of 8 + 5",
    answers: [
      { text: "10", correct: "false" },
      { text: "13", correct: "true" },
      { text: " 15", correct: "false" },
      { text: "20", correct: "false" },
    ],
  },

  {
    question: "Who wrote Romeo and Juliet? ",
    answers: [
      { text: "Charles Dickens", correct: "false" },
      { text: "Jane Austen", correct: "false" },
      { text: "Mark Twain ", correct: "false" },
      { text: " William Shakespeare", correct: "true" },
    ],
  },


  {
    question: "What is the boiling point of water at sea level?",
    answers: [
      { text: " 90°C", correct: "false" },
      { text: "110°C", correct: "false" },
      { text: " 100°C", correct: "true" },
      { text: "120°C", correct: "false" },
    ],
  },

  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: " Au", correct: "true" },
      { text: "Ag", correct: "false" },
      { text: "gd ", correct: "false" },
      { text: "go", correct: "false" },
    ],
  },


  {
    question: "How many continents are there on Earth?",
    answers: [
      { text: " 9", correct: "false" },
      { text: "5", correct: "false" },
      { text: "10 ", correct: "false" },
      { text: "7", correct: "true" },
    ],
  },

];


const questionElement = document.getElementById('question');
const answerButton=document.getElementById('answer-btn');
const nextButton=document.getElementById('next-btn')


let index=0;
let score=0;

function startQuiz(){
    curretquestion=0;
    score=0;
    nextButton.innerHTML='next';
    showQuestion();

}

function showQuestion(){
    resetstate();
    let curretquestion=questions[index];
    let questionNo=index+1;
    questionElement.innerHTML=questionNo+'.'+curretquestion.question;

    curretquestion.answers.forEach(answer => {
        const button=document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correct){
           button.dataset.correct=answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}



function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==='true';
if(isCorrect){
    selectedBtn.classList.add('correct')
    score++;
}else{
    selectedBtn.classList.add('inCorrect');
}

Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct==='true'){
button.classList.add('correct');
    }
    button.disabled=true;

});
nextButton.style.display='block';
}

function showScore(){
    resetstate()
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}` ;
    nextButton.innerHTML='Play again';
    nextButton.style.display='block'


}


function handleNextButton(){
    index++;
    if(index<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener('click', ()=>{
    if(index<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

function resetstate(){
    nextButton.style.display='none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
    
}
startQuiz()















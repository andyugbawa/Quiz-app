const startBtn = document.querySelector(".start-btn");
const hallBtn = document.getElementById("hall-btn");
const header = document.querySelector("#header");
const presentScore = document.getElementById("present-score");
const clipButtons = document.getElementById("answer-buttons");
const buttonNext = document.getElementById("next-btn");
const questionMark = document.getElementById("question-mark");
const quiz = document.querySelector(".startup");


import { questions } from "./script.js";
console.log(questions);

startBtn.addEventListener("click", startQuiz);

let currentQuestion = 0;
let score = 0;
let scoreShown = false;

function startQuiz() {
    hallBtn.style.display = "none";
    header.style.display = "none";
    startBtn.style.display = "none";
    presentScore.style.display = "block";
    nameQuiz();
    listQuestion();
    // displayScore();
}

function nameQuiz() {
    currentQuestion = 0;
    score = 0;
    scoreShown = false;
    buttonNext.innerHTML = "Next";
    showQuiz();
}

function showQuiz() {
    removeSets();
    
        let incrementQuiz = questions[currentQuestion];
        let questionNum = currentQuestion + 1;
        questionMark.innerHTML = questionNum + ". " + incrementQuiz.question;

        incrementQuiz.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", pickAnswer);
            clipButtons.appendChild(button);
        });
    
}

function removeSets() {
    buttonNext.style.display = "none";
    while (clipButtons.firstChild) {
        clipButtons.removeChild(clipButtons.firstChild);
    }
    const wrongEl = document.querySelectorAll(".para-content");
    wrongEl.forEach(element => element.remove());
}

function pickAnswer(e) {
    const choiceBtn = e.target;
    const par = document.createElement("p");
    par.classList.add("edit");
    const contentPar = document.createElement("div");
    contentPar.classList.add("para-content");
    const letCorrect = choiceBtn.dataset.correct === "true";
    if (letCorrect) {
        choiceBtn.classList.add("correct");
        score++;
    } else {
        choiceBtn.classList.add("incorrect");
        par.innerHTML = "Wrong Answer";
        contentPar.append(par);
        quiz.appendChild(contentPar);
    }

    Array.from(clipButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    buttonNext.style.display = "block";
}

buttonNext.addEventListener("click", () => {
    if (currentQuestion < questions.length) {
        currentQuestion++;
        showQuiz();
    } else {
        displayScore();
        buttonNext.innerHTML = "Next";
        buttonNext.addEventListener("click", startQuiz);
    }
});

function listQuestion() {
    if (!scoreShown) {
        // currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuiz();
        } else {
            displayScore();
        }
    }
}


function displayScore() {
    removeSets();
    questionMark.innerHTML = `Your score is ${score} out of ${questions.length}`;
    buttonNext.innerHTML = "Next";
    buttonNext.style.display = "block";
    scoreShown = true;
}

function hallFame() {
    // Logic to show hall of fame or reset the quiz
}










































































































































































// const startBtn = document.querySelector(".start-btn");
// const hallBtn = document.getElementById("hall-btn");
// const header = document.querySelector("#header");
// const presentScore = document.getElementById("present-score")
// const clipButtons = document.getElementById("answer-button")
// const buttonNext = document.getElementById("next-btn")

// import {questions} from "./script.js"

// startBtn.addEventListener("click", startQuiz)

// function startQuiz(){
// //   window.location.href = "index2.html"
// hallBtn.style.display = "none"
// header.style.display = "none"
// startBtn.style.display = "none"
// presentScore.style.display = "block"
// // clipButtons.style.display = "block"
// nameQuiz();
// showQuiz();
// removeSets();
// pickAnswer(e);
// listQuestion();
// displayScore();

// }


// let currentQuestion = 0;
// let score = 0;


// function nameQuiz(){
//     currentQuestion = 0;
//     score = 0;
//     buttonNext.innerHTML = "Next"
//     showQuiz();
// }



// buttonNext.addEventListener("click",()=>{
    
//     if(currentQuestion < questions.length){
//         listQuestion();
//     }else{
//         if(scoreShown){
//             hallFame()
//         }else{
//             startQuiz()

//         }
//     }

   
// })



// function showQuiz(){
//     removeSets();
//     let incrementQuiz = questions[currentQuestion];
//     let questionNum = currentQuestion + 1;
//     questionMark.innerHTML = questionNum + ". " + incrementQuiz.question;
     
//     incrementQuiz.answers.forEach(answer => {
//         const button  = document.createElement("button")
//         button.innerHTML = answer.text;
//         const contButton = document.createElement("div")
//         button.classList.add("btn");
//         contButton.classList.add("content-button")
//         if(answer.correct){
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener("click",pickAnswer)
//         contButton.append(button)
//         clipButtons.appendChild(contButton)
//         // clipButtons.appendChild(contButton)
//     });
// }



// function removeSets(){
//     buttonNext.style.display = "none";
//     while(clipButtons.firstChild){
//       clipButtons.removeChild(clipButtons.firstChild)
//     }
//     const wrongEl = document.querySelectorAll(".para-content");
//     wrongEl.forEach(element=>element.remove())
//   }

  
// function pickAnswer(e){
//     const choiceBtn = e.target;
//     const par = document.createElement("p")
//     par.classList.add("edit")
//     const contentPar = document.createElement("div")
//     contentPar.classList.add("para-content")
//     const letCorrect = choiceBtn.dataset.correct ==="true"
//     if(letCorrect){
//         choiceBtn.classList.add("correct")
//         score++;
//     }else{
//         par.innerHTML = "Wrong Answer"
//     }
//     contentPar.append(par)
//     quiz.appendChild(contentPar)

//     Array.from(clipButtons.children).forEach(button=>{
//         if(button.dataset.correct === 'true'){
//             button.classList.add("button")
//         }
//         button.disabled = "true";
//     })
//     buttonNext.style.display = "block";
// }


// function listQuestion(){
//     if(!scoreShown){
//         currentQuestion++;
//         if(currentQuestion < questions.length){
//             showQuiz()
        
//         }else{
//             displayScore()
//     }
//     }
//  }

//  let scoreShown = false;

 
//  function displayScore(){
//     removeSets();
//     questionMark.innerHTML = `You score is ${score} over ${questions.length}`;
//     buttonNext.innerHTML = "Next";
//     buttonNext.style.display = "block";
//     scoreShown = true;
   

//  }

 





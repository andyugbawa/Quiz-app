const startBtn = document.querySelector(".start-btn");
const hallBtn = document.getElementById("hall-btn");
const header = document.querySelector("#header");
const presentScore = document.getElementById("present-score");
const clipButtons = document.getElementById("answer-buttons");
const buttonNext = document.getElementById("next-btn");
const questionMark = document.getElementById("question-mark");
const quiz = document.querySelector(".startup");
const timerEl = document.querySelector("#timer");
const timePeace = document.getElementById("time-piece");
const countEl = document.getElementById("timer");
const shuffleEl = document.getElementById("shuffle");
// const questionShuffle = document.getElementById("question-shuffle")YET TO EXECUTE THIS FUNCTION.
const musicBtn = document.getElementById("music-btn")



const startTiming = 1;
let time = startTiming *60;


 setInterval (updateCount, 1000)

function updateCount(){

    if(time>=0){
        let minutes = Math.floor(time/60);
        let seconds = time % 60;
    
        seconds = seconds < 10 ? "0" + seconds : seconds
    
        countEl.innerHTML = `${minutes}  ${seconds}`
        time--

    }else{
        time = startTiming *60
    }
}



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
    timerEl.style.display = "block";
    timePeace.style.display = "block";
    shuffleEl.style.display = "block";
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
    const par1 =document.createElement("p")
    par1.classList.add("good")
    par.classList.add("edit");
    const contentPar = document.createElement("div");
    contentPar.classList.add("para-content");
    const letCorrect = choiceBtn.dataset.correct === "true";
    if (letCorrect) {
        choiceBtn.classList.add("correct");
        score++;
        par1.innerHTML = "Good Job 😎 🎉";
        contentPar.append(par1);
    } else {
        choiceBtn.classList.add("incorrect");
        par.innerHTML = "Oops Wrong Answer 😐";
        contentPar.append(par);
        
    }

    quiz.appendChild(contentPar);
    

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



document.addEventListener("DOMContentLoaded", () => {
    const musicBtn = document.getElementById("music-btn");
    const song1 = document.getElementById("song1");
    const song2 = document.getElementById("song2");

    // Initially play song1
    song1.play();

    musicBtn.addEventListener("click", () => {
        if (musicBtn.innerText === "Switch background music 1") {
            musicBtn.innerText = "Switch background music 2";
            musicBtn.style.backgroundColor = "pink";
            
            
            song1.pause();
            song1.currentTime = 0;
            song2.play();
        } else {
            musicBtn.innerText = "Switch background music 1";
            musicBtn.style.backgroundColor = "#1e90ff";
            
        
            song2.pause();
            song2.currentTime = 0;
            song1.play();
        }
    });
});

































































































































































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

 





import { questions } from "./question.js";
// console.log(questions);

// Elements and variables
const startBtn = document.querySelector(".start-btn");
const hallBtn = document.getElementById("hall-btn");
const header = document.querySelector("#header");
const presentScore = document.getElementById("present-score");
const clipButtons = document.getElementById("answer-buttons");
const buttonNext = document.getElementById("next-btn");
const questionMark = document.getElementById("question-mark");
const quiz = document.querySelector(".startup");
let timePiece = document.getElementById("time-piece");
const countEl = document.getElementById("timer");
const shuffleEl = document.getElementById("shuffle");
const questionShuffle = document.getElementById("question-shuffle");
const musicBtn = document.getElementById("music-btn");
const headTimer = document.querySelector(".count-timer");
const audioPlayer = document.getElementById("audio-player");
const song1Src = "./music/1-01. Title Theme [CPS-1].mp3";
const song2Src = "./music/05. Ken Stage.mp3";

let currentQuestion = 0;
let score = 0;
let scoreShown = false;
let time = 15;
let timerInterval = null;
let currentQuestionNumber = 0;

// Event listener
startBtn.addEventListener("click", startQuiz);

// Start Quiz function
function startQuiz() {
    // Hide or show relevant elements
    hallBtn.style.display = "none";
    header.style.display = "none";
    startBtn.style.display = "none";
    presentScore.style.display = "block";
    timePiece.style.display = "block";
    shuffleEl.style.display = "block";

    // Initialize Quiz State
    currentQuestion = 0;
    score = 0;
    scoreShown = false;
    currentQuestionNumber = 0;

    // Start the first question and timer
    showQuiz();
    startTimer();
    pauseTimer();
}

// Show Quiz function
function showQuiz() {
    removeSets();
    displayQuestionNumber();

    if (currentQuestion < questions.length) {
        // Display the current question
        let incrementQuiz = questions[currentQuestion];
        let questionNum = currentQuestion + 1;
        questionMark.innerHTML = questionNum + ". " + incrementQuiz.question;

        // Display the answers
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

        // Start the timer
        startTimer();
        resumeTimer()
    } else {
        // If no more questions, show the score
        displayScore();
    }
}


    function startTimer(){
        time--;
        timePiece.innerHTML = "Time-left :" + time;
    }

    let myTime =setInterval(function(){
        startTimer()
        // time--;
        // timePiece.innerHTML = "Time-left :" + time;
        if(time === 0){
            clearInterval(myTime);
            timePiece.innerHTML = "Oops Times Up"
            buttonNext.style.display = "block"
        }

    },1000);

    
function resumeTimer(){
    // startTimer()
    clearInterval(timerInterval); // Clear any existing interval
    time = 15; // Reset time to 15 seconds
    timePiece.innerHTML = "Time-left :" + time;
};

function pauseTimer(){
    clearInterval(timerInterval)
    timerInterval = null
}


// Remove previous question elements
function removeSets() {
    buttonNext.style.display = "none";
    while (clipButtons.firstChild) {
        clipButtons.removeChild(clipButtons.firstChild);
    }
    const wrongEl = document.querySelectorAll(".para-content");
    wrongEl.forEach(element => element.remove());
}


function displayQuestionNumber() {
    const shuffleElement = document.getElementById("shuffle");
    shuffleElement.textContent = `QUESTION ${currentQuestionNumber + 1} of ${questions.length} shuffled from 50`;
}

function pickAnswer(e) {
    const choiceBtn = e.target;
    const par = document.createElement("p");
    const par1 = document.createElement("p");
    par1.classList.add("good");
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

    pauseTimer();
    resumeTimer();
 
    
    // Disable buttons and highlight correct answer
    Array.from(clipButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    
    scoreFacts();
   
    buttonNext.style.display = "block";
    
};


function scoreFacts(){
    presentScore.textContent= `Present Score :${score}`
 };


 
buttonNext.addEventListener("click", () => {
  
    if (currentQuestion < questions.length) {
        currentQuestion++;
        resumeTimer()
        showQuiz();
     
    } else {
        displayScore();
        buttonNext.innerHTML = "Next";
        buttonNext.addEventListener("click", startQuiz);
       pauseTimer();
    }
   
});











// Implement other necessary functions such as displayScore, scoreFacts, etc.


// const startBtn = document.querySelector(".start-btn");
// const hallBtn = document.getElementById("hall-btn");
// const header = document.querySelector("#header");
// const presentScore = document.getElementById("present-score");
// const clipButtons = document.getElementById("answer-buttons");
// const buttonNext = document.getElementById("next-btn");
// const questionMark = document.getElementById("question-mark");
// const quiz = document.querySelector(".startup");
// let timePiece = document.getElementById("time-piece");
// const countEl = document.getElementById("timer");
// const shuffleEl = document.getElementById("shuffle");
// const questionShuffle = document.getElementById("question-shuffle")
// const musicBtn = document.getElementById("music-btn");
// const headTimer = document.querySelector(".count-timer");
// const audioPlayer = document.getElementById("audio-player");
// const song1Src = "./music/1-01. Title Theme [CPS-1].mp3";
// const song2Src = "./music/05. Ken Stage.mp3";

// let currentQuestion = 0;
// let score = 0;
// let scoreShown = false;
// let time =15;
// let timerInterval = null;
// let currentQuestionNumber = 0;


// startBtn.addEventListener("click", startQuiz);

// function startQuiz() {
//     hallBtn.style.display = "none";
//     header.style.display = "none";
//     startBtn.style.display = "none";
//     presentScore.style.display = "block";
//     timePiece.style.display = "block";
//     shuffleEl.style.display = "block";
//     // nameQuiz();
//     // listQuestion();
//     // audioPlayer.src = song1Src;
//     // audioPlayer.play();
//     currentQuestionNumber = 0;
//     // displayQuestionNumber();
//     // startTimer();
//     // timeIsUp()
//     // timeWatch()

//     let myTime =setInterval(function(){
//         timeWatch()
//         // time--;
//         // timePiece.innerHTML = "Time-left :" + time;
//         if(time === 0){
//             clearInterval(myTime);
//             timePiece.innerHTML = "Oops Times Up"
//         }
//     },1000);

//     function timeWatch(){
//         time--;
//         timePiece.innerHTML = "Time-left :" + time;
//     }



    
// };





// function listQuestion() {
//     if (!scoreShown) {
//         // currentQuestion++;
//         if (currentQuestion < questions.length) {
//             showQuiz();
//         } else {
//             displayScore();
//         }
//     }
//     timeWatch();
//     startTimer()
// }


// function nameQuiz() {
//     currentQuestion = 0;
//     score = 0;
//     scoreShown = false;
//     showQuiz();
//     timeWatch();
//     startTimer()
    
// }


// function showQuiz() {
//     currentQuestionNumber++;
//     removeSets();
//     displayQuestionNumber();

//     timePiece.style.display = "none";
//     // timerEl.style.display = "block";
    
//         let incrementQuiz = questions[currentQuestion];
//         let questionNum = currentQuestion + 1;
//         questionMark.innerHTML = questionNum + ". " + incrementQuiz.question;

//         incrementQuiz.answers.forEach(answer => {
//             const button = document.createElement("button");
//             button.innerHTML = answer.text;
//             button.classList.add("btn");
//             if (answer.correct) {
//                 button.dataset.correct = answer.correct;
//             }
//             button.addEventListener("click", pickAnswer);
//             clipButtons.appendChild(button);
//         });

//         startTimer();
//         timeWatch()
    
// };


// function removeSets() {
//     buttonNext.style.display = "none";
//     while (clipButtons.firstChild) {
//         clipButtons.removeChild(clipButtons.firstChild);
//     }
//     const wrongEl = document.querySelectorAll(".para-content");
//     wrongEl.forEach(element => element.remove());
// }



// function displayQuestionNumber() {
//     const shuffleElement = document.getElementById("shuffle");
//     shuffleElement.textContent = `QUESTION ${currentQuestionNumber + 1} of ${questions.length} shuffled from 50`;
// }



// function pickAnswer(e) {
//     // pauseTimer()
//     const choiceBtn = e.target;
//     const par = document.createElement("p");
//     const par1 =document.createElement("p")
//     par1.classList.add("good")
//     par.classList.add("edit");
//     const contentPar = document.createElement("div");
//     contentPar.classList.add("para-content");
//     const letCorrect = choiceBtn.dataset.correct === "true";
//     if (letCorrect) {
//         choiceBtn.classList.add("correct");
//         score++;
//         par1.innerHTML = "Good Job 😎 🎉";
//         contentPar.append(par1);
//     } else {
//         choiceBtn.classList.add("incorrect");
//         par.innerHTML = "Oops Wrong Answer 😐";
//         contentPar.append(par);
        
//     }

//     quiz.appendChild(contentPar);
    

//     Array.from(clipButtons.children).forEach(button => {
//         if (button.dataset.correct === "true") {
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     }); 
    
//     scoreFacts();



//      buttonNext.style.display = "block";
//  }




// function startTimer(){
//     timerInterval = setInterval (updateCount, 1000);
//     if(timerInterval === null)
//        timerInterval = setInterval(function(){
//         // let figure = parseInt(time.textContent)
//         // figure--
//         // time.textContent=figure
//         // console.log("fine")
    
//     },1000)
//     if(time === 0){
//         if(timerInterval < 0){
//             let figure = parseInt(time.textContent)
//             figure--
//             time.textContent=figure
//             console.log("fine")
//         }
//         // let minutes = Math.floor(time/60);
//         // let seconds = time % 60;
    
//         // seconds = seconds < 10 ? "0" + seconds : seconds
//         time--
    
//         timerEl.innerHTML = `${minutes}  ${seconds}`

//     }else{
//         time = startTiming *60
//         timeIsUp()
//         pauseTimer();
//     }
// }


// function resumeTimer(){
//     startTimer()
// }



// function pauseTimer(){
//     clearInterval(timerInterval)
// }



 

// function updateCount(){

//     if(time > 0){
//         let minutes = Math.floor(time/60);
//         let seconds = time % 60;
    
//         seconds = seconds < 10 ? "0" + seconds : seconds
    
//         countEl.innerHTML = `${minutes}  ${seconds}`
//         time--

//     }else{
//         time = startTiming *60
//         timeIsUp()
//         pauseTimer();
//     }
// }

// function timeIsUp() {
//         timePeace.textContent = "Time is up";
//         timePeace.style.display = "block"; 
//         timerEl.style.display = "none"; 

// }









// function scoreFacts(){
//     presentScore.textContent= `Present Score :${score}`
//  }





// buttonNext.addEventListener("click", () => {
//     if (currentQuestion < questions.length) {
//         currentQuestion++;
//         resumeTimer()
//         showQuiz();
//     } else {
//         displayScore();
//         buttonNext.innerHTML = "Next";
//         buttonNext.addEventListener("click", startQuiz);
//     }
// });



// function displayScore() {
//     removeSets();
//     questionMark.innerHTML = `Your score is ${score} out of ${questions.length}`;
//     buttonNext.innerHTML = "Next";
//     buttonNext.style.display = "block";
//     scoreShown = true;
// }



// document.addEventListener("DOMContentLoaded", () => {
//     const musicBtn = document.getElementById("music-btn");
//     musicBtn.addEventListener("click", () => {
//         if (musicBtn.innerText === "Switch background music 1") {
//             musicBtn.innerText = "Switch background music 2";
//             musicBtn.style.backgroundColor = "pink";
            
            
//             audioPlayer.src = song2Src;
//             audioPlayer.currentTime = 0; 
//             audioPlayer.play();


            
//         } else {
//             musicBtn.innerText = "Switch background music 1";
//             musicBtn.style.backgroundColor = "#1e90ff";
            

//             audioPlayer.src = song1Src;
//             audioPlayer.currentTime = 0; 
//             audioPlayer.play();
        
//         }
//     });
// });





 

 



































































































































































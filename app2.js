import { questions } from "./question.js";
// console.log(questions);
const fileQuestion = questions;



const startBtn = document.querySelector(".start-btn");
const hallBtn = document.getElementById("hall-btn");
const header = document.querySelector("#header");
const presentScore = document.getElementById("present-score");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const questionMark = document.getElementById("question-mark");
const quiz = document.querySelector(".startup");
let timePiece = document.getElementById("time-piece");
const countEl = document.getElementById("timer");
const shuffleEl = document.getElementById("shuffle");
const questionShuffle = document.getElementById("question-shuffle");
const gameOver = document.getElementById("game-over");
const totalScore = document.getElementById("total-score");
const inputName = document.getElementById("input-name");
const saveScore = document.getElementById("save-score");
const mainMenu = document.getElementById("main-menu");
const scoreName = document.getElementById("score-name");
const listScore = document.getElementById("list-score");
const hallFame = document.getElementById("hall-fame");
const menuButton = document.getElementById("menu-btn")
// const pass = document.getElementById("pass")
const musicBtn = document.getElementById("music-btn");
const headTimer = document.querySelector(".count-timer");
const audioPlayer = document.getElementById("audio-player");
const song1Src = "./music/1-01. Title Theme [CPS-1].mp3";
const song2Src = "./music/05. Ken Stage.mp3";



let currentQuestion = 0;
let score = 10;
let scoreShown = false;
let time = 15;
let timerInterval = null;
let currentQuestionNumber = 0;
let numberQuestionShuffle = 2;
let figureScore = 0;
let myTime;



// function play(){
//     // console.log("Hello");
   
// }

saveScore.addEventListener("click",viewScores);

startBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click",nextPage);

mainMenu.addEventListener("click",menuPage);


function startQuiz() {
    
    hallBtn.style.display = "none";
    header.style.display = "none";
    startBtn.style.display = "none";
    presentScore.style.display = "block";
    timePiece.style.display = "block";
    shuffleEl.style.display = "block";
    
    currentQuestion = 8;
    score = 0;
    scoreShown = false;
    currentQuestionNumber = 0;
    myTime = setInterval(andy, 1000);

    showQuiz();

     // pass.style.display = "none"
    // listScore.style.display= "none"
    // nextBtn.style.display  = "none"

}
function andy(){
    startTimer()
    
    if(time === 0){
        clearInterval(myTime);
        timePiece.innerHTML = "Oops Times Up 😐"
        
            nextBtn.style.display = "block";
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
                }else{
                button.classList.add("incorrect");

            }
            button.disabled = true;
        });
    }

}

function atase(){
    time--;
    timePiece.innerHTML = "Time-left :" + time;
    if(time === 0){
        clearInterval(myTime)
         timePiece.innerHTML = "Oops Times Up 😐"
         nextBtn.style.display = "block";
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }else{
                button.classList.add("incorrect");

            }
            button.disabled = true;
        });
    }

    
    
 }

     
function resumeTimer(){
    // startTimer()
    // clearInterval(timerInterval); 
    time = 15; 
    timePiece.innerHTML = "Time-left :" + time;
     myTime = setInterval(atase,1000);
    
    
};


function startTimer(){
    time--;
    timePiece.innerHTML = "Time-left :" + time;
    // play();
    
}



function showQuiz() {
    removeSets();
    displayQuestions();

    if (currentQuestion < questions.length) {
        
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
            answerButtons.appendChild(button);
        });

        
        startTimer();
    
    } else {
        
        // displayScore();
    }
};

function pickAnswer(e) {
    const choiceBtn = e.target;
    // console.log(choiceBtn)
    const par = document.createElement("p");
    const par1 = document.createElement("p");
    par1.classList.add("good");
    par.classList.add("edit");
    const contentPar = document.createElement("div");
    contentPar.classList.add("para-content");
    
    
    if (choiceBtn.dataset.correct === "true") {
        choiceBtn.classList.add("correct");
        score+=10;
        par1.innerHTML = "Good Job 😎 🎉🎖️";
        contentPar.append(par1);
        
        
    } else {
        choiceBtn.classList.add("incorrect");
        par.innerHTML = "Oops Wrong Answer 😐";
        contentPar.append(par);
        
    
    }

    quiz.appendChild(contentPar);

    displayTotalScore();

    // scoreStorage();

    // pauseTimer();
     clearInterval(myTime);

    //  displayQuestions();
     
    
 
    
    
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    
    scoreFacts();
   
    nextBtn.style.display = "block";
    
};

function removeSets() {
    nextBtn.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    const wrongEl = document.querySelectorAll(".para-content");
    wrongEl.forEach(element => element.remove());
}


function displayQuestions() {
    const shuffleElement = document.getElementById("shuffle");
    shuffleElement.textContent = `QUESTION ${currentQuestionNumber + 1} of ${questions.length -40} shuffled from 50`;
   
}

function nextPage() {
  
    if (currentQuestion < questions.length) {
        currentQuestion++;
        resumeTimer()
        showQuiz();
     
    } else {
        // displayScore();
        nextBtn.innerHTML = "Next";
        nextBtn.addEventListener("click", startQuiz);

    }

    shuffleEl.innerHTML = `QUESTION ${numberQuestionShuffle++}  0f 10 shuffled from 50` ;

    
    if(currentQuestion === 8 ){
     nextBtn.innerHTML = "Go to Last Question";
     nextBtn.style.backgroundColor = "pink";
    }
    else if(currentQuestion === 9){
        nextBtn.innerHTML = "End Game";
       
        
    }
    else if(currentQuestion === 4){
        nextBtn.style.backgroundColor = "yellow"
    }
    if(currentQuestion === 10){
        gameOver.style.display = "block";
        totalScore.style.display = "block";
        presentScore.style.display="none";
        timePiece.style.display = "none";
        shuffleEl.style.display = "none";
        answerButtons.style.display = "none";
        questionMark.style.display= "none";
        inputName.style.display = "block";
        saveScore.style.display = "block";
        mainMenu.style.display = "block";
        scoreName.style.display = "block";
        
        holdTask();
        
        clearInterval(myTime)
    }
    displaySelectedQuestions();
    // viewScores();
};

function viewScores(){
    let chartValue = inputName.value;
    let scoreEl = document.createElement("p");
    scoreEl.textContent = chartValue;
    scoreEl.innerHTML =`${score}     --${chartValue}`
    listScore.appendChild(scoreEl)
    scoreEl.style.color = "white"
    inputName.value = "";
    scoreStorage();
    
     listScore.style.display = "block";
     gameOver.style.display = "none";
     totalScore.style.display = "none";
     inputName.style.display = "none";
     saveScore.style.display = "none";
     mainMenu.style.display ="none";
     hallFame.style.display = "block";
     menuButton.style.display = "block";
};

function scoreStorage(){
    let pole = [];
    listScore.querySelectorAll("p").forEach((items)=>{
      pole.push(items.textContent)  
    })
    localStorage.setItem("quiz",JSON.stringify(pole))

   
};

function holdTask(){
    let pale =JSON.parse(localStorage.getItem("quiz"))
    pale.forEach((items)=>{
        let pill = document.createElement("p")
        pill.classList.add("pass")
        pill.textContent = items
        listScore.appendChild(pill)
    })

     
    // let copiedData =localStorage.getItem("quiz")
    //     console.log(JSON.parse(copiedData));
    //     let passMark = [];
    //     let parseData = JSON.parse(copiedData);
    //     parseData.forEach((items)=>{
    //         let p = document.createElement("p");
    //         p.classList.add("pass");
    //         p.innerHTML = items;
        
            
    //     })
};

function menuPage(){

    currentQuestion = 0;
    console.log(score)
    score = 0;
    console.log(score)
    // scoreShown = false;
    time = 15;
    currentQuestionNumber = 0;
    numberQuestionShuffle = 0;

    clearInterval(myTime);
    // clearInterval(timerInterval);
  
 header.style.display = "block";
 startBtn.style.display = "block";
 hallBtn.style.display = "block";
gameOver.style.display = "none";
totalScore.style.display = "none";
inputName.style.display = "none";
saveScore.style.display = "none";
mainMenu.style.display ="none";
scoreName .style.display = "none";
listScore.style.display = "none";
// presentScore.style.display = "none";
// answerButtons.style.display = "block";
// questionMark.style.display = "block";
}
function displayTotalScore(){
 if(score < 100 || score > 1 ){
    totalScore.innerHTML = `You Scored: ${score}/100` 
 }
   

};


function scoreFacts(){
  
    presentScore.textContent= `Present Score :${score}`
    
    
};



function displaySelectedQuestions() {
    selectedQuestions.forEach((question, index) => {
        // console.log(`${index + 1}. ${question.question}`);
        question.answers.forEach(answer => {
            // console.log(`   - ${answer.text} (Correct: ${answer.correct})`);
        });
    });

    if(questions <= 10){
        nextBtn.innerHTML = "Go to last Question"
    }
};

const selectedQuestions = questions.slice(0, 10);


selectedQuestions.forEach(question => {
    shuffleArray(question.answers);
});













function pauseTimer(){
    clearInterval(timerInterval)
    timerInterval = null
}










function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}




shuffleArray(questions);

displaySelectedQuestions();







// {
//     question: 'What is the primary use of an IP address?',
//     answers: [
//         { text: "To identify a device on a network", correct: true },
//         { text: "To encrypt data", correct: false },
//         { text: "To store data", correct: false },
//         { text: "To create web pages", correct: false }
//     ]
// },

// "your selection" === "the correct answer"
// "443" === 
 
// if (the answer is correct){
//     // give 10 points
//     add 10 points to the innerHTML
// }else{
//      do not give 10 points.

// }

// if(answerButtons === answers)




    // // Reset quiz state variables
    // currentQuestion = 0;
    // score = 0;
    // scoreShown = false;
    // time = 15;
    // currentQuestionNumber = 0;
    // numberQuestionShuffle = 2;

    // // Stop any running timers
    // clearInterval(myTime);
    // clearInterval(timerInterval);
    // showQuiz();

    // // Hide all elements related to the quiz and scores
    // gameOver.style.display = "none";
    // totalScore.style.display = "none";
    // inputName.style.display = "none";
    // saveScore.style.display = "none";
    // mainMenu.style.display = "none";
    // scoreName.style.display = "none";
    // listScore.style.display = "none";
    // presentScore.style.display = "none";
    // timePiece.style.display = "none";
    // shuffleEl.style.display = "none";
    // answerButtons.style.display = "none";
    // questionMark.style.display = "none";
    // hallFame.style.display = "none";
    // menuButton.style.display = "none";

    // // Show the initial elements for the start screen
    // header.style.display = "block";
    // startBtn.style.display = "block";
    // hallBtn.style.display = "block";

    // // Clear answer buttons and any feedback elements
    // while (answerButtons.firstChild) {
    //     answerButtons.removeChild(answerButtons.firstChild);
    // }
    // const feedbackElements = document.querySelectorAll(".para-content");
    // feedbackElements.forEach(element => element.remove());

    // // Reset any changed UI elements to their default state
    // nextBtn.innerHTML = "Next";
    // nextBtn.style.backgroundColor = "";

    // // Optionally reset other elements or styles as needed












// Implement other necessary functions such as displayScore, scoreFacts, etc.


// const startBtn = document.querySelector(".start-btn");
// const hallBtn = document.getElementById("hall-btn");
// const header = document.querySelector("#header");
// const presentScore = document.getElementById("present-score");
// const clipButtons = document.getElementById("answer-buttons");
// const nextBtn = document.getElementById("next-btn");
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
//     nextBtn.style.display = "none";
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



//      nextBtn.style.display = "block";
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





// nextBtn.addEventListener("click", () => {
//     if (currentQuestion < questions.length) {
//         currentQuestion++;
//         resumeTimer()
//         showQuiz();
//     } else {
//         displayScore();
//         nextBtn.innerHTML = "Next";
//         nextBtn.addEventListener("click", startQuiz);
//     }
// });



// function displayScore() {
//     removeSets();
//     questionMark.innerHTML = `Your score is ${score} out of ${questions.length}`;
//     nextBtn.innerHTML = "Next";
//     nextBtn.style.display = "block";
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





 

 






// function fetchStorage(){
//     let passMark = JSON.parse(localStorage.getItem("quiz")) ||[];
//     passMark.forEach((item)=>{
//     const newParEl = document.getElementById("li");
//     // newParEl.classList.add("pass")
//     newParEl.textContent =item;
//     listScore.appendChild(newParEl)

//     });
// };


 // let passMark=[];
        // let word = document.createElement("p")
        // word.textContent  = "Andy --30"
        // passMark.push(word.textContent);
        // localStorage.setItem("quiz",JSON.stringify(passMark))

// console.log(currentQuestion)
    // console.log(currentQuestion === 10)

 // saveTolocalStorage();
        // let copiedData =localStorage.getItem("quiz")
        // console.log(JSON.parse(copiedData));
        // let passMark = ["30 --Andy","50 --Zino","60 --Atase"];
        // let parseData = JSON.parse(copiedData);
        // parseData.forEach((items)=>{
        //     let p = document.createElement("p");
        //     p.classList.add("pass");
        //     p.innerHTML = items;
        //     // listScore.appendChild(p);
            
        // })
        // console.log(copiedData);
        // listScore.appendChild("andy")
    //   listScore.appendChild(copiedData)
        

         // for(let i=0; i<passMark.length;i++){
        //     console.log(passMark[i])
        // }



        // function saveTolocalStorage(){
        //     // let passMark=["30 --Andy","50 --Zino","60 --Atase"];
        //     // localStorage.setItem("quiz",JSON.stringify(passMark));
        
        //     // let pole = [];
        //     // listScore.querySelectorAll("p").forEach((items)=>{
        //     //   pole.push(items.textContent)  
        //     // })
        //     // localStorage.setItem("quiz",JSON.stringify(pole))
           
            
            
        // }

         // let passMark= [];
    // listScore.querySelectorAll("li").forEach(function(items){
    //     passMark.push(items.textContent)
    // });
    // localStorage.setItem("quiz",JSON.stringify(passMark))


// function retrieveData(){
//     let copiedData =localStorage.getItem("quiz")

//     if(copiedData){
//         let compData = JSON.parse(copiedData)
//         console.log(compData)
//     }else{
//         console.log("None")
//     }
// }

















































































































































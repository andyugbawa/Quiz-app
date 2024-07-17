import { questions } from "./question.js";

console.log("hi")

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
const menuBtn = document.getElementById("menu-btn");
const headContent = document.getElementById("head-content")
const musicBtn = document.getElementById("music-btn");
const headTimer = document.querySelector(".count-timer");
const audioPlayer = document.getElementById("audio-player");
const selectedQuestions = questions.slice(0, 10);
const song1Src = "./music/1-01. Title Theme [CPS-1].mp3";
const song2Src = "./music/05. Ken Stage.mp3";

let currentQuestion;
let score = 10;
let scoreShown = false;
let time = 15;
let timerInterval = null;
let currentQuestionNumber = 0;
let numberQuestionShuffle = 2;
let figureScore = 0;
let myTime;

saveScore.addEventListener("click",viewScores);
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click",nextPage);
mainMenu.addEventListener("click",menuPage);
hallBtn.addEventListener("click", flashScores);
menuBtn.addEventListener("click",backToMenu);

function startQuiz(){
    hallBtn.style.display = "none";
    header.style.display = "none";
    startBtn.style.display = "none";
    presentScore.style.display = "block";
    timePiece.style.display = "block";
    shuffleEl.style.display = "block";
    
    currentQuestion = 0;
    score = 0;
    scoreShown = false;
    currentQuestionNumber = 0;
    myTime = setInterval(countTimer, 1000);

    showQuiz();

    answerButtons.style.display = "block";
    questionMark.style.display = "block";
    presentScore.textContent= `Present Score :${score}`;
    nextBtn.innerHTML = "Next";
    nextBtn.style.backgroundColor = "blue";
    listScore.style.display = "block";

    if (musicBtn.innerText === "Switch background music 1") {
        musicBtn.innerText = "Switch background music 1";
        musicBtn.style.backgroundColor = "#1e90ff";
       
        audioPlayer.src = song1Src;
    } else {
        musicBtn.innerText = "Switch background music 2";
        musicBtn.style.backgroundColor = "pink";
        audioPlayer.src = song2Src;
    }
          audioPlayer.currentTime = 0; 
        audioPlayer.play();

}

function countTimer(){
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

function stopTime(){
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
    time = 15; 
    timePiece.innerHTML = "Time-left :" + time;
     myTime = setInterval(stopTime,1000);
};

function startTimer(){
    time--;
    timePiece.innerHTML = "Time-left :" + time;
}

function showQuiz(){
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
        
    }
};

function pickAnswer(e){
    const choiceBtn = e.target;
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

     clearInterval(myTime);

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    
    scoreFacts();
    nextBtn.style.display = "block";
    
};

function removeSets(){
    nextBtn.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    const wrongEl = document.querySelectorAll(".para-content");
    wrongEl.forEach(element => element.remove());
}

function displayQuestions(){
    const shuffleElement = document.getElementById("shuffle");
    shuffleElement.textContent = `QUESTION ${currentQuestionNumber + 1} of ${questions.length -40} shuffled from 50`;
}

function nextPage(){
    if (currentQuestion < questions.length) {
        currentQuestion++;
        resumeTimer()
        showQuiz();
     
    } else {
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
        const song2Src = new Audio("./music/05. Ken Stage.mp3");
        const song1Src = new Audio("./music/1-01. Title Theme [CPS-1].mp3");
        
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
     menuBtn.style.display = "block";
     menuBtn.style.display = "block";
     headContent.style.display = "block";
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
    
};

function menuPage(){
    listScore.innerHTML = "";
    currentQuestion = 0;
    score = 0;
    time = 15;
    currentQuestionNumber = 0;
    numberQuestionShuffle = 0;
    clearInterval(myTime);
  
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
}

function flashScores(){
    header.style.display = "none";
    startBtn.style.display = "none";
    mainMenu.style.display = "block";
    scoreName .style.display = "block";
    hallBtn.style.display = "none";
    listScore.style.display = "block";
    let pale =JSON.parse(localStorage.getItem("quiz"))
    pale.forEach((items)=>{
        let pill = document.createElement("p")
        pill.classList.add("pass")
        pill.textContent = items
        listScore.appendChild(pill)
       
    })

}

function backToMenu(){
    listScore.innerHTML = "";
    hallFame.style.display = "none";
    scoreName.style.display = "none";
    listScore.style.display = "none"
    header.style.display = "block";
    startBtn.style.display = "block";
    hallBtn.style.display = "block";
    menuBtn.style.display  = "none"
    header.style.color = "blue";
}

function displayTotalScore(){
 if(score < 100 || score > 1 ){
    totalScore.innerHTML = `You Scored: ${score}/100` 
 }

};

function scoreFacts(){
    presentScore.textContent= `Present Score :${score}`
};


 document.addEventListener("DOMContentLoaded", () => {
    const musicBtn = document.getElementById("music-btn");
    const audioPlayer = document.getElementById("audio-player");
    const song1Src = "./music/1-01. Title Theme [CPS-1].mp3";
    const song2Src = "./music/05. Ken Stage.mp3";
    musicBtn.addEventListener("click", () => {
        if (musicBtn.innerText === "Switch background music 1") {
            musicBtn.innerText = "Switch background music 2";
            musicBtn.style.backgroundColor = "pink";
            audioPlayer.src = song2Src;
        } else {
            musicBtn.innerText = "Switch background music 1";
            musicBtn.style.backgroundColor = "#1e90ff";
            audioPlayer.src = song1Src;
        }
              audioPlayer.currentTime = 0; 
            audioPlayer.play();
    });
});






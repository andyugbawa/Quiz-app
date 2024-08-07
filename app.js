import { questions } from "./question.js";

const playBtn = document.getElementById("play-btn");
const hallBtn = document.getElementById("hall-btn");
const header = document.querySelector("#header");
const presentScore = document.getElementById("present-score");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const questionMark = document.getElementById("question-mark");
const quiz = document.querySelector(".startup");
let timePiece = document.getElementById("time-piece");
const shuffleEl = document.getElementById("shuffle");
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
const audioPlayer = document.getElementById("audio-player");
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

playBtn.addEventListener("click", startQuiz);
hallBtn.addEventListener("click", flashScores);
saveScore.addEventListener("click",viewScores);
nextBtn.addEventListener("click",nextPage);
mainMenu.addEventListener("click",menuPage);
menuBtn.addEventListener("click",backToMenu);

function startQuiz(){
    hallBtn.style.display = "none";
    header.style.display = "none";
    playBtn.style.display = "none";
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
    pale.sort((a,b)=>b-a)
    listScore.innerHTML = "";
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
    playBtn.style.display = "block";
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
    hallFame.style.display = "block";
    header.style.display = "none";
    playBtn.style.display = "none";
    menuBtn.style.display = "block";
    scoreName .style.display = "block";
    hallBtn.style.display = "none";
    listScore.style.display = "block";
    let pale =JSON.parse(localStorage.getItem("quiz"));
    let  numPale = pale.split(" ")
    pale.sort((a,b)=>b.number - a.number);
    let figurePale =numPale.map(pales=>{
        let [name,number]=pales.split("-");
        return {name:name, number:parseInt(number,10)}
     });
     let overAllPale = figurePale.map(numPale=> `${numPale.number}-${numPale.name}`).join(" ")
     
   
 
    listScore.innerHTML ="";
    pale.forEach((items)=>{
        let pill = document.createElement("p")
        pill.classList.add("pass")
        pill.textContent = items
        listScore.appendChild(pill)
    })
   
   
    console.log(overAllPale)
   
 
}

function backToMenu(){
    listScore.innerHTML = "";
    hallFame.style.display = "none";
    scoreName.style.display = "none";
    listScore.style.display = "none"
    header.style.display = "block";
    playBtn.style.display = "block";
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
















let fruits = ["paw paw","guava","tomatoe","carrot","watermelon","banana","apple"];

console.log(fruits.sort())
 let numCode = [10, 8, 6, 0, 4, 9, 7, 5, 3, 2, 1];
 let pose = numCode.sort((a,b)=>{
    return b-a
 })
console.log(pose)

// let scorel = ["30-FRED","60-JEFF","70-VERA"];
// scorel.sort((a,b)=>{
//    // Extract the numerical values from the strings
//    let numA = parseInt(a.split('-')[0]);
//    let numB = parseInt(b.split('-')[0]);

//    // Sort in descending order
//    return numB - numA;
// })
// console.log(scorel)

let scoreF = ["30-FRED", "60-JEFF", "70-VERA"];
let number = [];
let names = [];

scoreF.forEach(item => {
    let parts = item.split('-');
    number.push(parseInt(parts[0]));
    names.push(parts[1]);
});

// console.log(numbers); // [30, 60, 70]
// console.log(names);   // ["FRED", "JEFF", "VERA"]


let scorel = ["30","60","70"];
scorel.sort((a,b)=>{
 
})
console.log(scorel)

let poetic = "JOHN-50 GARRY-80 KELLY-60 TANDY-40";
let pairsF = poetic.split(" ");
console.log(pairsF)
let name =[];
let figure =[];


pairsF.forEach(pair=>{
   let  [names, figures]=pair.split("-")
    name.push(names)
    figure.push(figures)
})



console.log("names",name)
console.log("figures",figure)



// Original string
let poet = "JOHN-50 GARRY-80 KELLY-60 TANDY-40";

// Split the string by spaces to get the "name-number" pairs
let pairs = poet.split(" ");

// Convert pairs into an array of objects with name and number properties
let nameNumberPairs = pairs.map(pair => {
    let [name, number] = pair.split("-");
    return { name: name, number: parseInt(number, 10) };
});

// Sort the array of objects by number in descending order
nameNumberPairs.sort((a, b) => b.number - a.number);

// Reconstruct the sorted string
let sortedPoet = nameNumberPairs.map(pair => `${pair.name}-${pair.number}`).join(" ");

console.log("Sorted Poet:", sortedPoet);



let word = "Hello Creative Deveoloper"

let split =word.split(" ");
console.log(split)

let fruitsoil = ["Mango",  "orange", "banana", "paw paw", "kiwi"];

fruitsoil.slice(0,1)
console.log(fruitsoil.slice(0,1))

let cola = "30-COOPER 40-FRED 60-GREG 80-BRAD"
let pull = cola.split(" ")
console.log(pull)

let cole = cola.slice(0,36)
console.log(cole)
// let coled = cola.slice(2,9)
// console.log(coled)
// console.log(cole,coled)

let str = "123";

let num = Number(str)
console.log(num);

// Converting number to a String//

let nameFile = "MANOS&ANDY";
let jug = "button Left";
let cup = "button-left";

let king = nameFile.split("");
console.log(king)

let quick = jug.split(" ")
console.log(quick)

let quick2 = cup.split("-")
console.log(quick2)

let king1 = nameFile.slice(0,5);
let under =nameFile.slice(5,9)
console.log(king1)
console.log(king1,under)
console.log(under)


let dean = 134566;
let nom = String(dean)
console.log(typeof(nom))

let manos = "123";
let ink = parseInt(manos)
console.log(typeof(ink))
let andy = 345;
let boss = String(andy)
console.log(typeof(boss))

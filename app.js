const startingMinutes  = 1;
let time = startingMinutes *60;

const countDownEl = document.getElementById("countdown")

setInterval(updateCountDown,1000)
function updateCountDown(){
   
 const minutes = Math.floor(time / 60);
 let seconds = time % 60;
 countDownEl.innerHTML = `${minutes} ${seconds}`

 seconds = seconds < 1 ? "0" -seconds : seconds

    time--

    if (time < 0) {
        time = startingMinutes * 60; 
    }

    
}

const quiz = document.querySelector(".quiz")
function check(){
    const pContainer = document.createElement("div")
    pContainer.classList.add("count-pull")
    const pTag = document.createElement("p")
    pTag.classList.add("tag")
    pTag.innerText = "Time left: ";
    quiz.appendChild(pTag);
    quiz.append(pContainer)
    pTag.appendChild(countDownEl);
    pContainer.append(pTag)
    pContainer.append(countDownEl) 

}

check()




const questions =[
    {
        question: 'How many bits make  a byte',
        answers:[
            {text:"16 bits", correct:false},
            {text:"8 bits", correct:true},
            {text:"24 bits", correct:false},
            {text:"12 bits", correct:false}
        ]
    },

    {
        question: 'The first search engine on the internet',
        answers:[
            {text:"Archie", correct:true},
            {text:"Google", correct:false},
            {text:"Bing", correct:false},
            {text:"Yahoo", correct:false}
        ]
    },

    {
        question: 'The number of bits used by IPv6 address is',
        answers:[
            {text:"16", correct:false},
            {text:"32", correct:false},
            {text:"64", correct:false},
            {text:"128", correct:true}
        ]
    },


    {
        question: 'The first web browser invented in 1990 was',
        answers:[
            {text:"WorldWideWeb", correct:true},
            {text:"internet Explorer", correct:false},
            {text:"Mosiac", correct:false},
            {text:"Nexus", correct:true}
        ]
    },
]


const questionMark = document.getElementById("question");
const clipButtons = document.getElementById("answer-buttons");
const buttonNext = document.getElementById("next-btn")
const app = document.querySelector(".app")


let currentQuestion = 0;
let score = 0;

function startQuiz(){
    currentQuestion = 0;
    score = 0;
    buttonNext.innerHTML = "Next"
    showQuiz();
}

function showQuiz(){
    removeSets();
    let incrementQuiz = questions[currentQuestion];
    let questionNum = currentQuestion + 1;
    questionMark.innerHTML = questionNum + ". " + incrementQuiz.question;
     
    incrementQuiz.answers.forEach(answer => {
        const button  = document.createElement("button")
        button.innerHTML = answer.text;
        const contButton = document.createElement("div")
        button.classList.add("btn");
        contButton.classList.add("content-button")
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",pickAnswer)
        contButton.append(button)
        clipButtons.appendChild(contButton)
        // clipButtons.appendChild(contButton)
    });
}

function removeSets(){
  buttonNext.style.display = "none";
  while(clipButtons.firstChild){
    clipButtons.removeChild(clipButtons.firstChild)
  }
  const wrongEl = document.querySelectorAll(".para-content");
  wrongEl.forEach(element=>element.remove())
}

function pickAnswer(e){
    const choiceBtn = e.target;
    const par = document.createElement("p")
    par.classList.add("edit")
    const contentPar = document.createElement("div")
    contentPar.classList.add("para-content")
    const letCorrect = choiceBtn.dataset.correct ==="true"
    if(letCorrect){
        choiceBtn.classList.add("correct")
        score++;
    }else{
        par.innerHTML = "Wrong Answer"
    }
    contentPar.append(par)
    quiz.appendChild(contentPar)

    Array.from(clipButtons.children).forEach(button=>{
        if(button.dataset.correct === 'true'){
            button.classList.add("button")
        }
        button.disabled = "true";
    })
    buttonNext.style.display = "block";
}

 function listQuestion(){
    if(!scoreShown){
        currentQuestion++;
        if(currentQuestion < questions.length){
            showQuiz()
        
        }else{
            displayScore()
    }
    }
 }

 let scoreShown = false;



 function displayScore(){
    removeSets();
    questionMark.innerHTML = `You score is ${score} over ${questions.length}`;
    buttonNext.innerHTML = "Next";
    buttonNext.style.display = "block";
    scoreShown = true;
   

 }

buttonNext.addEventListener("click",()=>{
    
    if(currentQuestion < questions.length){
        listQuestion();
    }else{
        if(scoreShown){
            hallFame()
        }else{
            startQuiz()

        }
    }

   
})


function hallFame(){
    removeSets()
    questionMark.innerHTML = "Hall of Fame" 
    buttonNext.style.display ="block"
    buttonNext.innerHTML ="Next"
}



startQuiz();

// const startButton = document.querySelector("#start-btn")

function mystart(){
    window.location.href = "index2.html"
   
}
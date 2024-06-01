const questions = [
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
            {text:"Nexus", correct:false}
        ]
    },
];

export{questions}








// import { questions } from "./script.js";
// console.log(questions)

// startBtn.addEventListener("click", startQuiz);

// function startQuiz() {

//     // console.log("startQuiz function called");
//     hallBtn.style.display = "none";
//     header.style.display = "none";
//     startBtn.style.display = "none";
//     presentScore.style.display = "block";
//     nameQuiz();
//     displayScore();
//     // removeSets();
//     // showQuiz();
//     // listQuestion();
//     // pickAnswer();
// }



// let currentQuestion = 0;
// let score = 0;

// function nameQuiz() {
//     // console.log("nameQuiz function called");
//     currentQuestion = 0;
//     score = 0;
//     scoreShown = false;
//     buttonNext.innerHTML = "Next";
//     showQuiz();
// }




// function showQuiz() {
//     removeSets();
//     let incrementQuiz = questions[currentQuestion];
//     let questionNum = currentQuestion + 1;
//     questionMark.innerHTML = questionNum + ". " + incrementQuiz.question;

//     incrementQuiz.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         if (answer.correct) {
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", pickAnswer);
//         clipButtons.appendChild(button);
//     });
// }





// function removeSets() {
//     buttonNext.style.display = "none";
//     while (clipButtons.firstChild) {
//         clipButtons.removeChild(clipButtons.firstChild);
//     }
//     const wrongEl = document.querySelectorAll(".para-content");
//     wrongEl.forEach(element => element.remove());
// }

// function pickAnswer(e) {
//     const choiceBtn = e.target;
//     const par = document.createElement("p");
//     par.classList.add("edit");
//     const contentPar = document.createElement("div");
//     contentPar.classList.add("para-content");
//     const letCorrect = choiceBtn.dataset.correct === "true";
//     if (letCorrect) {
//         choiceBtn.classList.add("correct");
//         score++;
//     }else {
//         choiceBtn.classList.add("incorrect")
//         par.innerHTML = "Wrong Answer";
//         contentPar.append(par);
//         quiz.appendChild(contentPar);
//     }
        
//     Array.from(clipButtons.children).forEach(button => {
//         if (button.dataset.correct === "true") {
//             button.classList.add("correct");
//         }
//         button.disabled = true; // Correct way to disable a button
//     });
//     buttonNext.style.display = "block";
// }



// buttonNext.addEventListener("click", () => {
//     if (currentQuestion < questions.length) {
//         currentQuestion++;
//         showQuiz();
        
    
//     }else{
//         listQuestion();
//         hallFame();
//         displayScore()
//         startQuiz();
//     }

//     //     listQuestion();
//     // } else {
//     //     if (scoreShown) {
//     //         hallFame();
//     //     } else {
//     //         startQuiz();
//     //     }
// });

// function listQuestion() {
//     if (!scoreShown) {
//         currentQuestion++;
//         if (currentQuestion < questions.length) {
//             showQuiz();
//         } else {
//             displayScore();
//         }
//     }
// }

// let scoreShown = false;

// function displayScore() {
//     removeSets();
//     questionMark.innerHTML = `Your score is ${score} out of ${questions.length}`;
//     buttonNext.innerHTML = "Next";
//     buttonNext.style.display = "block";
//     scoreShown = true;
// }
// // startQuiz()









































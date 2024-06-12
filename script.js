// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }



// shuffleArray(questions);


// questions.forEach(question => {
//     shuffleArray(question.answers);
// });


// function displayQuestions() {
//     questions.forEach((question, index) => {
//         console.log(`${index + 1}. ${question.question}`);
//         question.answers.forEach(answer => {
//             // console.log(`   - ${answer.text} (Correct: ${answer.correct})`);
//         });
//     });
// }


// displayQuestions();








// // function showQuiz() {
// //     // Increment the current question number
// //     currentQuestionNumber++;
// //     // Display the current question number
// //     displayQuestionNumber();

// //     // Remove previous question and answers...
// // }

// // Update the startQuiz function to display the first question number
// // function startQuiz() {
// //     // Reset current question number
// //     currentQuestionNumber = 0;
// //     // Display the first question number
// //     displayQuestionNumber();
// //     // Rest of the code...
// // }

// // Call the startQuiz function to initially display the first question number
// // startQuiz();








// // import { questions } from "./script.js";
// // console.log(questions)

// // startBtn.addEventListener("click", startQuiz);

// // function startQuiz() {

// //     // console.log("startQuiz function called");
// //     hallBtn.style.display = "none";
// //     header.style.display = "none";
// //     startBtn.style.display = "none";
// //     presentScore.style.display = "block";
// //     nameQuiz();
// //     displayScore();
// //     // removeSets();
// //     // showQuiz();
// //     // listQuestion();
// //     // pickAnswer();
// // }



// // let currentQuestion = 0;
// // let score = 0;

// // function nameQuiz() {
// //     // console.log("nameQuiz function called");
// //     currentQuestion = 0;
// //     score = 0;
// //     scoreShown = false;
// //     buttonNext.innerHTML = "Next";
// //     showQuiz();
// // }




// // function showQuiz() {
// //     removeSets();
// //     let incrementQuiz = questions[currentQuestion];
// //     let questionNum = currentQuestion + 1;
// //     questionMark.innerHTML = questionNum + ". " + incrementQuiz.question;

// //     incrementQuiz.answers.forEach(answer => {
// //         const button = document.createElement("button");
// //         button.innerHTML = answer.text;
// //         button.classList.add("btn");
// //         if (answer.correct) {
// //             button.dataset.correct = answer.correct;
// //         }
// //         button.addEventListener("click", pickAnswer);
// //         clipButtons.appendChild(button);
// //     });
// // }





// // function removeSets() {
// //     buttonNext.style.display = "none";
// //     while (clipButtons.firstChild) {
// //         clipButtons.removeChild(clipButtons.firstChild);
// //     }
// //     const wrongEl = document.querySelectorAll(".para-content");
// //     wrongEl.forEach(element => element.remove());
// // }

// // function pickAnswer(e) {
// //     const choiceBtn = e.target;
// //     const par = document.createElement("p");
// //     par.classList.add("edit");
// //     const contentPar = document.createElement("div");
// //     contentPar.classList.add("para-content");
// //     const letCorrect = choiceBtn.dataset.correct === "true";
// //     if (letCorrect) {
// //         choiceBtn.classList.add("correct");
// //         score++;
// //     }else {
// //         choiceBtn.classList.add("incorrect")
// //         par.innerHTML = "Wrong Answer";
// //         contentPar.append(par);
// //         quiz.appendChild(contentPar);
// //     }
        
// //     Array.from(clipButtons.children).forEach(button => {
// //         if (button.dataset.correct === "true") {
// //             button.classList.add("correct");
// //         }
// //         button.disabled = true; // Correct way to disable a button
// //     });
// //     buttonNext.style.display = "block";
// // }



// // buttonNext.addEventListener("click", () => {
// //     if (currentQuestion < questions.length) {
// //         currentQuestion++;
// //         showQuiz();
        
    
// //     }else{
// //         listQuestion();
// //         hallFame();
// //         displayScore()
// //         startQuiz();
// //     }

// //     //     listQuestion();
// //     // } else {
// //     //     if (scoreShown) {
// //     //         hallFame();
// //     //     } else {
// //     //         startQuiz();
// //     //     }
// // });

// // function listQuestion() {
// //     if (!scoreShown) {
// //         currentQuestion++;
// //         if (currentQuestion < questions.length) {
// //             showQuiz();
// //         } else {
// //             displayScore();
// //         }
// //     }
// // }

// // let scoreShown = false;

// // function displayScore() {
// //     removeSets();
// //     questionMark.innerHTML = `Your score is ${score} out of ${questions.length}`;
// //     buttonNext.innerHTML = "Next";
// //     buttonNext.style.display = "block";
// //     scoreShown = true;
// // }
// // // startQuiz()







// // Timer functions FROM CHATGPT!
// function startTimer() {
//     time = 15; // Reset time
//     timePiece.innerHTML = "Time-left :" + time;

//     if (timerInterval) {
//         clearInterval(timerInterval); // Clear any existing interval
//     }

//     timerInterval = setInterval(timeWatch, 1000);
// }

// function timeWatch() {
//     time--;
//     if (time === 0) {
//         timePiece.innerHTML = "Time-left :" + time;
//         clearInterval(timerInterval);
//         timePiece.innerHTML = "Oops Times Up";
//     } else {
//         // Move to next question or show score
//         currentQuestion++;
//         showQuiz();
//     }
// }









































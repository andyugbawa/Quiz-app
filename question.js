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

    {
        question: 'What does CPU stand for?',
        answers: [
            { text: "Central Process Unit", correct: false },
            { text: "Central Processing Unit", correct: true },
            { text: "Central Processing Utility", correct: false },
            { text: "Central Processor Unit", correct: false }
        ]
    },
    {
        question: 'What is the main function of the ALU in a computer?',
        answers: [
            { text: "Store data", correct: false },
            { text: "Perform arithmetic and logic operations", correct: true },
            { text: "Manage memory", correct: false },
            { text: "Control input/output operations", correct: false }
        ]
    },
    {
        question: 'Which programming language is known as the language of the web?',
        answers: [
            { text: "Python", correct: false },
            { text: "Java", correct: false },
            { text: "C++", correct: false },
            { text: "JavaScript", correct: true }
        ]
    },
    {
        question: 'In which year was the Python programming language first released?',
        answers: [
            { text: "1991", correct: true },
            { text: "1989", correct: false },
            { text: "2000", correct: false },
            { text: "1995", correct: false }
        ]
    },
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HyperText Machine Language", correct: false },
            { text: "HyperText and links Markup Language", correct: false },
            { text: "HyperTool Multi Language", correct: false }
        ]
    },
    {
        question: 'Which company developed the Windows operating system?',
        answers: [
            { text: "Apple", correct: false },
            { text: "IBM", correct: false },
            { text: "Microsoft", correct: true },
            { text: "Google", correct: false }
        ]
    },
    {
        question: 'What does RAM stand for?',
        answers: [
            { text: "Random Access Memory", correct: true },
            { text: "Read Access Memory", correct: false },
            { text: "Run Access Memory", correct: false },
            { text: "Readily Available Memory", correct: false }
        ]
    },
    {
        question: 'What is the name of the first high-level programming language?',
        answers: [
            { text: "FORTRAN", correct: true },
            { text: "COBOL", correct: false },
            { text: "C", correct: false },
            { text: "BASIC", correct: false }
        ]
    },
    {
        question: 'What is the purpose of an operating system?',
        answers: [
            { text: "To perform arithmetic operations", correct: false },
            { text: "To manage hardware and software resources", correct: true },
            { text: "To create software", correct: false },
            { text: "To connect to the internet", correct: false }
        ]
    },
    {
        question: 'Which protocol is used to send emails?',
        answers: [
            { text: "HTTP", correct: false },
            { text: "FTP", correct: false },
            { text: "SMTP", correct: true },
            { text: "IMAP", correct: false }
        ]
    },
    {
        question: 'What is the main purpose of a firewall in a computer network?',
        answers: [
            { text: "To perform backups", correct: false },
            { text: "To prevent unauthorized access", correct: true },
            { text: "To manage passwords", correct: false },
            { text: "To provide internet access", correct: false }
        ]
    },
    {
        question: 'What does GUI stand for?',
        answers: [
            { text: "Graphical User Interface", correct: true },
            { text: "Graphical Unified Interface", correct: false },
            { text: "General User Interface", correct: false },
            { text: "Graphical User Interaction", correct: false }
        ]
    },
    {
        question: 'Which database management system is developed by Oracle?',
        answers: [
            { text: "MySQL", correct: true },
            { text: "PostgreSQL", correct: false },
            { text: "SQLite", correct: false },
            { text: "MongoDB", correct: false }
        ]
    },
    {
        question: 'What is a function in programming?',
        answers: [
            { text: "A block of code designed to perform a particular task", correct: true },
            { text: "A variable that holds a value", correct: false },
            { text: "A type of loop", correct: false },
            { text: "A data structure", correct: false }
        ]
    },
    {
        question: 'Which of the following is not an operating system?',
        answers: [
            { text: "Linux", correct: false },
            { text: "Windows", correct: false },
            { text: "MacOS", correct: false },
            { text: "Python", correct: true }
        ]
    },
    {
        question: 'What is the main use of CSS in web development?',
        answers: [
            { text: "To structure the web page", correct: false },
            { text: "To add interactivity to the web page", correct: false },
            { text: "To style the web page", correct: true },
            { text: "To manage databases", correct: false }
        ]
    },
    {
        question: 'Which language is primarily used for Android app development?',
        answers: [
            { text: "Swift", correct: false },
            { text: "Java", correct: true },
            { text: "Kotlin", correct:false },
            { text: "C#", correct: false }
        ]
    },
    {
        question: 'What does SQL stand for?',
        answers: [
            { text: "Structured Query Language", correct: true },
            { text: "Structured Question Language", correct: false },
            { text: "Simple Query Language", correct: false },
            { text: "Sequential Query Language", correct: false }
        ]
    },
    {
        question: 'What is the purpose of version control systems like Git?',
        answers: [
            { text: "To track changes in source code during software development", correct: true },
            { text: "To compile code", correct: false },
            { text: "To manage databases", correct: false },
            { text: "To create network connections", correct: false }
        ]
    },
    {
        question: 'Which command is used to create a new directory in a Unix-like operating system?',
        answers: [
            { text: "rmdir", correct: false },
            { text: "cd", correct: false },
            { text: "mkdir", correct: true },
            { text: "ls", correct: false }
        ]
    },
    {
        question: 'What is the default port number for HTTP?',
        answers: [
            { text: "21", correct: false },
            { text: "80", correct: true },
            { text: "443", correct: false },
            { text: "8080", correct: false }
        ]
    },
    {
        question: 'Which company developed the C programming language?',
        answers: [
            { text: "Microsoft", correct: false },
            { text: "IBM", correct: false },
            { text: "Bell Labs", correct: true },
            { text: "Apple", correct: false }
        ]
    },
    {
        question: 'What does API stand for?',
        answers: [
            { text: "Application Program Interface", correct: false },
            { text: "Application Programming Interface", correct: true },
            { text: "Advanced Programming Interface", correct: false },
            { text: "Application Programming Interaction", correct: false }
        ]
    },
    {
        question: 'Which data structure uses LIFO (Last In First Out) principle?',
        answers: [
            { text: "Queue", correct: false },
            { text: "Stack", correct: true },
            { text: "Array", correct: false },
            { text: "Linked List", correct: false }
        ]
    },
    {
        question: 'What does DOM stand for in web development?',
        answers: [
            { text: "Document Object Model", correct: true },
            { text: "Data Object Model", correct: false },
            { text: "Document Order Model", correct: false },
            { text: "Data Order Model", correct: false }
        ]
    },
    {
        question: 'Which sorting algorithm has the best average-case time complexity?',
        answers: [
            { text: "Bubble Sort", correct: false },
            { text: "Merge Sort", correct: true },
            { text: "Insertion Sort", correct: false },
            { text: "Selection Sort", correct: false }
        ]
    },
    {
        question: 'What is the main purpose of a constructor in a class?',
        answers: [
            { text: "To define methods", correct: false },
            { text: "To initialize objects", correct: true },
            { text: "To create classes", correct: false },
            { text: "To handle errors", correct: false }
        ]
    },
    {
        question: 'Which keyword is used to define a constant in JavaScript?',
        answers: [
            { text: "let", correct: false },
            { text: "var", correct: false },
            { text: "const", correct: true },
            { text: "constant", correct: false }
        ]
    },
    {
        question: 'What is the time complexity of binary search?',
        answers: [
            { text: "O(n)", correct: false },
            { text: "O(log n)", correct: true },
            { text: "O(n log n)", correct: false },
            { text: "O(1)", correct: false }
        ]
    },
    {
        question: 'What is the name of the package manager for Node.js?',
        answers: [
            { text: "pip", correct: false },
            { text: "npm", correct: true },
            { text: "gem", correct: false },
            { text: "composer", correct: false }
        ]
    },
    {
        question: 'Which HTTP method is used to retrieve data from a server?',
        answers: [
            { text: "POST", correct: false },
            { text: "GET", correct: true },
            { text: "PUT", correct: false },
            { text: "DELETE", correct: false }
        ]
    },
    {
        question: 'What is the purpose of the try-catch block in programming?',
        answers: [
            { text: "To define functions", correct: false },
            { text: "To handle exceptions", correct: true },
            { text: "To create loops", correct: false },
            { text: "To declare variables", correct: false }
        ]
    },
    {
        question: 'What is the main difference between HTTP and HTTPS?',
        answers: [
            { text: "HTTP is faster", correct: false },
            { text: "HTTPS is secure", correct: true },
            { text: "HTTP is used for emails", correct: false },
            { text: "HTTPS is used for file transfers", correct: false }
        ]
    },
    {
        question: 'Which data structure is used to implement a priority queue?',
        answers: [
            { text: "Stack", correct: false },
            { text: "Heap", correct: true },
            { text: "Queue", correct: false },
            { text: "Array", correct: false }
        ]
    },
    {
        question: 'What is the purpose of a DNS in networking?',
        answers: [
            { text: "To transfer files", correct: false },
            { text: "To translate domain names to IP addresses", correct: true },
            { text: "To manage email accounts", correct: false },
            { text: "To encrypt data", correct: false }
        ]
    },
    {
        question: 'What is the main advantage of using the MVC (Model-View-Controller) architecture?',
        answers: [
            { text: "It increases performance", correct: false },
            { text: "It separates concerns", correct: true },
            { text: "It reduces code size", correct: false },
            { text: "It simplifies database management", correct: false }
        ]
    },
    {
        question: 'What does the term "responsive design" refer to in web development?',
        answers: [
            { text: "Design that responds to user input quickly", correct: false },
            { text: "Design that adjusts to different screen sizes", correct: true },
            { text: "Design that uses responsive frameworks", correct: false },
            { text: "Design that is aesthetically pleasing", correct: false }
        ]
    },
    {
        question: 'Which of the following is a NoSQL database?',
        answers: [
            { text: "MySQL", correct: false },
            { text: "PostgreSQL", correct: false },
            { text: "MongoDB", correct: true },
            { text: "Oracle", correct: false }
        ]
    },
    {
        question: 'What does the acronym CRUD stand for in database operations?',
        answers: [
            { text: "Create, Read, Update, Delete", correct: true },
            { text: "Create, Retrieve, Update, Delete", correct: false },
            { text: "Create, Read, Upload, Delete", correct: false },
            { text: "Create, Retrieve, Upload, Delete", correct: false }
        ]
    },
    {
        question: 'What is a foreign key in a database?',
        answers: [
            { text: "A key that uniquely identifies a record", correct: false },
            { text: "A key that links two tables together", correct: true },
            { text: "A key that represents a password", correct: false },
            { text: "A key that is not used", correct: false }
        ]
    },

    {
        question: 'What is the main function of the operating system kernel?',
        answers: [
            { text: "To manage hardware resources", correct: true },
            { text: "To display the user interface", correct: false },
            { text: "To run user applications", correct: false },
            { text: "To compile programs", correct: false }
        ]
    },
    {
        question: 'Which type of software is used for managing business processes?',
        answers: [
            { text: "System software", correct: false },
            { text: "Application software", correct: true },
            { text: "Middleware", correct: false },
            { text: "Utility software", correct: false }
        ]
    },
    {
        question: 'What is an IDE in software development?',
        answers: [
            { text: "Integrated Development Environment", correct: true },
            { text: "Internal Development Environment", correct: false },
            { text: "Interactive Development Environment", correct: false },
            { text: "Internet Development Environment", correct: false }
        ]
    },
    {
        question: 'Which language is known for its use in artificial intelligence?',
        answers: [
            { text: "Java", correct: false },
            { text: "C++", correct: false },
            { text: "Python", correct: true },
            { text: "HTML", correct: false }
        ]
    },
    {
        question: 'What is the main purpose of a virtual machine?',
        answers: [
            { text: "To store large amounts of data", correct: false },
            { text: "To run multiple operating systems on one physical machine", correct: true },
            { text: "To connect to the internet", correct: false },
            { text: "To compile source code", correct: false }
        ]
    },
    {
        question: 'What is the primary use of an IP address?',
        answers: [
            { text: "To identify a device on a network", correct: true },
            { text: "To encrypt data", correct: false },
            { text: "To store data", correct: false },
            { text: "To create web pages", correct: false }
        ]
    },
    
];

export{questions};




function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(questions);


const selectedQuestions = questions.slice(0, 10);


selectedQuestions.forEach(question => {
    shuffleArray(question.answers);
});


function displaySelectedQuestions() {
    selectedQuestions.forEach((question, index) => {
        // console.log(`${index + 1}. ${question.question}`);
        question.answers.forEach(answer => {
            // console.log(`   - ${answer.text} (Correct: ${answer.correct})`);
        });
    });
}


displaySelectedQuestions();


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


// function displayQuestionNumber() {
//     questions.forEach((question, index) => {
//         console.log(`${index + 1}. ${question.question}`);
//         question.answers.forEach(answer => {
//             console.log(`   - ${answer.text} (Correct: ${answer.correct})`);
//         });
//     });
// }


// displayQuestionNumber();

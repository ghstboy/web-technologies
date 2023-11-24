const questions = [
    {
        question: "How many grammys does Kanye have ?",
        optionA: "10 ",
        optionB: "14 ",
        optionC: "55 ",
        optionD: "24 ",
        correctOption: "optionD"
    },

    {
        question: "Who is Brad Pitt ?",
        optionA: "a football player ",
        optionB: "An actor ",
        optionC: "a basketball player ",
        optionD: "A film director ",
        correctOption: "optionB"
    },

    {
        question: "Which company colloborated with Travis Scott ?",
        optionA: "Vans",
        optionB: "Puma",
        optionC: "Adidas",
        optionD: "Jordan",
        correctOption: "optionD"
    },

    {
        question: "What Hollywood actress is Tom Holland reportedly dating ?",
        optionA: "Jennifer Lawrence",
        optionB: "Kim Kardashian",
        optionC: "Zendaya",
        optionD: "Clairo",
        correctOption: "optionC"
    },

    {
        question: "Who is the artist that was the youngest winner of the four main Grammy categories ?",
        optionA: "Tyler the creator",
        optionB: "Kendrick Lamar",
        optionC: "Taylor Swift",
        optionD: "Billie Eilish",
        correctOption: "optionD"
    },

    {
        question: "What Hollywood actor has starred in the Creed movies and Black Panther ?",
        optionA: "Michael B Jordan",
        optionB: "Kevin Hart",
        optionC: "Tom Cruise",
        optionD: "Childish Gambino",
        correctOption: "optionA"
    },

    {
        question: "Who is the lead singer of Nirvana ?",
        optionA: "Billie Joe Armstrong",
        optionB: "Anthony Kiedis",
        optionC: "Kurt Cobain",
        optionD: "Thom Yorke",
        correctOption: "optionC"
    },

    {
        question: "Which actor played Han Solo in the original Star Wars trilogy ?",
        optionA: "Harrison Ford",
        optionB: "Mark Hamill",
        optionC: "George Lucas",
        optionD: "Sylvester Stallone",
        correctOption: "optionA"
    },

    {
        question: "Who is known as the King of Pop ?",
        optionA: "Elvis Presley",
        optionB: "David Bowie",
        optionC: "Freddie Mercury",
        optionD: "Michael Jackson",
        correctOption: "optionD"
    },

    {
        question: `"Who is the best teacher in AITU ?`,
        optionA: "Samat teacher",
        optionB: "Aidye teacher",
        optionC: "Askar teacher",
        optionD: "Alisher teacher",
        correctOption: "optionD"
    }

    

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0 


function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
           
            correctOption = option.labels[0].id
        }
    })

   
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ 
            indexNumber++
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}




function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()
    
    setTimeout(() => {
        if (indexNumber <= 9) {

            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null

    
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}


function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}


function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
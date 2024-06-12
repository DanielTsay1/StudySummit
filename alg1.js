const questions = [
    {
        question: "Solve the equation for x.x/3 = (2x + 3)/7",
        optionA: "3",
        optionB: "2",
        optionC: "3",
        optionD: "9",
        correctOption: "optionD"
       
    },

    {
        question: "Solve the equation for y. 3(2y + 4) = 8y",
        optionA: "-8",
        optionB: "-2",
        optionC: "6",
        optionD: "5",
        correctOption: "optionC"
    },

    {
        question: "If 3x + 8x + 4x = 6x + 63, then what is 5x + 23?",
        optionA: "58",
        optionB: "35",
        optionC: "28",
        optionD: "62",
        correctOption: "optionA"
    },

    {
        question: "What is the reciprocal of -3?",
        optionA: "undefined",
        optionB: "-3",
        optionC: "3",
        optionD: "-1/3",
        correctOption: "optionD"
    },

    {
        question: "Solve the equation for x.13 – 2(2x + 1) = 1",
        optionA: "-7/2",
        optionB: "9/4",
        optionC: "5/2",
        optionD: "2/3",
        correctOption: "optionC"
    },

    {
        question: "solve for x: x+5=3x−1",
        optionA: "4",
        optionB: "1",
        optionC: "2",
        optionD: "3",
        correctOption: "optionD"
    },

    {
        question: "Solve the inequality: -20 < 4 - 2x",
        optionA: "8 > x",
        optionB: "8 < x",
        optionC: "12 > x",
        optionD: "12 < x",
        correctOption: "optionC"
    },

    {
        question: "Value of x if f(x) = 31: f(x) = 5x -4",
        optionA: "7",
        optionB: "27/5",
        optionC: "151",
        optionD: "-7",
        correctOption: "optionA"
    },

    {
        question: "Which of the following is a solution set to x [ 2 ]  - 12 = 5x + 2?",
        optionA: "2,7",
        optionB: "-2.7",
        optionC: "-7,2",
        optionD: "-2,-7",
        correctOption: "optionB"
    },

    {
        question: `"Solve for y in 2y + 5 = - 3y - 10.`,
        optionA: "y = -3",
        optionB: "y = 3",
        optionC: "y = - 1",
        optionD: "y = 1",
        correctOption: "optionA"
    },

    {
        question: "Solve for x in 3x + 2≤ - x - 2.",
        optionA: "x≤ - 1",
        optionB: "x≥ - 1",
        optionC: "x≥ - 2",
        optionD: "x≤ 0",
        correctOption: "optionA"
    },

    {
        question: "Compute 3×| 4 - 5|×| 15| - | - 2|.",
        optionA: "-47",
        optionB: "-43",
        optionC: "43",
        optionD: "47",
        correctOption: "optionC"
    },


    {
        question: "How many permanent teeth does a dog have ?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },

    {
        question: "Solve for y in 6 - | - 3y + 1| = 8.",
        optionA: "y = - 1",
        optionB: "y = 1",
        optionC: "y = - 2",
        optionD: "There are no solutions.",
        correctOption: "optionD"
    },

    {
        question: "Which of the following ordered pairs (x, y) is a solution to xy = 3x - 9?",
        optionA: "(6, 1.5)",
        optionB: "(1.5, 6)",
        optionC: "(3, 3)",
        optionD: "(0, - 9)",
        correctOption: "optionA"
    },

    // {
    //     question: "How man states does Nigeria have ?",
    //     optionA: "24",
    //     optionB: "30",
    //     optionC: "36",
    //     optionD: "37",
    //     correctOption: "optionC"
    // },

    // {
    //     question: "____ is the capital of Nigeria ?",
    //     optionA: "Abuja",
    //     optionB: "Lagos",
    //     optionC: "Calabar",
    //     optionD: "Kano",
    //     correctOption: "optionA"
    // },

    // {
    //     question: "Los Angeles is also known as ?",
    //     optionA: "Angels City",
    //     optionB: "Shining city",
    //     optionC: "City of Angels",
    //     optionD: "Lost Angels",
    //     correctOption: "optionC"
    // },

    // {
    //     question: "What is the capital of Germany ?",
    //     optionA: "Georgia",
    //     optionB: "Missouri",
    //     optionC: "Oklahoma",
    //     optionD: "Berlin",
    //     correctOption: "optionD"
    // },

    // {
    //     question: "How many sides does an hexagon have ?",
    //     optionA: "Six",
    //     optionB: "Sevene",
    //     optionC: "Four",
    //     optionD: "Five",
    //     correctOption: "optionA"
    // },

    // {
    //     question: "How many planets are currently in the solar system ?",
    //     optionA: "Eleven",
    //     optionB: "Seven",
    //     optionC: "Nine",
    //     optionD: "Eight",
    //     correctOption: "optionD"
    // },

    // {
    //     question: "Which Planet is the hottest ?",
    //     optionA: "Jupitar",
    //     optionB: "Mercury",
    //     optionC: "Earth",
    //     optionD: "Venus",
    //     correctOption: "optionB"
    // },

    // {
    //     question: "where is the smallest bone in human body located?",
    //     optionA: "Toes",
    //     optionB: "Ears",
    //     optionC: "Fingers",
    //     optionD: "Nose",
    //     correctOption: "optionB"
    // },

    // {
    //     question: "How many hearts does an Octopus have ?",
    //     optionA: "One",
    //     optionB: "Two",
    //     optionC: "Three",
    //     optionD: "Four",
    //     correctOption: "optionC"
    // },

    // {
    //     question: "How many teeth does an adult human have ?",
    //     optionA: "28",
    //     optionB: "30",
    //     optionC: "32",
    //     optionD: "36",
    //     correctOption: "optionC"
    // }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 4) {
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

// function for displaying next question in the array to dom
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
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
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
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 4) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
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

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
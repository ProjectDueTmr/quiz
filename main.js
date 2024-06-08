const startButton = document.getElementById('startBtn')
const questionContainerElement = document.getElementById('questionContainer')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answerButtons')


let shuffleQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)


function startGame(){
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion() {
 showQuestion(shuffleQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
        ]
    }
]
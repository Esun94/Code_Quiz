var startBtn = document.getElementById('start-btn');
var startEl = document.getElementById('start');
var quizEl = document.getElementById('quiz');
var rightAnsBtn = document.getElementById('')
var myQuestion;
var questions = [
    {
        question: 'What does HTML stand for? ',
        multi: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
        answer: 'Hyper Text Markup Language'
    },
    {
        question: 'Who is making the Web standards?',
        multi: ['Google', 'The World Wide Web Consortium', 'Mozilla', 'Microsoft'],
        answer: 'The World Wide Web Consortium'
    },
    {
        question: 'Choose the correct HTML element for the largest heading?',
        multi: ['<heading>', '<head>', '<h1>', '<h6>'],
        answer: '<h1>'
    },
    {
        question: 'What is the correct html heading for a line-break?',
        multi: ['<hr>', '<p>', '<br>', '<div>'],
        answer: '<br>'
    }
]
var q = 0
function buildQuiz() {
   myQuestion = questions[q];
    var questionEl = document.getElementById('question');
    var btnBox = document.getElementById('btn-box');
    btnBox.innerHTML = ''
    questionEl.textContent = myQuestion.question;
    myQuestion.multi.forEach(function (answer) {
        var multiBtn = document.createElement('button');
        multiBtn.textContent = answer;
        multiBtn.onclick = checkAnswer
        multiBtn.setAttribute('value', answer)
        btnBox.appendChild(multiBtn);
    })
}

function checkAnswer() {
    console.log(this.value);
    if(this.value !== myQuestion.answer) {
        
        console.log('wrong')
    }
q++;
buildQuiz();
}


startBtn.addEventListener('click', function () {
    startEl.classList.add('hide')
    quizEl.classList.remove('hide')
    buildQuiz();
    
})
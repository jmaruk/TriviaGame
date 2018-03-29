var questions = [
    {
        question: "1.) Where does Lorelei and Rory live?",
        answers: ["Hartford", "Stars Hollow", "Los Angeles"],
        correct: 1
    },
    {
        question: "2.) Where did Rory go to College?",
        answers: ["Harvard", "Yale", "Princeton"],
        correct: 1
    },
    {
        question: "3.) Who was Rory's first kiss?",
        answers: ["Jess", "Logan", "Dean"],
        correct: 2
    },
    {
        question: "4.) Who proposed to Rory?",
        answers: ["Dean", "Jess", "Logan"],
        correct: 2
    },
    {
        question: "5.) Who did Lorelei marry in Paris?",
        answers: ["Luke", "Max", "Christoper"],
        correct: 2
    },
    {
        question: "6.) What was Rory's dream job?",
        answers: ["Writer", "Lawyer", "Doctor"],
        correct: 0
    }
];

var timer = $('#timer');
var playerAnswerChoices;
var score = 0;
var board = $('#board');
var counter = 0;

function playGame() {
  console.log("hi");
  setUpBoard();
  
}

setInterval("timer()", 1000)
function timer() {
    timer++;
    $('timer').text(counter);
}

function setUpBoard() {
  clearStartButton();
  for(var i = 0; i < questions.length; i++) {
    displayQuestion(questions[i], i);
  }
  makeSubmitButton();
}

function clearStartButton() {
  board.empty();
}

function makeSubmitButton() {
  var submitBtn = $('<button>').text("Submit");


  submitBtn.on('click', function() {
    scoreGame();
  });

  board.append(submitBtn);
}

function scoreGame() {
  var answerElements = $('input:checked');
  var answerChoices = [];

  for(var i = 0; i < answerElements.length; i++) {
    answerChoices.push(answerElements[i].value);
  }

  for(var i = 0; i < answerElements.length; i++) {
    if(questions[i].answers[questions[i].correct] === answerChoices[i]) {
      score++;
    }
  }

  board.empty();
  board.text("You got " + score + " questions right!");
}

function displayQuestion(question, questionNum) {
  var questionBox = $('<div>');
  var questionStem = $('<p>').text(question.question);
  questionBox.append(questionStem);
  var answerChoices = question.answers;

  var answerBox = $('<div>');

  for(var i = 0; i < answerChoices.length; i++) {
    var answerButton = $('<input>' + answerChoices[i]+ '</input>');
    answerButton.attr({
      type: 'radio',
      name: questionNum,
      value: answerChoices[i],
    });

    answerBox.append(answerButton);
  }

  questionBox.append(answerBox);
  board.append(questionBox);

}

function makeAnswerRadioButtons() {

}

function makeStartButton() {
  var startBtn = $('<button>').text("Start");

  startBtn.on('click', function() {
    playGame();
  });

  board.append(startBtn);
}

makeStartButton();

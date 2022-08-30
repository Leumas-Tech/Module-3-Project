//Question.js

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  
  Question.prototype.correctAnswer = function (choice) {
    return choice === this.answer;
  };
  
  //Quiz_controller.js
  function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  
  Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
  };
  
  Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
  };
  
  Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
  
    this.questionIndex++;
  };
  
  //App.js
  function populate() {
    if (quiz.isEnded()) {
      showScores();
    } else {
      //show question
      let element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;
  
      // show choices
      var choices = quiz.getQuestionIndex().choices;
      for (var i = 0; i < choices.length; i++) {
        let element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
        guess("btn" + i, choices[i]);
      }
  
      showProgress();
    }
  }
  
  function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
      quiz.guess(guess);
      populate();
    };
  }
  

  
  function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your Sick Meter: " + quiz.score + "</h2>";

    if(quiz.score === questions.length){
        gameOverHtml+=`<div class="result">
        <h3>You are possibly terminally sick</h3>
        <p>Please navigate to the nearest hospital page <a href="..//2.html/searchNearestHospital.html">here</a></p>
    </div>`;
    }
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
  }
  
  var questions = [
    new Question("Ive been trying to reach you about your cars extended warranty. Is now a good time?",
    ["Yes", "also yes","si senior","No"],
    "No"
    ),
    new Question(
      "Roughly estimate how would you rate your body temperature?",
      ["94-97*F", "98.6 Normal", "98.6-100*F", "100+*F"],
      "100+*F"
    ),

    new Question(
      "Are you naueseous?",
      ["Yes", "No","Beep Beep Lettuce","Yes,but its because i drank epicac or whatver"],
      "Yes"
    ),
    new Question(
      "Is will the handsomest developer to ever exist?",
      ["The handsomest <3", "If i could rearrange the alphabet, id put Will and I together.", "aww yeaa, i wish i was as handsome as him", "No... and everything synonymous for rejection"],
      "No... and everything synonymous for rejection"
    )
  ];
  
  var quiz = new Quiz(questions);
  
  populate();
  
function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = $("#question");
        element.html(quiz.getQuestionIndex().text);

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            //set it to jQuery
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = $("#progress");
    element.html("Pytanie " + currentQuestionNumber + " z " + quiz.questions.length);
};

function showScores() {
    var scoreScreen = $("#scoreScreen");
    var score = $("#scoreScreen_score");

    scoreScreen.show();
    score.html(quiz.score);
}

var questions = [
    new Question("Wynik działania: 2 + 2 = ?", ["3", "8", "2", "4"], "4"),
    new Question("Obwód kwadratu o boku 3 = ?", ["8", "12", "9", "14"], "12"),
    new Question("Nie możemy dzielić przez: ", ["0", "1", "10", "15"], "0"),
    new Question("Pole koła o średnicy 2 = ?", ["4 PI", "16 PI", "12 PI", "2 PI"], "4 PI"),
    new Question("1/2 + 1/3 = ?", ["2/5", "5/6", "3", "3.14"], "5/6"),
];

var quiz = new Quiz(questions);

populate();
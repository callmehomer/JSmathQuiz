//screens
var welcomeScren = $(".welcome-screen");
var difficultyScreen = $(".difficulty-screen");
var quizScreen = $(".quiz");

//buttons
var startBtn = $(".welcome-screen__start-button");
var navigationBackBtn = $(".navigation__back-btn");
var basicBtn = $("#difficulty-screen__basic");
var gameOverBtn = $("#scoreScreen__back");

startBtn.click(
    function(){
        welcomeScren.hide();
        navigationBackBtn.show();
        difficultyScreen.show().css('display', 'flex');
    }
)

navigationBackBtn.click(
    function(){
        welcomeScren.show();
        navigationBackBtn.hide();
        difficultyScreen.hide();
        quizScreen.hide();
    }
)

basicBtn.click(
    function(){
        difficultyScreen.hide();
        quizScreen.show().css('display', 'flex');
    }
)

gameOverBtn.click(
    function(){
        location.reload();
    }
)
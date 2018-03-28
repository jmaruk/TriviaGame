function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var correct = 0;

    if (question1 =="Stars Hollow") {
        correct++;
    }
    if (question2 =="Yale") {
        correct++;
    }
    if (question3 =="Dean") {
        correct++;
    }
    if (question4 =="Logan") {
        correct++;
    }
    if (question5 =="Christoper") {
        correct++;
    }
    if (question6 =="Writer") {
        correct++;
    }

    var messages = ["Great Job!", "That's okay", "You need to watch more Gilmore Girls"];

    var range;

        if (correct < 1) {
            range = 2;
        }
        if (correct > 0 && correct < 4) {
            range = 1;
        }
        if (correct > 5) {
            range = 0;
        }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    }




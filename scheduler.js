$(document).ready(function(){
    
    $("#currentDay");moment().format('dddd-MMMM-Do');{
    const today = moment();
    console.log(today.format('dddd-MMMM-Do'));
    $("#currentDay").text(today);
    }


    var schedTimes = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

    // For Loop to create time blocks, text area, and save button.
    for (var i = 0; i < 9; i++) {

        var timeDiv = $("<div>");
        var forWriting = $("<textarea>")
        var saveButton = $("<button>")

        timeDiv.addClass("time-block hour");
        forWriting.addClass("description");
        saveButton.addClass("saveBtn");

        timeDiv.attr("times-print", schedTimes[i]);
        timeDiv.text(schedTimes[i]);

        $("#schedule").append(timeDiv);
        $("#schedule").append(forWriting);
        $("#schedule").append(saveButton);

    }

    $(".saveBtn").on("click", function() {
        var answerInput = document.querySelector("<textarea>");
        var answer = answerInput.value.trim()
        console.log(answer);
        localStorage.setItem("answer", JSON.stringify(answer));

        var savedAnswer = JSON.parse(localStorage.getItem("answer"));
        answerInput.textContent = savedAnswer.answer;
    }

,)})
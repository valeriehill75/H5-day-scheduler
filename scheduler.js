$(document).ready(function() {

    $("#currentDay");moment().format('dddd-MMMM-Do');{
    const today = moment();
    console.log(today.format());
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
        
    }



});


// store time and date
var now = moment().format("dddd, MMMM Do, YYYY");
var hour = moment().format("HH");
var time = moment().format("LT");
var dateBlockContainer = document.getElementById("dateHolder")
dateBlockContainer.innerHTML = (now);
var timeBlockContainer = document.getElementById("timeHolder")
timeBlockContainer.innerHTML = (time);
$("now").text(moment().format('dddd MMMM Do'));

// function to update colors over the time interval
var colorUpdater = function() {
    $('.time-block').each(function(index, element) {
        if ($(element).attr('id') === hour) {
            $(element).find("textarea").addClass("red")
            $(element).find("textarea").prop('readonly', true);
        } else if ($(element).attr('id') < hour) {
            $(element).find("textarea").addClass("grey")
            $(element).find("textarea").prop('readonly', true); 
        } else {
            $(element).find("textarea").addClass("green") 
        }
      });
}

// initially sets row colors when page opens
colorUpdater();

// timer to update the date and to run the colorUpdater function
setInterval(function() {
    var time = moment().format("LT");
    $('#timeHolder').text(time);
    colorUpdater();
    console.log(time);
    console.log("colors updated");
}, 10000);


// save button pushes the input data to localStorage
$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, text);
})

// Force localStorage to be persistent on page after refresh
$("#09 .description").val(localStorage.getItem("09"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));
$("#19 .description").val(localStorage.getItem("19"));
$("#20 .description").val(localStorage.getItem("20"));

// button to clear local storage
$(".clearBtn").on("click", function() {
    localStorage.clear();
    location.reload();
})
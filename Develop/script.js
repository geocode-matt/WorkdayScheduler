// store time and date
var now = moment().format("dddd, MMMM Do, YYYY");
var hour = moment().format("HH");
var timeBlockContainer = document.getElementById("timeBlockHolder")
timeBlockContainer.innerHTML = (now);
$("now").text(moment().format('dddd MMMM Do'));

// function to update colors over the time interval
var colorUpdater = function() {
    $('.time-block').each(function(index, element) {
        console.log(element);
        if ($(element).attr('id') === hour) {
            $(element).find("textarea").addClass("red")
        } else if ($(element).attr('id') < hour) {
            $(element).find("textarea").addClass("grey") 
        } else {
            $(element).find("textarea").addClass("green") 
        }
      });
      console.log("colors updated");
}

// initially sets row colors when page opens
colorUpdater();

// timer to update the date and to run the colorUpdater function
setInterval(function() {
    var time = moment().format('LT');
    $(now).text(time);
    colorUpdater();
}, 100000);


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
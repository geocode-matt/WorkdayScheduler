var timeBlockContainer = document.getElementById("timeBlockHolder")

// store time and date
var now = moment().format("dddd, MMMM Do, YYYY");
var hour = moment().format("HH");

$("now").text(moment().format('dddd MMMM Do'));

var colorUpdater = function(time) {

}

setInterval(function() {
    var time = moment().format('LT');
    $(now).text(time);
    colorUpdater(time);
}, 1000);

$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, text);
})


 
 
// function taskToArray(tasks) {
//     for (var i in tasks) {
//         if (tasks[i].
//     }
// }

//////
////// FUNCTIONALITY FOR ADDING/EDITING TEXT IN EACH TIME-BLOCK
//////
// $(".input-text").on("click", "p", function() {
//     var text = $(this)
//       .text()
//       .trim()
//       var textInput = $("<textarea>")
//     .val(text)
//     $(this).replaceWith(textInput)
//     textInput.trigger("focus")

//     tasks.nine = text;
//     localStorage.setItem("tasks", tasks);
//   });

//   $(".input-text").on("blur", "textarea", function() {
//     // get the textarea's current value/text
//     var text = $(this)
//       .val()
//       .trim();
        
//       // recreate p element
//     var inputP = $("<p>")
//     .addClass("text")
//     .text(text);
    
//     // replace textarea with p element
//     $(this).replaceWith(inputP);
//     });
    //////
    //////
    //////







    



    // var loadTasks = function() {
    //     tasks = JSON.parse(localStorage.getItem("tasks"));
      
    //     // if nothing in localStorage, create a new object to track all task status arrays
    //     if (!tasks) {
    //       tasks = {
    //         nine: [],
    //         ten: [],
    //         eleven: [],
    //         twelve: []
    //       };
    //     }
      
    //     // loop over object properties
    //     $.each(tasks, function(list, arr) {
    //       console.log(list, arr);
    //       // then loop over sub-array
    //       arr.forEach(function(task) {
    //         createTask(task.text, list);
    //       });
    //     });
    //   };
      
    //   var saveTasks = function() {
    //     localStorage.setItem("tasks", JSON.stringify(tasks));
    //   };







































// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(text));
//     // console.log(tasks);
// };    

// $("#9am-save saveBtn").click(function() {
//     // get form values
//     var taskText = $("#9am-save").val();
  
//     if (taskText) {
//       createTask(taskText, "9am");
  
//       // save in tasks array
//       tasks.push({
//         text: taskText,
//       });
  
//       saveTasks();
//     }
//   })
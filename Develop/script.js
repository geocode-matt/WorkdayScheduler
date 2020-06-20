
//////
////// FUNCTIONALITY FOR ADDING/EDITING TEXT IN EACH TIME-BLOCK
//////
$(".input-text").on("click", "p", function() {
    var text = $(this)
      .text()
      .trim()
      var textInput = $("<textarea>")
    .val(text)
    $(this).replaceWith(textInput)
    textInput.trigger("focus")
  });

  $(".input-text").on("blur", "textarea", function() {
    // get the textarea's current value/text
    var text = $(this)
      .val()
      .trim();
        
      // recreate p element
    var inputP = $("<p>")
    .addClass("text")
    .text(text);
    
    // replace textarea with p element
    $(this).replaceWith(inputP);
    });

    //////
    //////
    //////
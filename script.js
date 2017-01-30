$(document).ready(function() {
  $("#quoteGenerator").on("click", function(){
  var jsonUrl = "http://quotes.stormconsultancy.co.uk/random.json";

  $.getJSON(jsonUrl, function(json) {
    var quote = json.quote;
    var author = json.author;
    var html = "";

    html += "<h3 class='quote'>" + quote + "</h3>";
    html += "<p class='author'> <em> - " + author + "</em></p>";
    $("#randomQuote").html(html);
  });

  });
});
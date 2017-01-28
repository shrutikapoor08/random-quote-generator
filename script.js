$(document).ready(function(){
  $("#quoteGenerator").on("click", function(){
    var jsonUrl ="http://quotes.stormconsultancy.co.uk/random.json";
      
    $.getJSON(jsonUrl,function(json){
      var quote = json.quote;
      var author = json.author;
      var html = "";
      
      html+= "<h3>" + JSON.stringify(quote) + "</h3>";
      html+= "<em>" + JSON.stringify(author) + "</p>"; 
        $("#randomQuote").html(html); 
      });
    
    
      $("#randomQuote").html("<p>New Quote Generated </p>");
  });
});
// $(document).ready(function(){
//     $( "#cityField" ).keyup(function(){
//         //alert( "handler for .keyup() called.");   //creates a box alert when you type something
//         //$("#txtHint").text("Keyup");                //changes the text on one of the fields 
//         //$("#txtHint").text("Keyup "+$("#cityField").val()); // grabs what i wrote and shows it in the image.
//         $( "#cityField" ).keyup(function() {
//             $.getJSON("staticCity.txt",function(data) {
//     //console.log(data);
//     //console.log(data[0]);
//     //console.log("Got "+data[0].city);
//                 var everything;
//                 everything = "<ul>";
//                 $.each(data, function(i,item) {
//                     everything += "<li> "+data[i].city;
//                 });

//                 everything += "</ul>";
//                 $("#txtHint").html(everything);
//             });
//             $("#txtHint").text("Keyup "+$("#cityField").val());
//         });
//     });
// });

// $( "#cityField" ).keyup(function() {
//   $.getJSON("staticCity.txt",function(data) {
//     console.log(data);
//     console.log(data[0]);
//     console.log("Got "+data[0].city);
//   });
//   $("#txtHint").text("Keyup "+$("#cityField").val());
// });




// $.ajax({
//     dataType: "json",
//     url: url,
//     data: data,
//     success: success
// });


// $(document).ready(function() {
// $( "#cityField" ).keyup(function() {
//   var url = "http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q="+$("#cityField").val();

//   $.getJSON("http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=P",function(data) {
    
//     var everything;
//     everything = "<ul>";
//     $.each(data, function(i,item) {
//       everything += "<li> "+data[i].city;
//     });
//     everything += "</ul>";
//     $("#txtHint").html(everything);
//       })
//         .done(function() { console.log('getJSON request succeeded!'); })
//         .fail(function(jqXHR, textStatus, errorThrown) { 
//         console.log('getJSON request failed! ' + textStatus); 
//         console.log("incoming "+jqXHR.responseText);
//       })
//       .always(function() { console.log('getJSON request ended!');
//     });
//   });
// });

//LAST PIECE OF THE ASSIGNMENT
  $(document).ready(function() {
    $("#weatherButton").click(function(e){
      var value = $("#cityField").val();
      console.log(value);
      $("#dispalyCity").text(value);
      e.preventDefault();
      var myurl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=7dfafa87623620c7116fcd47d27548f2&q="
      myurl += value;
      //$("#txtHint").text("Keyup "+ $("#cityField").val());
      console.log(myurl);
      $.ajax({
        url:myurl,
        dataType: "json",
        success : function(parsed_json) {
              var location = parsed_json['name'];
              var weather = parsed_json['weather'][0]['main'];
              var temp = parsed_json['main']['temp'];
              var weather_icon = parsed_json['weather'][0]['icon'];
              var humidity = parsed_json['main']['humidity'];
              var temp_min = parsed_json['main']['temp_min'];
              var temp_max = parsed_json['main']['temp_max'];
              var wind_speed = parsed_json['wind']['speed'];
              everything = "<img src=\"http://openweathermap.org/img/w/" + weather_icon + ".png\"/>"
              everything += "<ul>";
              everything += "<li>Location: " + location;
              everything += "<li>Weather: " + weather + " (" + temp + "&#8457;)";
              everything += "<li>Low: " + temp_min + "&#8457; | High: " + temp_max + "&#8457;";
              everything += "<li>Humidity: " + humidity + "%";
              everything += "<li>Wind: " + wind_speed + " mph";
              everything += "</ul>";
              $("#weather").html(everything);
        }
      });
    });
  });
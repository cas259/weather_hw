$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<h2>Chicago Weather Report</h2>" +

    "<h3>Current Conditions</h3>" + data.currently.temperature + " degrees and feels like " + data.currently.apparentTemperature + " degrees." +

    "<h3>The current conditions are</h3>" + data.currently.summary +

    "<h3>3-Day Forecast</h3>" +
      "<ul><li>Tomorrow, the high will be " + data.daily.data[1].temperatureMax + " degrees." +
      "<li>The next day, the high will be " + data.daily.data[2].temperatureMax + " degrees." +
      "<li>Three days from now, the high will be " + data.daily.data[3].temperatureMax + " degrees.</ul>"

    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});

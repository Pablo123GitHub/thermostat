$(document).ready(function() {
  //
  // $.get('http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=ed09718f109c7e11045775d311bb4c7e&units=metric', function(data){
  //   console.log(data.main.temp)
  // });
  // interface.js, within the $(document).ready(function() { })
  // $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  //   $('#current-temperature').text(data.main.temp);
  // })

  // {
  //  "id": 2643743,
  //  "name": "London",
  //  "country": "GB",
  //  "coord": {
  //    "lon": -0.12574,
  // ed09718f109c7e11045775d311bb4c7e
  //    "lat": 51.50853
  //  }

  thermostat = new Thermostat();

  $('#temperature').text(thermostat.DEFAULT_TEMPERATURE);

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=ed09718f109c7e11045775d311bb4c7e';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
      $('#selected-city').text(city.substr(0,1).toUpperCase()+city.substr(1));
    })

  }

  displayWeather('london');

  console.log($('#select-city'))

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })


  // $('#current-city').change(function(){
  //   var city = $('#current-city').val();
  //   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  //   $('#current-temperature').text(data.main.temp)
  // });

// var selected_option = $('#current-city option:selected');

// $('#current-city').on('change', function() {
//   console.log(selected_option);
//   $('#city-temperature').text(selected_option);
//   console.log(this.value);
// })

// $('#current-city option').each(function(){
//   if ($(this).is(':selected')) console.log($('#current-city option:selected').text());




  $("#down").click(function() {
    thermostat.downTemperature();
  updateTemperature();
  });
  $("#up").click(function() {
    thermostat.upTemperature();
    updateTemperature();
  });
  $("#reset").click(function() {
    thermostat.reset();
    updateTemperature();
  });
  $("#setSavingMode").click(function() {
    thermostat.setSavingMode();
    $('#powerSavingText').text('ON');
    updateTemperature();
  });
  $("#setOffSavingMode").click(function() {
    thermostat.setOffSavingMode();
    $('#powerSavingText').text('ON');
    updateTemperature();
  });
  $("#getCurrentTemperature").click(function() {
    thermostat.getCurrentTemperature();
    updateTemperature();
  });
  $("#isPowerSavingMode").click(function() {
    thermostat.isPowerSavingMode();
    updateTemperature();
  });
  $("#energyUsage").click(function() {
    thermostat.energyUsage();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };



});

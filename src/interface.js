$(document).ready(function() {

  thermostat = new Thermostat();

  $('#temperature').text(thermostat.DEFAULT_TEMPERATURE);


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

// $( "a" ).addClass( "test" );
$("a").click(function(event) {
  event.preventDefault();
  $(this).hide("slow");
});

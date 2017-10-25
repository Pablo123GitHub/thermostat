function Thermostat(){
  this.temperature = 20;
};

Thermostat.prototype.upTemperature = function() {
  this.temperature++;
}

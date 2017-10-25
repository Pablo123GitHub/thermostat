function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.upTemperature = function() {
  this.temperature++;
};

Thermostat.prototype.downTemperature = function() {
  if (this.temperature == 10) {
    throw new Error("temperature cannot be under 10")
  };
  this.temperature--;
};

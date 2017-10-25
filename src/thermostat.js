'use strict';
function Thermostat() {
  this.temperature = 20;
  this.setSavingMode();
  this.LOW_USAGE_LIMIT = 18 ;
  this.HIG_USAGE_LIMIT = 25;


}

Thermostat.prototype.upTemperature = function() {
  if (this.temperature == 25 && this._powerSavingMode == true) {
    throw new Error("temperature cannot go beyond 25 on PowerSavingMode")
  }
  if (this.temperature == 32) {
    throw new Error("temperature cannot go over 32 when PowerSavingMode is off")
  }
  this.temperature++;
};

Thermostat.prototype.downTemperature = function() {
  if (this.temperature == 10) {
    throw new Error("temperature cannot be under 10")
  };
  this.temperature--;
};

Thermostat.prototype.setSavingMode = function() {
  this._powerSavingMode = true;
};

Thermostat.prototype.isPowerSavingMode = function() {
  return this._powerSavingMode
};

Thermostat.prototype.setOffSavingMode = function() {
  this._powerSavingMode = false;
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.LOW_USAGE_LIMIT) return 'low-usage';
  if (this.temperature < this.HIG_USAGE_LIMIT) return 'medium-usage';
  return 'high-usage';
}

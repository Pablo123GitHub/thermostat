function Thermostat() {
  this.temperature = 20;
  this.setSavingMode();

}

Thermostat.prototype.upTemperature = function() {
  if (this.temperature == 25 && this._powerSavingMode == true) {
    throw new Error("temperature cannot go beyond 25 on PowerSavingMode")
  }
  if (this.temperature == 32){
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

Thermostat.prototype.setSavingMode = function () {
  this._powerSavingMode = true ;
};

Thermostat.prototype.isPowerSavingMode = function(){
  return this._powerSavingMode
};

Thermostat.prototype.setOffSavingMode = function(){
  this._powerSavingMode = false;
}

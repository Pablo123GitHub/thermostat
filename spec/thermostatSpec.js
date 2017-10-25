describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start with a default temperature of 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should raise the temperature by 1", function() {
    thermostat.upTemperature();
    expect(thermostat.temperature).toEqual(21);

  });

  it("should decrease the temperature by 1", function() {
    thermostat.downTemperature();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10', function() {
    for (var i = 0; i < 10; i++) {
      thermostat.downTemperature();
    }
    var dropToNine = function() {
      thermostat.downTemperature()
    }
    expect(dropToNine).toThrowError("temperature cannot be under 10");
  });

  it('saving mode set', function() {
    thermostat.setSavingMode();
    expect(thermostat.isPowerSavingMode()).toEqual(true)
  });

  it('does not allow to go beyon the temperature of 25 on powerSavingMode', function() {
    thermostat.setSavingMode();
    for (var i = 0; i < 5; i++) {
      thermostat.upTemperature();
    };
    var overTwentyFive = function () {
      thermostat.upTemperature();
    };
    expect(overTwentyFive).toThrowError("temperature cannot go beyond 25 on PowerSavingMode");

  });


  it('temperature can be set to 26 when powerSavingMode is OFF', function() {
    thermostat.setOffSavingMode();
    for (var i = 0; i < 6; i++) {
      thermostat.upTemperature();
    };

    expect(thermostat.temperature).toEqual(26);
  });

  it('temperature throws an error message when it goes over 32 and powerSavingMode is OFF', function(){
    thermostat.setOffSavingMode();
    for (var i = 0; i < 12; i++) {
      thermostat.upTemperature();
    };
    var overThirtyTwo = function() {
      thermostat.upTemperature();
    }
    expect(overThirtyTwo).toThrowError("temperature cannot go over 32 when PowerSavingMode is off");

  });


});

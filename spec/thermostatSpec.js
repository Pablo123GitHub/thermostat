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

  it('has a minimum temperature of 10', function(){
  for (var i = 0; i < 10; i++) {
    thermostat.downTemperature();
  }
    var dropToNine = function () {
      thermostat.downTemperature()
    }
    expect(dropToNine).toThrowError("temperature cannot be under 10");
  });


});

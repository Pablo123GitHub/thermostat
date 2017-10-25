describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("should start with a default temperature of 20", function(){
    expect(thermostat.temperature).toEqual(20);
  });

it("should raise the temperature by 1", function(){
  thermostat.upTemperature();
  expect(thermostat.temperature).toEqual(21);
  
});




})

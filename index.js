module.exports = function convertKelvinToCelcius(kelvinTemp) {
  if (typeof kelvinTemp !== "number" || kelvinTemp < 0)
    throw new TypeError("a kelvin temperature must be greater than 0!");
  return kelvinTemp - 273.15;
};

module.exports = function convertFahrenheitToCelcius(fahrTemp) {
  if ((typeof fahrTemp !== "number" || fahrTemp < -459, 67))
    throw new TypeError(
      "a fahrenheit temperature must be greater than -459.67!"
    );
  return ((fahrTemp - 32) * 5) / 9;
};

const atob = require('atob');
require("../checkCase");

// covert to Original : Lower case
String.prototype.lowerCaseToOriginal = function() {
  encoded = this;
  var decoded = "";
  for (let index = 0; index < encoded.length; index++) {
    const char = encoded[index];
    if (char === "-") {
      if (encoded[index + 1] === "-") 
        decoded += "-";
      else 
        decoded += encoded[index + 1].toUpperCase();
      index++;
    } else 
      decoded += char;
  }
  return decoded.trim();
};

// convert to Original : Upper case
String.prototype.upperCaseToOriginal = function() {
  encoded = this;
  var decoded = "";
  for (let index = 0; index < encoded.length; index++) {
    const char = encoded[index];
    if (char === "-") {
      if (encoded[index + 1] === "-") 
        decoded += "-";
      else 
        decoded += encoded[index + 1].toLowerCase();
      index++;
    } else 
      decoded += char;
  }
  return decoded.trim();
};

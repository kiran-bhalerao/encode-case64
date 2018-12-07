const atob = require('atob');
require("./checkCase");

// Lower case decription
String.prototype.decodeToLowerCase = function() {
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
  return atob(decoded.trim());
};

// Upper case decription
String.prototype.decodeToUpperCase = function() {
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
  return atob(decoded.trim());
};

const atob = require('atob');
const btoa = require('btoa');
require("./checkCase");

// Lower case encription
String.prototype.encodeToLowerCase = function() {
  var plain = btoa(this.trim());
  var encoded = "";
  for (char of plain)
    if (char.isUpperCase()) 
      encoded += "-" + char.toLowerCase();
    else if (char === "-") 
      encoded += "--";
    else 
      encoded += char;
  return encoded.trim();
};

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

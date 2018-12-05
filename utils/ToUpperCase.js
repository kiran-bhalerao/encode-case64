const atob = require('atob');
const btoa = require('btoa');
require("./checkCase");

// Upper case encription
String.prototype.encodeToUpperCase = function() {
  var plain = btoa(this.trim());
  var encoded = "";
  for (char of plain)
    if (char.isLowerCase()) 
      encoded += "-" + char.toUpperCase();
    else if (char === "-") 
      encoded += "--";
    else 
      encoded += char;
  return encoded.trim();
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

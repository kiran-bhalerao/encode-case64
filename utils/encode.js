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




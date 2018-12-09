require("../checkCase");

// covert to Lower case
String.prototype.convertToLowerCase = function() {
  var plain = (this.trim());
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

// covert to Upper case
String.prototype.convertToUpperCase = function() {
  var plain = (this.trim());
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




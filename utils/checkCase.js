String.prototype.isUpperCase = function() {
  return /^[A-Z]*$/.test(this);
};

String.prototype.isLowerCase = function() {
  return /^[a-z]*$/.test(this);
};

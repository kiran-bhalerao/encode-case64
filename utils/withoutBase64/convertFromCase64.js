require("./decodeWithout");

String.prototype.convertFromCase64 = function() {
  let given = this.replace(/[^A-Za-z]+/g, "");
  if (!given)
   throw new Error("Incorrect String.");

  if (given.search(/[^A-Z]+/) === -1)
   return this.upperCaseToOriginal();
  else if (given.search(/[^a-z]+/) === -1)
   return this.lowerCaseToOriginal();
  else
   throw new Error("Incorrect String.");
};


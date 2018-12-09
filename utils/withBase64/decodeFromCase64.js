require("./decodeWith");

String.prototype.decodeFromCase64 = function() {
  let given = this.replace(/[^A-Za-z]+/g, "");
  if (!given)
   throw new Error("Incorrect String.");

  if (given.search(/[^A-Z]+/) === -1)
   return this.decodeToUpperCase();
  else if (given.search(/[^a-z]+/) === -1)
   return this.decodeToLowerCase();
  else
   throw new Error("Incorrect String.");
};


require(".");

test("Should be encoded and decoded", function() {
  const plain = "KiR-/-O$Jjfifjfj-------------^%#!@#$%^&*(8y57toeihjvnjHHH8DWJi98320-------aN";
  const encoded = plain.encodeToLowerCase();
  expect(encoded.decodeFromCase64()).toBe(plain);
});

test("Should be converted and deconverted", function() {
  const plain = "KiR-/-O$Jjfifjfj-------------^%#!@#$%^&*(8y57toeihjvnjHHH8DWJi98320-------aN";
  const converted = plain.convertToLowerCase();
  expect(converted.convertFromCase64()).toBe(plain);
});
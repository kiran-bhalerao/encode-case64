require(".");

test("Should be decodedToLowerCase from encoded String", function() {
  const plain = "KiR-/-O$Jjfifjfj-------------^%#!@#$%^&*(8y57toeihjvnjHHH8DWJi98320-------aN";
  const encoded = plain.encodeToLowerCase();
  expect(encoded.decodeToLowerCase()).toBe(plain);
});

const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 5 for Five of Hearts", () => {
  expect(getCardValue("5♥")).toEqual(5);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Queen of Spades", () => {
  expect(getCardValue("Q♠")).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Hearts", () => {
  expect(getCardValue("A♥")).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return -1 for invalid input", () => {
  expect(getCardValue("0♥")).toEqual(-1);
});

function isProperFraction(numerator, denominator) {
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  if (numerator < denominator) return true;
  if (numerator >= denominator) return false;
}

module.exports = isProperFraction;

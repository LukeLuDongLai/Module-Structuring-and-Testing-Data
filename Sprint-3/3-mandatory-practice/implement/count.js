function countChar(stringOfCharacters, findCharacter) {
  let count = 0;

  for (const chr of stringOfCharacters) {
    if (chr === findCharacter) {
      count++;
    }
  }
  return count;
}

module.exports = countChar;

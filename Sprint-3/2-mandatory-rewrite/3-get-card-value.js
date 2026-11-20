function getCardValue(card) {
  rank = card.slice(0, -1);
  if (rank === "A") return 11;
  if (Number(rank) >= 2 && Number(rank) <= 10) return Number(rank);
  if (rank === "J" || rank === "Q" || rank === "K") return 10;
  return -1;
}
module.exports = getCardValue;

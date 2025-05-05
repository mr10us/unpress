export function calculateSavings(amountPerDay, pricePerArticle) {
  if (!Number(amountPerDay) || !Number(pricePerArticle)) throw new Error('Please provide valid information');
  if (!amountPerDay || !pricePerArticle) throw new Error('Please provide amount and price');
  const clientExpences = calculateClientExpencionsPerYear(amountPerDay, pricePerArticle);

  const monthBank = 1750; // $1750 per month for ai model;
  const yearBank = 21000; // $21000 per year for ai model (monthBank * 12);
  const clientArticlesCountPerYear = amountPerDay * 365;
  const aiExpencesPerYear = yearBank / clientArticlesCountPerYear;

  return clientExpences - aiExpencesPerYear;
}

function calculateClientExpencionsPerYear(amount, price) {
  const clientExpences = amount * 365 * price;
  return clientExpences;
}
//
export const FormatCurrency = (amount) => {
  // Format amount as Nigerian Naira currency
  // e.g., NGN1,000.00
  // Using Intl.NumberFormat for proper currency formatting
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
  }).format(amount);
}

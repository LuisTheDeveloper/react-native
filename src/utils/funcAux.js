export const formatPrice = ({
  currency = "£",
  price,
  discount,
  discountType,
}) => {
  let finalPrice = price;
  if (discount) {
    finalPrice = discountType = "percentage"
      ? price - price * (discount / 100)
      : price - discount;
  }

  return finalPrice === 0
    ? "Free"
    : `${currency} ${parseFloat(finalPrice / 100).toFixed(2)}`;
};

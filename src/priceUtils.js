export const formatDiscount = (discount) => {
  return `${parseFloat(discount) * 100}%`;
};

export const formatFinalPrice = (price, discount) => {
  return `$${(
    parseInt(price, 10) -
    parseInt(price, 10) * parseInt(discount, 10)
  ).toFixed(2)}`;
};

export const formatPrice = (price) => {
  return `$${parseInt(price).toFixed(2)}`;
};

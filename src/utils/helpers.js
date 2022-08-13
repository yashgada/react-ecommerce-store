export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format((number / 100).toFixed(2));
};

export const getUniqueValues = () => {};

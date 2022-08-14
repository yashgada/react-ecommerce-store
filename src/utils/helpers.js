export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format((number / 100).toFixed(2));
};

export const getUniqueValues = (data, type) => {
  // products.reduce((acc, product) => {
  //   let value = product[param]
  //   value = acc.push(value)
  //   return acc.push(value);
  // },[])

  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};

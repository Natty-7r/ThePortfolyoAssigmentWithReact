export const formateDate = (inputDate) => {
  const date = new Date(inputDate);
  const options = { year: "numeric", month: "long" };
  return date.toLocaleDateString("en-US", options);
};

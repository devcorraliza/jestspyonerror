export const f1 = () => {
  console.log("Im f1 calling f2");
  f2();
};
export const f2 = () => console.log("Im f2");

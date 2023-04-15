export const getObjectIndex = (list = [], source) => {
  let index = list?.findIndex((item) => item?.source === source);

  return index;
};

export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const mobileRegex = /^(\+91|0)?[6789]\d{9}$/;

const goodColors = [
  "#ffc681",
  "#5effd6",
  "#c6e442",
  "#f8b3ed",
  "#e2e2e2",
  "#9793fb",
];
export function randomColor() {
  return goodColors[Math.floor(Math.random() * goodColors.length)];
}

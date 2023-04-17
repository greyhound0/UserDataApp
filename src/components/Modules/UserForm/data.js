import { randomColor } from "../../utils/constants";

const staticArrayData = [
  { name: "manas", email: "manas@m", phoneNumber: "9988998899" },
  { name: "manas2", email: "manas@m", phoneNumber: "9988998899" },
  { name: "manas3", email: "manas@m", phoneNumber: "9988998899" },
  { name: "manas4", email: "manas@m", phoneNumber: "9988998899" },
  { name: "manas5", email: "manas@m", phoneNumber: "9988998899" },
  { name: "manas6", email: "manas@m", phoneNumber: "9988998899" },
  { name: "manas7", email: "manas@m", phoneNumber: "9988998899" },
];
const getUsersWithColor = (arr) => {
  return arr.map((item) => ({ ...item, color: randomColor() }));
};

const getUserswithId = (arr) => {
  return arr.map((item, i) => ({ ...item, id: i }));
};
console.log("iddididididi", getUserswithId(getUsersWithColor(staticArrayData)));

export default getUserswithId(getUsersWithColor(staticArrayData));

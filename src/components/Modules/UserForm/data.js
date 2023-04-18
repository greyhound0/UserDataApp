import { randomColor } from "../../utils/constants";

const staticArrayData = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "555-555-5555",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "555-555-5555",
  },
  {
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    phone: "555-555-5555",
  },
  {
    name: "Emily Chen",
    email: "emilychen@example.com",
    phone: "555-555-5555",
  },
  {
    name: "Mike Garcia",
    email: "mikegarcia@example.com",
    phone: "555-555-5555",
  },
  {
    name: "Samantha Lee",
    email: "samanthalee@example.com",
    phone: "555-555-5555",
  },
  {
    name: "David Nguyen",
    email: "davidnguyen@example.com",
    phone: "555-555-5555",
  },
  {
    name: "Karen Taylor",
    email: "karentaylor@example.com",
    phone: "555-555-5555",
  },
  {
    name: "Kevin Wong",
    email: "kevinwong@example.com",
    phone: "555-555-5555",
  },
  {
    name: "Rachel Kim",
    email: "rachelkim@example.com",
    phone: "555-555-5555",
  },
];
const getUsersWithColor = (arr) => {
  return arr.map((item) => ({ ...item, color: randomColor() }));
};

const getUserswithId = (arr) => {
  return arr.map((item, i) => ({ ...item, id: i }));
};
console.log("iddididididi", getUserswithId(getUsersWithColor(staticArrayData)));

export default getUserswithId(getUsersWithColor(staticArrayData));

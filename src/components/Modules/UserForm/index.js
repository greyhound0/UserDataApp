import React, { useEffect, useState } from "react";
import Form from "../../UIElements/Form";
import { emailRegex, mobileRegex } from "../../utils/constants";
import UserProfiles from "../UserProfiles";
import inactiveUserImage from "../../../Images/lethargic.png";
import activeUserImage from "../../../Images/active-user.png";
import removedUserImage from "../../../Images/cross.png";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneNoValid, setIsPhoneNoValid] = useState(true);
  const [activeUsers, setactiveUsers] = useState([]);
  const [removedUsers, setremovedUsers] = useState([]);
  const [inactiveUsers, setInactiveUsers] = useState([]);

  const handleClick = () => {
    if (
      isNameValid &&
      isEmailValid &&
      isPhoneNoValid &&
      name &&
      email &&
      phoneNumber
    ) {
      let tempArray = [...activeUsers];
      tempArray.push({ name, email, phoneNumber });
      setactiveUsers(tempArray);
      setName("");
      setEmail("");
      setPhoneNumber("");
    }
  };

  const handleRemoveUser = (source, i) => {
    //origianl array operations
    if (source == "active") {
      let tempArray = [...activeUsers];
      let removedUser = tempArray.splice(i, 1);
      setactiveUsers(tempArray);
      //removed array operations
      let tempRemovedUserArray = [...removedUsers];
      tempRemovedUserArray.push(removedUser[0]);
      setremovedUsers(tempRemovedUserArray);
    } else if (source == "inactive") {
      let tempArray = [...inactiveUsers];
      let removedUser = tempArray.splice(i, 1);
      setInactiveUsers(tempArray);

      let tempRemovedUserArray = [...removedUsers];
      tempRemovedUserArray.push(removedUser[0]);
      setremovedUsers(tempRemovedUserArray);
    }
  };

  const moveToInactiveUsers = (source, i) => {
    let tempArray = [...inactiveUsers];
    let newInactiveUser;
    if (source == "active") {
      let tempActiveUsers = [...activeUsers];
      newInactiveUser = tempActiveUsers.splice(i, 1);
      setactiveUsers(tempActiveUsers);
    } else if (source == "removed") {
      let tempRemovedUsers = [...removedUsers];
      newInactiveUser = tempRemovedUsers.splice(i, 1);
      setremovedUsers(tempRemovedUsers);
    }

    tempArray.push(newInactiveUser[0]);
    setInactiveUsers(tempArray);
  };

  const moveToActiveUsers = (source, i) => {
    let tempArray = [...activeUsers];
    let newActiveUser;
    if (source == "inactive") {
      let tempInactiveUsers = [...inactiveUsers];
      newActiveUser = tempInactiveUsers.splice(i, 1);
      setInactiveUsers(tempInactiveUsers);
    } else if (source == "removed") {
      let tempRemovedUsers = [...removedUsers];
      newActiveUser = tempRemovedUsers.splice(i, 1);
      setremovedUsers(tempRemovedUsers);
    }
    tempArray.push(newActiveUser[0]);
    setactiveUsers(tempArray);
  };

  useEffect(() => {
    if (name.length > 2) setIsNameValid(true);
    else setIsNameValid(false);
  }, [name]);

  useEffect(() => {
    if (email.match(emailRegex)) {
      setIsEmailValid(true);
    } else setIsEmailValid(false);
  }, [email]);

  useEffect(() => {
    if (phoneNumber.match(mobileRegex)) {
      setIsPhoneNoValid(true);
    } else setIsPhoneNoValid(false);
  }, [phoneNumber]);

  useEffect(() => {
    console.log(activeUsers);
  }, [activeUsers]);

  useEffect(() => {
    return () => {
      alert("local storage set");
      localStorage.setItem("activeUsers", JSON.stringify(activeUsers));
      localStorage.setItem("removedUsers", JSON.stringify(removedUsers));
      localStorage.setItem("inctaiveUsers", JSON.stringify(inactiveUsers));
    };
  }, []);

  const inputFields = [
    {
      type: "text",
      value: name,
      onChange: setName,
      placeholder: "Eg. Manas Gupta",
      label: "Name *",
      errorMessage: !isNameValid
        ? "Should have more than 3 characters"
        : undefined,
    },
    {
      type: "email",
      value: email,
      onChange: setEmail,
      placeholder: "Eg. greyhound@gmail.com",
      label: "Email *",
      errorMessage: !isEmailValid ? "Enter Valid Email" : undefined,
    },
    {
      type: "number",
      value: phoneNumber,
      onChange: setPhoneNumber,
      placeholder: "Eg. 8126196827",
      label: "Phone Number *",
      errorMessage: !isPhoneNoValid ? "Enter Valid Phone No." : undefined,
    },
  ];

  const userProfile = [
    {
      heading: "Active",
      primaryButtonAction: moveToInactiveUsers,
      secondaryButtonAction: handleRemoveUser,
      primaryActionImage: inactiveUserImage,
      secondaryActionImage: removedUserImage,
      primaryHoverText: "Move To Inactive User",
      secondaryHoverText: "Remove User",
      arrayData: activeUsers,
      source: "active",
    },
    {
      heading: "Removed",
      primaryButtonAction: moveToInactiveUsers,
      secondaryButtonAction: moveToActiveUsers,
      primaryActionImage: inactiveUserImage,
      secondaryActionImage: activeUserImage,
      primaryHoverText: "Move To Inactive User",
      secondaryHoverText: "Move To Active User",
      arrayData: removedUsers,
      source: "removed",
    },
    {
      heading: "Inactive",
      primaryButtonAction: moveToActiveUsers,
      secondaryButtonAction: handleRemoveUser,
      primaryActionImage: activeUserImage,
      secondaryActionImage: removedUserImage,
      primaryHoverText: "Move To Active User",
      secondaryHoverText: "Remove User",
      arrayData: inactiveUsers,
      source: "inactive",
    },
  ];

  //   REMOVE ITEMS FROM ACTIVE LIST - DONE
  // ADD REMOVED ITEMS TO INACTIVE LIST

  //   3: Add Search Option based on Names in that list
  //   BONUS: add search support for all 3 keys in 1 search field

  return (
    <div>
      <Form inputFields={inputFields} submitOnClick={handleClick} />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          {userProfile.map((data, i) => (
            <UserProfiles
              heading={data.heading}
              primaryButtonAction={data.primaryButtonAction}
              secondaryButtonAction={data.secondaryButtonAction}
              primaryActionImage={data.primaryActionImage}
              secondaryActionImage={data.secondaryActionImage}
              primaryHoverText={data.primaryHoverText}
              secondaryHoverText={data.secondaryHoverText}
              arrayData={data.arrayData}
              source={data.source}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserForm;

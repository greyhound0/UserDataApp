import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Form from "../../UIElements/Form";
import { emailRegex, mobileRegex } from "../../utils/constants";
import "./style.css";
import UserProfiles from "../UserProfiles";
import inactiveUserImage from "../../../Images/lethargic.png";
import activeUserImage from "../../../Images/active-user.png";
import removedUserImage from "../../../Images/cross.png";
import { getLocalStoragItem, setLocalStorage } from "../../utils/localstorage";
import { getObjectIndex } from "../../utils/getObjectIndex";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState(null);
  const [userProfile, setUserProfile] = useState([]);

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneNoValid, setIsPhoneNoValid] = useState(true);
  const [isImageValid, setIsImageValid] = useState(true);
  const [activeUsers, setactiveUsers] = useState(
    getLocalStoragItem("activeUsers")
  );
  const [removedUsers, setremovedUsers] = useState(
    getLocalStoragItem("removedUsers")
  );
  const [inactiveUsers, setInactiveUsers] = useState(
    getLocalStoragItem("inactiveUsers")
  );

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
      tempArray.push({
        name,
        email,
        phoneNumber,
        image,
        id: activeUsers?.length,
      });
      setactiveUsers(tempArray);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setImage(null);
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

  const handleImageChange = (x) => {
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(x);
  };

  const clearData = () => {
    setLocalStorage(activeUsers, []);
    setLocalStorage(inactiveUsers, []);
    setLocalStorage(removedUsers, []);

    setactiveUsers([]);
    setremovedUsers([]);
    setInactiveUsers([]);
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
    if (image) {
      setIsImageValid(true);
    } else {
      setIsImageValid(false);
    }
  }, [image]);

  useEffect(() => {
    setLocalStorage("activeUsers", activeUsers);

    return () => {};
  }, [activeUsers]);

  useEffect(() => {
    setLocalStorage("removedUsers", removedUsers);
    return () => {};
  }, [removedUsers]);

  useEffect(() => {
    setLocalStorage("inactiveUsers", inactiveUsers);
    return () => {};
  }, [inactiveUsers]);

  const inputFields = [
    {
      type: "text",
      value: name,
      onChange: setName,
      placeholder: "Eg. Manas Gupta",
      label: "Name * ",
      errorMessage: !isNameValid
        ? "Should have more than 3 characters"
        : undefined,
    },
    {
      type: "email",
      value: email,
      onChange: setEmail,
      placeholder: "Eg. greyhound@gmail.com",
      label: "Email * ",
      errorMessage: !isEmailValid ? "Enter Valid Email" : undefined,
    },
    {
      type: "number",
      value: phoneNumber,
      onChange: setPhoneNumber,
      placeholder: "Eg. 8126196827",
      label: "Phone * ",
      errorMessage: !isPhoneNoValid ? "Enter Valid Phone No." : undefined,
    },

    {
      type: "file",
      value: null,
      onChange: handleImageChange,
      placeholder: "Tap to Upload",
      label: "Upload Image",
    },
  ];

  useEffect(() => {
    setUserProfile([
      {
        heading: "Active",
        primaryButtonAction: moveToInactiveUsers,
        secondaryButtonAction: handleRemoveUser,
        primaryActionImage: inactiveUserImage,
        secondaryActionImage: removedUserImage,
        primaryHoverText: "Move To Inactive User",
        secondaryHoverText: "Remove User",
        arrayData: activeUsers,
        setArraydata: setactiveUsers,
        source: "active",
      },
      {
        heading: "Inactive",
        primaryButtonAction: moveToActiveUsers,
        secondaryButtonAction: handleRemoveUser,
        primaryActionImage: activeUserImage,
        primaryHoverText: "Move To Active User",
        secondaryHoverText: "Remove User",
        arrayData: inactiveUsers,
        setArraydata: setInactiveUsers,
        source: "inactive",
      },
      {
        heading: "Removed",
        primaryButtonAction: moveToInactiveUsers,
        secondaryButtonAction: moveToActiveUsers,
        primaryActionImage: inactiveUserImage,
        secondaryActionImage: activeUserImage,
        primaryHoverText: "Move To Inactive User",
        secondaryHoverText: "Move To Active User",
        secondaryActionImage: removedUserImage,
        arrayData: removedUsers,
        setArraydata: setremovedUsers,
        source: "removed",
      },
    ]);
  }, [activeUsers, removedUsers, inactiveUsers]);

  const onDragEnd = (result) => {
    if (
      !result.destination ||
      (result.source.droppableId == result.destination.droppableId &&
        result.source.index == result.destination.index)
    ) {
      return;
    }

    const sourceIndexOfProfile = getObjectIndex(
      userProfile,
      result?.source?.droppableId
    );
    const destinationIndexOfProfile = getObjectIndex(
      userProfile,
      result.destination.droppableId
    );

    let sourceTempArray = [...userProfile[sourceIndexOfProfile].arrayData];
    const [removedProfile] = sourceTempArray.splice(result?.source?.index, 1);
    let destinationTempArray = [
      ...userProfile[destinationIndexOfProfile].arrayData,
    ];

    if (result?.source?.droppableId !== result.destination.droppableId) {
      destinationTempArray.splice(
        result?.destination?.index,
        0,
        removedProfile
      );
      userProfile[destinationIndexOfProfile].setArraydata(destinationTempArray);
    } else {
      sourceTempArray.splice(result?.destination?.index, 0, removedProfile);
    }
    userProfile[sourceIndexOfProfile].setArraydata(sourceTempArray);
  };

  return (
    <div>
      <div>
        <Form inputFields={inputFields} submitOnClick={handleClick} />
        <button className="clearDataButton" onClick={clearData}>
          Clear Data
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="userProfile">
          {userProfile.map((data, i) => (
            <UserProfiles
              key={i}
              activeUsers={activeUsers}
              setactiveUsers={setactiveUsers}
              removedUsers={removedUsers}
              setremovedUsers={setremovedUsers}
              inactiveUsers={inactiveUsers}
              setInactiveUsers={setInactiveUsers}
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
      </DragDropContext>
    </div>
  );
}

export default UserForm;

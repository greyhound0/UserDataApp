import React from "react";
import Profile from "../../UIElements/Profile";

export default function UserProfiles({
  heading,
  arrayData = [],
  handleRemoveUser,
  source,
  moveToInactiveUsers,
  moveToActiveUsers,
}) {
  return (
    <div>
      <h2>{heading}</h2>
      {arrayData.map((user, i) => (
        <Profile
          name={user?.name}
          email={user?.email}
          phoneNumber={user?.phoneNumber}
          key={i}
          index={i}
          source={source}
          handleRemoveUser={handleRemoveUser}
          moveToInactiveUsers={moveToInactiveUsers}
          moveToActiveUsers={moveToActiveUsers}
        />
      ))}
    </div>
  );
}

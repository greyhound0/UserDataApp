import React from "react";
import Profile from "../../UIElements/Profile";

export default function UserProfiles({
  heading,
  arrayData = [],
  primaryButtonAction,
  secondaryButtonAction,
  primaryActionImage,
  secondaryActionImage,
  primaryHoverText,
  secondaryHoverText,
  source,
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
          primaryButtonAction={primaryButtonAction}
          secondaryButtonAction={secondaryButtonAction}
          primaryActionImage={primaryActionImage}
          secondaryActionImage={secondaryActionImage}
          primaryHoverText={primaryHoverText}
          secondaryHoverText={secondaryHoverText}

          // handleRemoveUser={handleRemoveUser}
          // moveToInactiveUsers={moveToInactiveUsers}
          // moveToActiveUsers={moveToActiveUsers}
        />
      ))}
    </div>
  );
}

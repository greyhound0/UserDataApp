import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Profile from "../../UIElements/Profile";
import "./style.css";

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
  const cardBackgroundColor = (source) => {
    let bgColor;
    switch (source) {
      case "removed":
        bgColor = "rgb(252,41,71)";
        break;
      case "inactive":
        bgColor = "rgb(252,185,0)";
        break;
      case "active":
        bgColor = "rgb(19,235,106)";
        break;
    }
    return bgColor;
  };

  return (
    <div
      className="userProfilesContainer"
      style={{
        backgroundColor: cardBackgroundColor(source),
      }}
    >
      <h1 className="heading">{heading}</h1>
      <Droppable droppableId={source}>
        {(provided) => (
          <div
            className="profileCards"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {arrayData.map((user, i) => (
              <Draggable
                key={`${user?.id}`}
                draggableId={`${user?.id}`}
                index={i}
              >
                {(provided) => (
                  <div
                    className="pro"
                    {...provided?.draggableProps}
                    {...provided?.dragHandleProps}
                    ref={provided?.innerRef}
                  >
                    <Profile
                      name={user?.name}
                      email={user?.email}
                      phoneNumber={user?.phoneNumber}
                      image={user?.image}
                      key={i}
                      index={i}
                      source={source}
                      primaryButtonAction={primaryButtonAction}
                      secondaryButtonAction={secondaryButtonAction}
                      primaryActionImage={primaryActionImage}
                      secondaryActionImage={secondaryActionImage}
                      primaryHoverText={primaryHoverText}
                      secondaryHoverText={secondaryHoverText}
                    />
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
}

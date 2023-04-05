import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
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
  activeUsers,
  setactiveUsers,
  removedUsers,
  setremovedUsers,
  inactiveUsers,
  setInactiveUsers,
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
  let card;
  let setUser;
  if (source === "active") {
    card = activeUsers;
    setUser = setactiveUsers;
  } else if (source === "removed") {
    card = removedUsers;
    setUser = setremovedUsers;
  } else if (source === "inactive") {
    card = inactiveUsers;
    setUser = setInactiveUsers;
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(card, result.source.index, result.destination.index);

    setUser(items);
  };

  return (
    <div
      className="userProfilesContainer"
      style={{
        backgroundColor: cardBackgroundColor(source),
      }}
    >
      <h2>{heading}</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="profileCards">
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
      </DragDropContext>
    </div>
  );
}

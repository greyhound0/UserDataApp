import Tooltip from "../Tooltip";
import "./style.css";

export default function Profile({
  name,
  email,
  phoneNumber,
  index,
  source,
  image,
  color,
  primaryButtonAction,
  secondaryButtonAction,
  primaryActionImage,
  secondaryActionImage,
  primaryHoverText,
  secondaryHoverText,
}) {
  let initial = name?.split("")[0]?.toUpperCase();
  let initial2 = "";
  for (let i = 1; i < name.length + 1; i++) {
    if (name.split("")[i] === " ") {
      name.split("")[i + 1]
        ? (initial2 = name.split("")[i + 1])
        : (initial2 = "");
      console.log(initial2);
    }
  }
  // let goodColors = [
  //   "#ffc681",
  //   "#5effd6",
  //   "#c6e442",
  //   "#f8b3ed",
  //   "#e2e2e2",
  //   "#9793fb",
  // ];
  // const [randomColor, setRandomColor] = useState(
  //   goodColors[Math.floor(Math.random() * 6)]
  // );

  return (
    <div className="profile" draggable>
      <div>
        {image ? (
          <img src={image} className="image" />
        ) : (
          <div
            style={{
              backgroundColor: color,
              width: "25px",
              height: "25px",
              borderRadius: "20px",
              textAlign: "center",
              padding: "5px",
              color: "#0f254c",
              fontWeight: "bold",
            }}
          >
            {initial + initial2}
          </div>
        )}
        <div>
          <label className="label">Name:</label>
          {" " + name}
        </div>
        <div>
          <label className="label">Email:</label>
          {" " + email}
        </div>
        <div>
          <label className="label">Phone:</label>
          {" " + phoneNumber}
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Tooltip text={primaryHoverText}>
          <div style={{ width: "70px", paddingLeft: "33px" }}>
            <img
              style={{ height: "25px", width: "25px", cursor: "pointer" }}
              src={primaryActionImage}
              onClick={() => {
                primaryButtonAction(source, index);
              }}
            />
          </div>
        </Tooltip>
        <Tooltip text={secondaryHoverText}>
          <div
            style={{
              width: "70px",
              paddingLeft: "33px",
            }}
          >
            <img
              style={{ height: "25px", width: "25px", cursor: "pointer" }}
              src={secondaryActionImage}
              onClick={() => {
                secondaryButtonAction(source, index);
              }}
            />
          </div>
        </Tooltip>
      </div>

      {/* <img  
        onClick={() => {
          handleRemoveUser(index, source);
        }}
        style={{ cursor: "pointer" }}
      
        {source == "active" ? (
          " X"
        ) :                                                                                                               (
          <img
            title="move to inactive users"
            onClick={() => {
              moveToInactiveUsers(source, index);
            }}
            style={{ height: "25px", cursor: "pointer" }}
            src={inactiveUser}
            alt="inactive"
          />
        )}
      
      {source == "active" ? (
        <img
          title="move to inactive users"
          onClick={() => {
            moveToInactiveUsers(source, index);
          }}
          style={{ height: "25px", cursor: "pointer" }}
          src={inactiveUser}
          alt="inactive"
        />
      ) : (
        <img
          title="move to active users"
          onClick={() => {
            moveToActiveUsers(source, index);
          }}
          style={{ height: "25px", cursor: "pointer" }}
          src={activeUser}
          alt="inactive"
        />
      )} */}
    </div>
  );
}

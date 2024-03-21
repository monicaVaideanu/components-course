import Bio from "./Bio.jsx";

const Badge = (props) => {
  return (
    <div style={{
    border: "1px solid black",
    width: "350px",
    borderRadius: "8px",
    padding: "8px",
    marginBottom: "16px",
    justifyContent: "space-between"
  }}>
    <div style={{ 
      marginBottom: "8px"
    }}>
        <h3>{props.firstName}</h3>
        <h1>{props.lastName}</h1>
        <div style={{flex: 1}}>
          <Bio
            dateOfBirth={props.dateOfBirth}
            description={props.description}
            hobbies={props.hobbies}
          />
        </div>
      </div>
      <img src={props.avatarImage} height="64px"/>
    </div>
  );
};
export default Badge;
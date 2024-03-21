import React from "react";
import "./App.css";
import LogoComponent from "./components/LogoComponent.jsx";
//import  Badge  from "./components/Badge.jsx";
import  BadgeComponent  from "./components/BadgeComponent.jsx";


const badges = [
  {
    firstName: "Johhny",
    lastName: "Depp",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMJf32XCdIMPR005aLZbkk5TldBubjW2CfA&usqp=CAU",
    dateOfBirth: "2020-01-20",
    description: "abscded",
    hobbies:["Java","Mathematics","Not-CSS"]
  },
  {
    firstName: "Tommy",
    lastName: "Williams",
    img: "https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg",
    birthDate: "2020-01-20",
    description:"abscded",
    hobbies:["blablabla"]
  },
  {
    firstName: "Tommy2",
    lastName: "Williams2",
    img: "https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg",
    birthDate: "2020-01-20",
    description:"abscded",
    hobbies:["blablabla"]
  }
];
 
class App extends React.Component {
  render() {
    return (
      <div id="container">
        {badges.map(e => (
          <BadgeComponent
          firstName= {e.firstName}
          lastName={e.lastName}
          avatarImage={e.img}
          dateOfBirth={e.dateOfBirth}
          description={e.description}
          hobbies={e.hobbies}
        />
        ))}
      </div>
    );
  }
};
export default App;
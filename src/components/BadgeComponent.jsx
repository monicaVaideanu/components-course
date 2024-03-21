import React, { Component } from "react";
import Bio from "./Bio.jsx";

class BadgeComponent extends Component {
  render() {
    return (
      <div style={{
        border: "1px solid black",
        width: "350px",
        borderRadius: "8px",
        padding: "8px",
        marginBottom: "16px",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <div style={{ 
          marginBottom: "8px"
        }}>
          <h3>{this.props.firstName}</h3>
          <h1>{this.props.lastName}</h1>
          <div style={{flex: 1}}>
            <Bio
              dateOfBirth={this.props.dateOfBirth}
              description={this.props.description}
              hobbies={this.props.hobbies}
            />
          </div>
        </div>
        <img src={this.props.avatarImage} height="64px"/>
      </div>
    );
  }
}

export default BadgeComponent;

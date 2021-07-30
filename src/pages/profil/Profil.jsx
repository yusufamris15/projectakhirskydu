import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Status from "../status/Status";
import Status2 from "../status2/Status2";
import InfoProfil from "../info-profil/InfoProfil";
import "./Profile.scss";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <Navbar />
        <InfoProfil />
        <Status />
        <Status2 />
      </div>
    );
  }
}
export default Profile;

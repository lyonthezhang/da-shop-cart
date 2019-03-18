import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ url, userName }) => (
  <span>
    <img className="ui avatar image" src={url} alt="profile" />
    {userName}
  </span>
);

export default ProfileCard;
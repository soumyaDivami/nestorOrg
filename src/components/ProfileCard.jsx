import React from "react";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  const {
    userName,
    userDesignation,
    joinedOn,
    userImg,
    numberOfChildren
  } = props;
  return (
    <div className={"cardContainer"} id={props.id}>
      <div className="cardInfo">
        <div className={"userImgContainer"}>
          <img src={userImg} alt="" className={"userImg"} />
          <img
            className="userImgPlaceHolder"
            src="https://unicef.github.io/react-org-chart/static/media/avatar-personnel.f8399445.svg"
            alt=""
          />
        </div>
        <div className={"userDetails"}>
          <div className={"userDetails_top"}>
            <div className={"userName"} title={userName}>
              {userName}
            </div>
            <div className={"userDesignation"}>{userDesignation}</div>
          </div>
        </div>
        <div>
          <div className={"joinedOn"}>Joined on {joinedOn}</div>
          <div className={"supervisee"}>{numberOfChildren} Supervisee</div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;

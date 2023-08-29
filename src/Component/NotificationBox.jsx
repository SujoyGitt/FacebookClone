import React from "react";
import { fetchUserData } from "../Global/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const NotificationBox = ({ buttonRef }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  return (
    <div className="notificationBox" ref={buttonRef}>
      <div className="notificationHeader w-full d-flex justify-content-between align-items-center">
        <h4>Notifications</h4>
        <div className="icon">
          <i
            data-visualcompletion="css-img"
            class="x1b0d499 x1d69dk1"
            style={{
              backgroundImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/c1RYSCs8g9M.png)",
              backgroundPosition: "0px -105px",
              backgroundSize: "auto",
              width: "20px",
              height: "20px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
        </div>
      </div>
      <div className="notifcationBody">
        {data
          .slice(10, 40)
          .map(({ name: { first, last }, picture: { thumbnail } }) => (
            <NavLink>
              <img alt="" className="shortcutsImg circle" src={thumbnail} />
              <span>
                {first} {last} 
                <span style={{ fontWeight: 300, fontSize: "14px",paddingLeft:'10px'}}>
                   Posted new Photo if you want to see click here
                </span>
              </span>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default NotificationBox;

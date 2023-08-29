import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Add1 from "./add1.jpg";
import Add2 from "./add2.jpg";
import FacebookPage from "../Sidebar/page.jpg";
import { fetchUserData } from "../../Global/action";
import { useDispatch, useSelector } from "react-redux";

const SidebarRight = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div className="sidebarRight col-4 col-lg-3 d-none p-0 pb-4 d-md-block">
      <div className="rightSidebarcontainer">
        <div className="rightsidebarAdds">
          <h3>Sponsored</h3>
          <NavLink>
            <img alt="" className="shortcutsImg" src={Add1} />
            <span className="ms-2">apps.shopify.com</span>
          </NavLink>
          <NavLink>
            <img alt="" className="shortcutsImg" src={Add2} />
            <div className="ms-2 addDescription">
              <p>A Bigger and Better Contest Then Ever</p>
              <span className="">altair.com</span>
            </div>
          </NavLink>
        </div>
        <div className="rightsidebarPage pb-2">
          <h3>Your Pages and profiles</h3>
          <NavLink>
            <img alt="" className="shortcutsImg circle" src={FacebookPage} />
            <span>S.G</span>
          </NavLink>
          <NavLink classname="pageAndProfileIcon">
            <i
              data-visualcompletion="css-img"
              class="switchIcon"
              style={{
                backgroundImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/EMmnLoRL8Wk.png)",
                backgroundPosition: "0px -37px",
                opacity: ".6",
                marginLeft: "10px",
              }}
            ></i>
            <span
              style={{
                color: "#64666b",
                fontSize: "14px",
              }}
            >
              Switch into page
            </span>
          </NavLink>
          <NavLink classname="pageAndProfileIcon">
            <i
              data-visualcompletion="css-img"
              class="switchIcon"
              style={{
                backgroundImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/uO0R0IXRqhI.png)",
                backgroundPosition: "0 -247px",
                backgroundSize: "auto",
                opacity: ".6",
                marginLeft: "10px",
              }}
            ></i>
            <span
              style={{
                color: "#64666b",
                fontSize: "14px",
              }}
            >
              Create Promosion
            </span>
          </NavLink>
        </div>
        <div className="rightsidebarBirthday">
          <h3>Birthdays</h3>
          <NavLink classname="pageAndProfileIcon">
            <i
              data-visualcompletion="css-img"
              class="x1b0d499 xl1xv1r"
              style={{
                height: "36px",
                width: "45px",
                backgroundImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/uO0R0IXRqhI.png)",
                backgroundPosition: "0 0",
                backgroundSize: "auto",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
                transform: "scale(.8)",
              }}
            ></i>
            <span>
              <b>Bristi Das</b> and <b>@ Others</b> have their birthdays today.
            </span>
          </NavLink>
        </div>
        <div className="rightsidebarContact">
          <h3>Contact</h3>
          <NavLink>
            <img alt="" className="shortcutsImg circle" src={FacebookPage} />
            <span>Everyone is Artist</span>
          </NavLink>
          {data
            .slice(20, 40)
            .map(({ name: { first, last }, picture: { thumbnail } }, index) => (
              <NavLink key={index}>
                <img alt="" className="shortcutsImg circle" src={thumbnail} />
                <span>
                  {first} {last}
                </span>
              </NavLink>
           ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;

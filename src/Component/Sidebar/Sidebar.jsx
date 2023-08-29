import { NavLink } from "react-router-dom";
import profile from "./profile.jpg";
import { useState } from "react";
import FacebookPage from "./page.jpg"
export const Sidebar = () => {
  const [showmore, setshowmore] = useState(true);
  let showmorefun = () => {
    setshowmore(!showmore);
  };
  const handleClick = (index) => {
    // Update the activeIndex value in sessionStorage
    sessionStorage.setItem('activeIndex', index);
  };
  return (
    <>
      <div className="sidebar col-3 d-none d-lg-block p-0">
        <div className="sidebarContainer">
          <div className={!showmore ? "sidebarMenu fullmenu" : "sidebarMenu"}>
            <NavLink classname="menulink " to='/profile' onClick={()=>handleClick(null)}>
              <img src={profile} alt="" className="me-1 profile" />
              <span className="ms-2">Sû Jøy</span>
            </NavLink>
            <NavLink classname="menulink">
              <i
                data-visualcompletion="css-img"
                class="linkicon"
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png)",
                  backgroundPosition: " 0 -296px",
                }}
              ></i>
              <span>Friends</span>
            </NavLink>
            
            <NavLink classname="menulink" to='/video' onClick={()=>handleClick(2)}>
              <i
                data-visualcompletion="css-img"
                class=""
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')",
                  backgroundPosition: "0 -518px",
                }}
              ></i>
              <span>Video</span>
            </NavLink>
            <NavLink classname="menulink" to="/groups" onClick={()=>handleClick(4)}>
              <i
                data-visualcompletion="css-img"
                class=""
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')",
                  backgroundPosition: "0 -37px",
                }}
              ></i>
              <span>Groups</span>
            </NavLink>
            <NavLink classname="menulink" to='/marketplace' onClick={()=>handleClick(3)}>
              <i
                data-visualcompletion="css-img"
                class=""
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')",
                  backgroundPosition: "0px -407px",
                }}
              ></i>
              <span>Marketplace</span>
            </NavLink>
            <NavLink classname="menulink" to="/games" onClick={()=>handleClick(5)}>
              <i
                data-visualcompletion="css-img"
                class=""
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png)",
                  backgroundPosition: "0px -74px",
                }}
              ></i>
              <span>Play Games</span>
            </NavLink>
            <NavLink classname="menulink feeds">
              <img
                draggable="false"
                height="34"
                width="34"
                alt=""
                className="ms-1"
                referrerpolicy="origin-when-cross-origin"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png"
                style={{ transform: "scale(0.85)" }}
              />
              <span className="">Feeds</span>
            </NavLink>
            <NavLink classname="menulink">
              <i
                data-visualcompletion="css-img"
                class=""
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')",
                  backgroundPosition: "0 -444px",
                }}
              ></i>
              <span>Memories</span>
            </NavLink>
            <NavLink classname="menulink">
              <i
                data-visualcompletion="css-img"
                class=""
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')",
                  backgroundPosition: "0 -185px",
                }}
              ></i>
              <span>Saved</span>
            </NavLink>
           
            <NavLink classname="menulink">
              <img
                draggable="false"
                height="34"
                width="34"
                alt=""
                referrerpolicy="origin-when-cross-origin"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png"
              />
              <span>Add Centre</span>
            </NavLink>
            <NavLink classname="menulink">
              <img
                draggable="false"
                height="34"
                width="34"
                alt=""
                referrerpolicy="origin-when-cross-origin"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/ATlxuj_J5ty.png"
              />
              <span>Add Manager</span>
            </NavLink>

            <NavLink classname="menulink">
              <i
                data-visualcompletion="css-img"
                class=""
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/z3JoyCWlf8g.png')",
                  backgroundPosition: "-722px -175px",
                }}
              ></i>
              <span>Blood Donations</span>
            </NavLink>
            <NavLink classname="menulink">
              <img
                draggable="false"
                height="34"
                width="34"
                alt=""
                referrerpolicy="origin-when-cross-origin"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png"
              />
              <span>Climate Science Center</span>
            </NavLink>
            <NavLink classname="menulink">
              <img
                draggable="false"
                height="34"
                width="34"
                alt=""
                referrerpolicy="origin-when-cross-origin"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/fNPcDZC-2PD.png"
              />
              <span>Crisis Response</span>
            </NavLink>
            <NavLink classname="menulink">
              <i
                data-visualcompletion="css-img"
                class=""
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/WMOYDeEqIYv.png')",
                  backgroundPosition: " 0px 0px",
                }}
              ></i>
              <span>Events</span>
            </NavLink>
            <NavLink classname="menulink">
              <i
                data-visualcompletion="css-img"
                class=""
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')",
                  backgroundPosition: "0px -333px",
                }}
              ></i>
              <span>Fundraisers</span>
            </NavLink>

            <NavLink classname="menulink">
              <img
                draggable="false"
                height="34"
                width="34"
                alt=""
                referrerpolicy="origin-when-cross-origin"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/fGWbDwbx9W4.png"
              />
              <span>Gaming video</span>
            </NavLink>

            <NavLink classname="menulink">
              <i
                data-visualcompletion="css-img"
                class=""
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/c8V8xHZdLNj.png)",
                  backgroundPosition: " 0px 0px",
                }}
              ></i>
              <span>Messanger</span>
            </NavLink>
            <NavLink classname="menulink">
              <img
                draggable="false"
                height="34"
                width="34"
                alt=""
                referrerpolicy="origin-when-cross-origin"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/6Z9DShdc7zU.png"
              />
              <span>Messanger Kids</span>
            </NavLink>
            <NavLink classname="menulink">
              <i
                data-visualcompletion="css-img"
                class=""
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png)",
                  backgroundPosition: "0px -111px",
                }}
              ></i>
              <span>Pages</span>
            </NavLink>
          
            <NavLink classname="menulink">
              <img
                draggable="false"
                height="34"
                width="34"
                alt=""
                referrerpolicy="origin-when-cross-origin"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/x2_LFd7gCqg.png"
              />
              <span>Recent Add Activity</span>
            </NavLink>
            <NavLink
              className={
                showmore
                  ? "showmoreActive menulink showmore"
                  : "showmore menulink"
              }
              onClick={() => showmorefun()}
            >
              <div className="showmoreIcon">
               {showmore? <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo"
                >
                  <g fillRule="evenodd" transform="translate(-448 -544)">
                    <path
                      fillRule="nonzero"
                      d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
                    ></path>
                  </g>
                </svg>:<svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo"><path d="M15.47 12.2 10 6.727 4.53 12.2a.75.75 0 0 1-1.06-1.061l6-6a.751.751 0 0 1 1.06 0l6 6a.75.75 0 0 1-1.06 1.061z"></path></svg>}
              </div>
              <span>{showmore?'See more':"See less"}</span>
            </NavLink>
          </div>
          <div className="shortCurts">
            <h3>Your Shortcuts</h3>
            <NavLink>
              <img
                alt=""
                className="shortcutsImg"
                src="https://scontent-ccu1-2.xx.fbcdn.net/v/t1.6435-9/44282981_358203778250824_1829646434484355072_n.jpg?stp=c23.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=qyps79jN4FQAX98UJx8&_nc_ht=scontent-ccu1-2.xx&oh=00_AfC3z8mvVK2WeoIz5_EER9lAzXWBe4Ic-ZRQfDQr5Yl9vw&oe=64F12857"
              />
              <span>Front - End - Developer</span>
            </NavLink>
            <NavLink>
              <img
                alt=""
                className="shortcutsImg"
                src="https://scontent-ccu1-2.xx.fbcdn.net/v/t1.6435-9/103009408_2942697682473636_696765981720051712_n.jpg?stp=c23.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=TIYm6ulZ6nAAX-YwXqc&_nc_ht=scontent-ccu1-2.xx&oh=00_AfD_Hao_9MmaTRlUQk5MGnXafPhkbDFMiITOtm8jS8N-MA&oe=64F142A3"
              />
              <span>Freelancer Bangladesh</span>
            </NavLink>
            <NavLink>
              <img
                alt=''
                className="shortcutsImg circle"
                src={FacebookPage}
              />
              <span>S.G</span>
            </NavLink>

            <span className="sidebarFooter">
              Privacy · Terms · Advertising · Ad choices  
               <i
                data-visualcompletion="css-img"
                class="x1b0d499 x1d69dk1"
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/eKbbhUjvYo3.png)",
                  backgroundPosition: "-51px -143px",
                  backgroundSize: "auto",
                  width: "12px",
                  height: "10px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                  opacity:'.6',
                  margin:'0px 2px'
                }}
              ></i> 
                · Cookies · More · Meta © 2023
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

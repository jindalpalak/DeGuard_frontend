import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SideBar from "../components/SideBar";
import Avatar from "../components/Avatar";
import { useSelector } from 'react-redux';
import { persistor } from "../redux/store";
import { useDispatch } from 'react-redux';
import { FaBars } from "react-icons/fa";
import { toast } from "react-toastify";
import { _logOut } from "../redux/action/user.action";

const Home = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const avatarRef = useRef(null);
  const { userDetail } = useSelector((state) => state.user);
  const firstName = userDetail ? `${userDetail?.email}` : "";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      dispatch(_logOut());
      persistor.purge();
      navigate("/login");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="header-container">
        <div className="header">
          <div className="logo-wrapper">
            <div onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
              <FaBars />
            </div>
            <span className="logo"></span>
          </div>
          <div className='avatar'>
            <Avatar 
              name={firstName || ""} 
              onClick={()=> setShowMenu(!showMenu)}
            />
            {showMenu && 
              <ul className='avatar-dropdown'>
                <li onClick={() => logout()}>Logout</li>
              </ul>
            }
          </div>
        </div>
      </div>
      <div
        className={`main-container ${
          isSidebarVisible ? "sidebar-visible" : ""
        }`}
      >
        {isSidebarVisible && <SideBar />}
        <div className="content-body">
          <Outlet context={{ isSidebarVisible }}/>
        </div>
      </div>
    </div>
  );
};

export default Home;

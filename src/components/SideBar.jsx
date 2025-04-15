import { activeSidebar, rootSidebarData } from "../routes/sidebarData";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Sidebar = (({ onClick, className }) => {
  const location = useLocation();
  const sidebarData = rootSidebarData();

  return (
    <div className={`sidebar-container ${className}`}>
      <ul>
        {sidebarData?.map((item, index) => {
          const isActive = activeSidebar[item.path]?.some((path) => location.pathname?.includes(path));

          return (
            <li
              key={index}
              className={`${isActive ? "active" : ""}`}
              onClick={() => onClick && onClick()}
            >
              <Link to={item.path} className="sidebar-link">
                {item.label}
                <FaArrowRight className="sidebar-icon" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
);

export default Sidebar;

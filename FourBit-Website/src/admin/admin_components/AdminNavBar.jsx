import { useContext } from "react";
import { ThemeContext } from "../../App";
import FourbitLogoWhite from "../../assets/4bitlogowhite.png";
import FourbitLogoBlack from "../../assets/4bitlogoblack.png";
import { IoHome, IoSettings } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { CgCopyright } from "react-icons/cg";
import "./AdminNavBar.css";
import { Link } from "react-router-dom";

const AdminNavBar = ( {isNavVisible} ) => {

  const [light] = useContext(ThemeContext)

  return (
    <div className= {isNavVisible ? "navBar" : "navBar-hidden"}>
      <div className="admin-top">
        <div className="admin-logo">
          <img src={light?FourbitLogoBlack:FourbitLogoWhite} className="admin-logo-img" alt="4bitLogo" />
          <h1 className="logo-text">DashBoard</h1>
        </div>
      </div>
      <nav>
        <li>
          <Link to="/admin">
            <IoHome />
            Home
          </Link>
        </li>
        <li>
          <Link to="/admin/projects">
            <GrProjects />
            Projects
          </Link>
        </li>
        <li>
          <Link to="/admin/users">
            <FaUserCircle />
            Users
          </Link>
        </li>
        <li>
          <Link to="/admin/orders">
            <FaCartFlatbedSuitcase />
            Order
          </Link>
        </li>
        <li>
          <Link to="/admin/settings">
            <IoSettings />
            Account Setting
          </Link>
        </li>
      </nav>
      <div className="footer">
        <p>
          <CgCopyright />
          FourBit
        </p>
      </div>
    </div>
  );
};

export default AdminNavBar;

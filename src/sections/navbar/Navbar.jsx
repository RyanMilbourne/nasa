import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBarStyles.scss";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PhoneEnabledRoundedIcon from "@mui/icons-material/PhoneEnabledRounded";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navRef = useRef();

  const showNavbar = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setMobileMenu(false);
    }
  };

  const closeNavBar = () => {
    if (isMobile) {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const iconStyle = {
    width: "1rem",
    height: "1rem",
  };

  return (
    <header className="nav-header">
      <Link to="/">
        <div className="nav-logo-wrapper">add logo here</div>
      </Link>
      <div className="nav-options-container">
        {isMobile && (
          <div className="mobile-menu-button" onClick={showNavbar}>
            <MenuRoundedIcon />
          </div>
        )}
        <nav
          className={`nav-links-wrapper ${mobileMenu ? "show" : ""}`}
          ref={navRef}
        >
          {isMobile && (
            <NavLink to="/" className="nav-link" onClick={closeNavBar}>
              add logo here
            </NavLink>
          )}

          <NavLink to="/about" className="nav-link" onClick={closeNavBar}>
            about
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeNavBar}>
            contact
          </NavLink>
          <NavLink to="/page" className="nav-link" onClick={closeNavBar}>
            page
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

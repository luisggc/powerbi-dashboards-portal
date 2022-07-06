import { Link, useLocation } from "react-router-dom";
import {
  DashboardIcon,
  CaretDownIcon,
  HamburgerMenuIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

export default function NavButton({ children, Icon, label, to = "" }) {
  const router = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isCurrentRouter = router.pathname === "/" + to;

  const toggleChildren = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Link to={to} style={{ color: "inherit" }} onClick={toggleChildren}>
        <div className={`nav-button ${isCurrentRouter ? "active" : ""}`}>
          <div className="nav-button-selected"></div>
          <div className="nav-icon">{Icon ? <Icon height={25} width={25} /> : <></>}</div>
          <p>{label}</p>
          <div className="nav-icon-arrow" style={{ transform: isOpen ?  'rotate(180deg)' : 'rotate(0deg)'}}>
            {children ? <CaretDownIcon height={25} width={25} /> : <></>}
          </div>
        </div>
      </Link>
      <div style={{ display: isOpen ? "block" : "none", marginLeft: 25 }}>{children}</div>
    </>
  );
}

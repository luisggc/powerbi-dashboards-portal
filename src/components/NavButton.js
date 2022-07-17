import { useLocation, useNavigate } from "react-router-dom";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function NavButton({ children, Icon, label, to }) {
  const router = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const isCurrentRouter = to !== undefined ? router.pathname === "/" + encodeURI(to) : false;

  const toggleChildren = () => {
    if (children) {
      setIsOpen((prev) => !prev);
      return;
    }
    navigate(to);
  };

  return (
    <>
      <a style={{ color: "inherit" }} onClick={toggleChildren}>
        <div className={`nav-button ${isCurrentRouter ? "active" : ""}`}>
          <div className="nav-button-selected"></div>
          <div className="nav-icon">{Icon ? <Icon height={25} width={25} /> : <></>}</div>
          <p>{label}</p>
          <div
            className="nav-icon-arrow"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            {children?.length > 0 ? <CaretDownIcon height={25} width={25} /> : <></>}
          </div>
        </div>
      </a>
      <div style={{ display: isOpen ? "block" : "none", marginLeft: 25 }}>{children}</div>
    </>
  );
}

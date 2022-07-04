import { Link, useLocation } from "react-router-dom";

export default function NavButton({ children, Icon, to = "" }) {
  const router = useLocation();

  const isCurrentRouter = router.pathname === "/" + to;

  return (
    <Link to={to} style={{ color: "inherit" }}>
      <div className={`nav-button ${isCurrentRouter ? "active" : ""}`}>
        <div className="nav-button-selected"></div>
        <div className="nav-icon">
          <Icon height={25} width={25} />
        </div>

        {children}
      </div>
    </Link>
  );
}

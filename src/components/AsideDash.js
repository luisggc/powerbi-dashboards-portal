import NavButton from "./NavButton";
import "./asideDash.css";
import { HomeIcon } from "@radix-ui/react-icons";

function AsideDash({ opened = true, items }) {
  return (
    <aside className="aside-dash" hidden={!opened}>
      <div className="aside-dash-container">
        <NavButton to={""} Icon={HomeIcon}>
          Home
        </NavButton>
        {items.map((workspace) => {
          const { name, id, path, Icon } = workspace;
          return (
            <NavButton key={id} to={path} Icon={Icon}>
              {name}
            </NavButton>
          );
        })}
      </div>
    </aside>
  );
}

export default AsideDash;

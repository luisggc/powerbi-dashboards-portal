import NavButton from "./NavButton";
import { HomeIcon } from "@radix-ui/react-icons";

function AsideDash({ opened = true, items }) {
  return (
    <aside className="aside-dash" hidden={!opened}>
      <div className="aside-dash-container">
        <NavButton to={""} Icon={HomeIcon} label="Home" />
        {items.map((workspace) => {
          const { name, id, Icon, dashboards } = workspace;
          return (
            <NavButton key={id} Icon={Icon} label={name}>
              {dashboards ? (
                Object.entries(dashboards)?.map(([dashboardName, dashboardLink]) => (
                  <NavButton
                    key={dashboardName}
                    to={dashboardName}
                    label={dashboardName}
                  />
                ))
              ) : (
                <></>
              )}
            </NavButton>
          );
        })}
      </div>
    </aside>
  );
}

export default AsideDash;

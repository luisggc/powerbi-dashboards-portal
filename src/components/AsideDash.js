import NavButton from "./NavButton";
import './asideDash.css';

function AsideDash({ opened=true, items }) {
  return (
    <aside className="aside-dash" hidden={!opened}>
      <div>
        {items.map((workspace) => {
          const { name, id, path } = workspace;
          return (
            <div key={id} className="accordion">
              <div>
                <NavButton to={path}>{name}</NavButton>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default AsideDash;

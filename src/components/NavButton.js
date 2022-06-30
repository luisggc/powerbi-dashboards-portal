import { Link } from "react-router-dom";

export default function NavButton({ children, to = "", disableDivider }) {
  return (
    <Link to={to}>
      <div>
        <div>
          <div
            styles={{
              display: "flex",
              alignContent: "flex-start",
            }}
          >
            <div></div>

            <p weight={500} styles={{ userSelect: "none" }}>
              {children}
            </p>
          </div>
        </div>
      </div>
      {!disableDivider && <Divider />}
    </Link>
  );
}

const Divider = () => {
  return (
    <div
      styles={{
        borderTop: "1px solid",
        borderColor: "gray.1",
        marginTop: "16px",
        marginBottom: "16px",
      }}
    />
  );
};

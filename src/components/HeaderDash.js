import "./headerDash.css";
import { CaretDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import LanguageSelector from "./LanguageSelector";

function HeaderDash({ setOpened, opened, theme }) {
 


  return (
    <header className="headerDash">
      <div className="logo">
        <h4>Icon</h4>
      </div>

      <div>
        <div className="right-header">
        <LanguageSelector />
        </div>
        {/* <div className="burgerIcon">
          <HamburgerMenuIcon />
          <div opened={opened} onClick={() => setOpened((o) => !o)} size="sm" mr="xl" />
        </div> */}
      </div>
    </header>
  );
}

export default HeaderDash;

import "./headerDash.css";
import {
  DashboardIcon,
  CaretDownIcon,
  HamburgerMenuIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import LanguageSelector from "./LanguageSelector";

function HeaderDash({ setOpened, opened, theme }) {
  return (
    <header className="headerDash">
      <div className="logo">
        <div>
          <DashboardIcon height={23} width={23} />
        </div>
        <div>
          <h2>MyDash</h2>
        </div>
      </div>

      <div>
        <div className="right-header">
          <LanguageSelector />
          <div className="github-logo">
            <a href="https://github.com/luisggc/powerbi-dashboards-portal">
              <GitHubLogoIcon height={23} width={23} />
            </a>
          </div>
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

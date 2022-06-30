import './headerDash.css';
import { CaretDownIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'

function HeaderDash({ setOpened, opened, theme }) {

  const selectLanguage = (language) => {
    //localStorage.setItem("language", "pt");
  }
  
  return (
    <header className="headerDash">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        
        <div>
          <h4>Icon</h4>
        </div>
        <div>
          <div
            onClick={() => selectLanguage()}
          >
            <select></select>
            <CaretDownIcon />
          </div>
        </div>
        <div className="burgerIcon" styles={{ display: "none" }}>
          <HamburgerMenuIcon />
          <div
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            mr="xl"
          />
        </div>
      </div>
    </header>
  );
}

export default HeaderDash;

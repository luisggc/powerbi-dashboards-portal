import { ReactComponent as EnIcon } from "../assets/en.svg";
import { ReactComponent as PtIcon } from "../assets/pt.svg";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const languageData = {
  pt: {
    Icon: PtIcon,
  },
  en: {
    Icon: EnIcon,
  },
};

export default function LanguageSelector() {
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);
  const [openLanguageSelector, setOpenLanguageSelector] = useState(false);
  const selectLanguage = (language) => {
    setCurrentLanguage(language);
    setOpenLanguageSelector((s) => !s);
  };

  const CurrentLanguageIcon = languageData[currentLanguage].Icon;

  return (
    <div>
      <div onClick={() => setOpenLanguageSelector((v) => !v)}>
        <CurrentLanguageIcon />
      </div>
      <div
        className="language-selector"
        style={{ display: openLanguageSelector ? "flex" : "none" }}
      >
        {Object.keys(languageData).map((language) => {
          const { Icon } = languageData[language];
          return (
            <div
              key={language}
              className={`language-option ${language === currentLanguage ? "active" : ""}`}
              onClick={() => selectLanguage(language)}
            >
              <Icon />
            </div>
          );
        })}
      </div>
    </div>
  );
}

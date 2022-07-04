import AsideDash from "./components/AsideDash";
import HeaderDash from "./components/HeaderDash";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DemoApp from "./components/DemoApp";
import { LanguageContext } from "./context/LanguageContext";
import { useContext } from "react";
import { EyeOpenIcon, LockClosedIcon, HeartIcon } from "@radix-ui/react-icons";

function Dashboard() {
  const { currentLanguage } = useContext(LanguageContext);

  let workspaces = [
    {
      name: "iris DataExplore",
      id: "workspace-1asd",
      language: "pt",
      Icon: EyeOpenIcon,
      dashboards: {
        Eventos: "https://playgroundbe-bck-1.azurewebsites.net/Reports/SampleReport",
        Inspeções: "https://playgroundbe-bck-1.azurewebsites.net/Reports/SampleReport",
        FMDS: "https://playgroundbe-bck-1.azurewebsites.net/Reports/SampleReport",
      },
    },
    {
      name: "iris DataExplore",
      id: "workspace-ASDASDSA",
      Icon: EyeOpenIcon,
      language: "en",
    },

    {
      name: "Segurança",
      id: "workspace-dd1asd",
      Icon: LockClosedIcon,
      language: "pt",
    },
    {
      name: "Safety",
      id: "workspace-ASDASddddddDSA",
      Icon: LockClosedIcon,
      language: "en",
    },
    {
      name: "Saúde",
      id: "workspace-1asdfsdfdssd",
      Icon: HeartIcon,
      language: "pt",
    },
    {
      name: "Health",
      id: "workspace-dsdsddds",
      Icon: HeartIcon,
      language: "en",
    },
  ];

  workspaces = workspaces.map((w) => ({
    ...w,
    path: encodeURI(w.name),
  }));

  const workspaces_lang = workspaces.filter((w) => w.language === currentLanguage);

  return (
    <BrowserRouter>
      <HeaderDash />
      <AsideDash items={workspaces_lang} />
      <div className="main-dash">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <p>indexx</p>
              </div>
            }
          />
          {workspaces.map((workspace) => {
            const { id, path } = workspace;
            return <Route key={id} path={path} element={<DemoApp {...workspace} />} />;
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;

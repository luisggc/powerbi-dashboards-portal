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
        Inspeções: "https://aka.ms/InsightToActionReportEmbedConfig",
        Rotina: "https://aka.ms/ThemeReportEmbedConfig",
      },
    },
    {
      name: "iris DataExplore",
      id: "workspace-ASDASDSA",
      Icon: EyeOpenIcon,
      language: "en",
      dashboards: {
        Events: "https://playgroundbe-bck-1.azurewebsites.net/Reports/SampleReport",
        Inspections: "https://aka.ms/InsightToActionReportEmbedConfig",
        Routine: "https://aka.ms/ThemeReportEmbedConfig",
      },
    },
    {
      name: "Segurança",
      id: "workspace-dd1asd",
      Icon: LockClosedIcon,
      language: "pt",
      dashboards: {
        Requisitos: "https://aka.ms/layoutReportEmbedConfig",
      },
    },
    {
      name: "Safety",
      id: "workspace-ASDASddddddDSA",
      Icon: LockClosedIcon,
      language: "en",
      dashboards: {
        Requirements: "https://aka.ms/layoutReportEmbedConfig",
      },
    },
    {
      name: "Saúde",
      id: "workspace-1asdfsdfdssd",
      Icon: HeartIcon,
      language: "pt",
      dashboards: {
        Absenteísmo: "https://aka.ms/InsightToActionReportEmbedConfig",
      },
    },
    {
      name: "Health",
      id: "workspace-dsdsddds",
      Icon: HeartIcon,
      language: "en",
      dashboards: {
        Absenteeism: "https://aka.ms/InsightToActionReportEmbedConfig",
      },
    },
  ];

  // workspaces = workspaces.map((w) => ({
  //   ...w,
  //   path: encodeURI(w.name),
  // }));

  let dashboards = workspaces.map((w) => w.dashboards);
  dashboards = dashboards.reduce((p, c) => ({ ...c, ...p }), {});
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
          {Object.entries(dashboards).map(([dashKey, daskLink]) => {
            console.log(dashboards, daskLink);
            return (
              <Route
                key={dashKey}
                path={encodeURI(dashKey)}
                element={<DemoApp dashKey={dashKey} daskLink={daskLink} />}
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;

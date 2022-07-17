import AsideDash from "./components/AsideDash";
import HeaderDash from "./components/HeaderDash";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DemoApp from "./components/DemoApp";
import { LanguageContext } from "./context/LanguageContext";
import { useContext } from "react";
import { EyeOpenIcon, LockClosedIcon, HeartIcon } from "@radix-ui/react-icons";
import ReadMe from "./ReadMe";

function Dashboard() {
  const { currentLanguage } = useContext(LanguageContext);

  let workspaces = [
    {
      name: "Risco Operacional",
      id: "workspace-rfbr93ubfr93",
      language: "pt",
      Icon: EyeOpenIcon,
      dashboards: {
        Eventos: "https://playgroundbe-bck-1.azurewebsites.net/Reports/SampleReport",
        Inspeções: "https://aka.ms/InsightToActionReportEmbedConfig",
        Rotina: "https://aka.ms/ThemeReportEmbedConfig",
      },
    },
    {
      name: "Operational Risk",
      id: "workspace-swf39398453f9h",
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
      id: "workspace-fdne393nf394t",
      Icon: LockClosedIcon,
      language: "en",
      dashboards: {
        Requirements: "https://aka.ms/layoutReportEmbedConfig",
      },
    },
    {
      name: "Saúde",
      id: "workspace-938nyf9349fyn394",
      Icon: HeartIcon,
      language: "pt",
      dashboards: {
        Absenteísmo: "https://aka.ms/InsightToActionReportEmbedConfig",
      },
    },
    {
      name: "Health",
      id: "workspace-n3f09fgn4398fn3",
      Icon: HeartIcon,
      language: "en",
      dashboards: {
        Absenteeism: "https://aka.ms/InsightToActionReportEmbedConfig",
      },
    },
  ];

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
            element={<ReadMe />}
          />
          {Object.entries(dashboards).map(([dashKey, daskLink]) => {
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

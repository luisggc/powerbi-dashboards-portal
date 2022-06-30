import AsideDash from "./components/AsideDash";
import HeaderDash from "./components/HeaderDash";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DemoApp from "./components/DemoApp";

function Dashboard() {
  const language = "pt";

  let workspaces = [
    {
      name: "iris DataExplore",
      id: "workspace-1asd",
      language: "pt",
    },
    {
      name: "iris DataExplore",
      id: "workspace-ASDASDSA",
      language: "en",
    },

    {
      name: "Segurança",
      id: "workspace-dd1asd",
      language: "pt",
    },
    {
      name: "Safety",
      id: "workspace-ASDASddddddDSA",
      language: "en",
    },
    {
      name: "Saúde",
      id: "workspace-1asdfsdfdssd",
      language: "pt",
    },
    {
      name: "Health",
      id: "workspace-dsdsddds",
      language: "en",
    },
  ];

  workspaces = workspaces.map((w) => ({
    ...w,
    path: encodeURI(w.name),
  }));

  const workspaces_lang = workspaces.filter((w) => w.language === language);

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

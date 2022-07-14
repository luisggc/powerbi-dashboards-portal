import React, { useState, useEffect, useCallback } from "react";
import { models } from "powerbi-client";
import { PowerBIEmbed } from "powerbi-client-react";
import "powerbi-report-authoring";
import "./DemoApp.css";

// Root Component to demonstrate usage of wrapper component
function DemoApp({ dashKey, daskLink }) {
  // PowerBI Report object (to be received via callback)
  const [report, setReport] = useState();

  // Fetch sample report's config (eg. embedUrl and AccessToken) for embedding
  const mockSignIn = useCallback(async () => {
    // Fetch sample report's embed config
    const reportConfigResponse = await fetch(sampleReportUrl);

    if (!reportConfigResponse.ok) {
      console.error(
        `Failed to fetch config for report. Status: ${reportConfigResponse.status} ${reportConfigResponse.statusText}`
      );
      return;
    }

    const reportConfig = await reportConfigResponse.json();

    // Update display message
    setMessage("The access token is successfully set. Loading the Power BI report");

    // Set the fetched embedUrl and embedToken in the report config
    setReportConfig((s) => ({
      ...s,
      embedUrl: reportConfig.EmbedUrl,
      accessToken: reportConfig.EmbedToken.Token,
    }));
  }, []);

  useEffect(() => {
    mockSignIn();
  }, [mockSignIn]);

  // API end-point url to get embed config for a sample report
  // const sampleReportUrl = "https://playgroundbe-bck-1.azurewebsites.net/Reports/SampleReport";
  const sampleReportUrl = daskLink //"https://aka.ms/InsightToActionReportEmbedConfig";
  //https://aka.ms/ThemeReportEmbedConfig
  //"https://aka.ms/layoutReportEmbedConfig";
  //const insightToActionReportEndpoint = "https://aka.ms/InsightToActionReportEmbedConfig";

  // Report config useState hook
  // Values for properties like embedUrl, accessToken and settings will be set on click of buttons below
  const [sampleReportConfig, setReportConfig] = useState({
    type: "report",
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined,
    settings: undefined,
  });

  // Map of event handlers to be applied to the embedding report
  const eventHandlersMap = new Map([
    [
      "loaded",
      function () {
        console.log("Report has loaded");
      },
    ],
    [
      "rendered",
      function () {
        console.log("Report has rendered");

        // Update display message
        setMessage("The report is rendered");
      },
    ],
    [
      "error",
      function (event) {
        if (event) {
          console.error(event.detail);
        }
      },
    ],
  ]);

  const changeSettings = () => {
    // Update the state "sampleReportConfig" and re-render DemoApp component
    setReportConfig((sampleReportConfig) => ({
      ...sampleReportConfig,
      settings: {
        panes: {
          filters: {
            expanded: !sampleReportConfig?.settings?.panes?.filters?.expanded,
            visible: !sampleReportConfig?.settings?.panes?.filters?.visible,
          },
        },
      },
    }));
  };

  // Delete the first visual using powerbi-report-authoring library
  const deleteVisual = async () => {
    if (!report) {
      console.log("Report not available");
      return;
    }

    const activePage = await getActivePage(report);

    if (!activePage) {
      console.log("No active page");
      return;
    }

    // Get all visuals in the active page
    const visuals = await activePage.getVisuals();

    if (visuals.length === 0) {
      console.log("No visual left");
      return;
    }

    // Get first visible visual
    const visual = visuals.find((v) => {
      return v.layout.displayState?.mode === models.VisualContainerDisplayMode.Visible;
    });

    // No visible visual found
    if (!visual) {
      console.log("No visible visual available to delete");
      return;
    }

    try {
      // Documentation link: https://github.com/microsoft/powerbi-report-authoring/wiki/Visualization
      // Delete the visual
      await activePage.deleteVisual(visual.name);

      console.log("Visual was deleted");
    } catch (error) {
      console.error(error);
    }
  };

  async function getActivePage(powerbiReport) {
    const pages = await powerbiReport.getPages();

    // Get the active page
    const activePage = pages.filter(function (page) {
      return page.isActive;
    })[0];

    return activePage;
  }

  const [displayMessage, setMessage] = useState(
    `The report is bootstrapped. Click the Embed Report button to set the access token`
  );

  const controlButtons = (
    <div className="controls">
      <button onClick={changeSettings}>Hide filter pane</button>

      <button onClick={deleteVisual}>Delete a Visual</button>
    </div>
  );

  return (
    <div>
      <PowerBIEmbed
        embedConfig={sampleReportConfig}
        eventHandlers={eventHandlersMap}
        cssClassName={"report-style-class"}
        getEmbeddedComponent={(embedObject) => {
          console.log(`Embedded object of type "${embedObject.embedtype}" received`);
          setReport(embedObject);
        }}
      />

      <div className="hr"></div>

      <div className="displayMessage">{displayMessage}</div>

      {controlButtons}
    </div>
  );
}

export default DemoApp;

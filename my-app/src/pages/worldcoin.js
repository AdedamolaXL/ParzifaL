

import { utils } from "@worldcoin/id";
import { WidgetProps, WorldIDWidget } from "@worldcoin/id";
import { useEffect } from "react";


const widgetProps = {
  actionId: "wid_staging_aa1f35d5dc7332e4dc2d53e978d5c87f",
  signal: "user-id-1",
  enableTelemetry: true,
  appName: "parzifalHunt",
  signalDescription: "Generate your unique quest-phrase",
  theme: "dark",
  debug: true, // Recommended **only** for development
  onSuccess: (result) => console.log(result),
  onError: ({ code, detail }) => console.log({ code, detail }),
  onInitSuccess: () => console.log("Init successful"),
  onInitError: (error) => console.log("Error while initialization World ID", error),
};

function Worldcoin() {
  return (
    <div className="App">
      <header className="App-header">
        <p>World ID</p>
        {/* World ID component below */}
        <WorldIDWidget {...widgetProps} />
      </header>
    </div>
  );
}

export default Worldcoin;
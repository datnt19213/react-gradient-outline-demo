import React from "react";
import "./App.css";
import {Gline} from "gradient-outline";

function App() {
  return (
    <div className="bg-red-200 w-full h-full">
      <Gline
        allowHover={true}
        borderRadius={8}
        id="gradient-outline"
        className="w-fit h-fit"
      >
        <div className="px-4 py-3">Hello World</div>
      </Gline>
    </div>
  );
}

export default App;

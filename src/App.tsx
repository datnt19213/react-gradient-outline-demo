import React from "react";
import "./App.css";
import {Gline} from "gradient-outline";

function App() {
  return (
    <div className="container">
      <Gline
        className="product-card"
        allowHover={true}
        borderRadius={8}
        id="gradient-outline-p-card"
      >
        <div className="">Hello World</div>
      </Gline>
      <div className="bg-card">
        <Gline
          className="product-card-down"
          allowHover={true}
          gradientColors={["#5a2fb6", "#9efff5"]}
          hoverGradientColors={["#ad7b30", "#5be3af"]}
          borderRadius={8}
          id="gradient-outline-p-card-down"
        >
          <div className="">Hello World</div>
        </Gline>
      </div>

      <Gline
        className="btn"
        allowHover={true}
        gradientColors={["#5a2fb6", "#9efff5"]}
        hoverGradientColors={["#ad7b30", "#5be3af"]}
        borderRadius={4}
        id="gradient-outline-button"
      >
        <div className="">Hello World</div>
      </Gline>
      <div className="bg-btn">
        <Gline
          className="btn-down"
          contentClass="btn-down-content"
          allowHover={true}
          gradientColors={["#5a2fb6", "#9efff5"]}
          hoverGradientColors={["#ad7b30", "#5be3af"]}
          borderRadius={4}
          id="gradient-outline-button-blur-down"
        >
          Hello World
        </Gline>
      </div>
    </div>
  );
}

export default App;

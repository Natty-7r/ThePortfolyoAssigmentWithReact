import React from "react";
import ReactDOM from "react-dom/client";
// // import AlexioHead from "./components/ui/AlexioHead";
import "./styles/globals.css";
import ContextProvider from "./utils/providers/context.provider";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import DataProvider from "./utils/providers/DataProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <DataProvider>
          {/* <AlexioHead /> */}
          <App />
        </DataProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

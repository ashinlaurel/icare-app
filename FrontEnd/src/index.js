import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./assets/css/tailwind.output.css";
import "./css/style.css";
import App from "./App";
import { SidebarProvider } from "./context/SidebarContext";
import { BottomBarProvider } from "./context/BottomBarContext";
import { TopBarProvider } from "./context/TopBarContext";
import ThemedSuspense from "./components/ThemedSuspense";
import { Windmill } from "@windmill/react-ui";
import * as serviceWorker from "./serviceWorker";

// if (process.env.NODE_ENV !== 'production') {
//   const axe = require('react-axe')
//   axe(React, ReactDOM, 1000)
// }

ReactDOM.render(
  <SidebarProvider>
    <TopBarProvider>
      <BottomBarProvider>
        <Suspense fallback={<ThemedSuspense />}>
          <Windmill usePreferences>
            <App />
          </Windmill>
        </Suspense>
      </BottomBarProvider>
    </TopBarProvider>
  </SidebarProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

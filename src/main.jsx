import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "./components/ui/provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <ThemeProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirstStepsApp } from "./FirstStepsApp";
import { MyAwesomeApp } from "./MyAwesomeApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <strong>Rama de desarrollo test -> Soy creado apartir de test develop</strong>
    <FirstStepsApp />
    <MyAwesomeApp />
  </StrictMode>
);

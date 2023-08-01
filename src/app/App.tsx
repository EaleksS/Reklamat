import { Route, Routes } from "react-router-dom";
import "./styles/_variables.scss";
import { Routing } from "./providers/Routing";
import { routes } from "../pages";
import "./styles/reset.min.css";

export const App = () => {
  return (
    <Routing>
      <Routes>
        {routes.map((e) => (
          <Route {...e} />
        ))}
      </Routes>
    </Routing>
  );
};

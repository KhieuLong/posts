import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { pulicRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {pulicRoutes.map((route, index) => (
          <Route key={index} element={route.element} path={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

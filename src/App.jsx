import MainPage from "./pages";
import { Route, Routes } from "react-router-dom";

function APP() {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />} />
    </Routes>
  );
}

export default APP;

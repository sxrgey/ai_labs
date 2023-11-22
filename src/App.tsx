import { Route, Routes } from "react-router-dom";
import { MainPage } from "./Pages/MainPage";
import { Lab1 } from "./Pages/Lab1";
import { Lab2 } from "./Pages/Lab2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/lab1" element={<Lab1 />} />
      <Route path="/lab2" element={<Lab2 />} />
    </Routes>
  );
}

export default App;

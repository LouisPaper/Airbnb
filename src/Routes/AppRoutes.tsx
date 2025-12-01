import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "../Components/header/Logo";
import Login from "../Components/Main/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

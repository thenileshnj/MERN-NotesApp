import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";
import SignupPage from "../pages/SignupPage";
import PrivateRoute from "./PrivateRoute";
import Navbar from "../components/Homepage/Navbar/Navbar";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<><Navbar/><Homepage /></>}></Route>
      <Route path="/register" element={<><Navbar/><SignupPage /></>}></Route>
      <Route path="/login" element={<><Navbar/><LoginPage /></>}></Route>
      <Route path="/notes" element={<PrivateRoute ><Navbar/><NotesPage /></PrivateRoute>}></Route>
    </Routes>
  );
}

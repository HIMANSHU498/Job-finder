import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddJobPage from "./pages/AddJobPage";
import JobsListingPage from "./pages/JobsListingPage";
import JobDetailsPage from "./pages/JobDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/addjob" element={<AddJobPage />} />
        <Route path="/jobslisting" element={<JobsListingPage />} />
        <Route path="/jobdetails" element={<JobDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

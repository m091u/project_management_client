// src/App.jsx

import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT

import Navbar from "./components/Navbar"; // <== IMPORT
import HomePage from "./pages/HomePage"; // <== IMPORT
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";
import EditTaskPage from "./pages/EditTaskPage"; //implement task edit
import TaskDetailsPage from "./pages/TaskDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/projects" element={<ProjectListPage />} />

        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />

        <Route path="/projects/edit/:projectId" element={<EditProjectPage />} />

        <Route path="/tasks/:taskId" element={<TaskDetailsPage />} />

        <Route path="/tasks/edit/:taskId" element={<EditTaskPage />} />
      </Routes>
    </div>
  );
}

export default App;

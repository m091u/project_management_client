// src/pages/ProjectListPage.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import AddProject from "../components/AddProject"; //  <== IMPORT

const API_URL = "http://localhost:4005";

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    axios
      .get(`${API_URL}/api/projects`)
      .then((response) => {
        console.log(response.data); // Log the response data
        setProjects(response.data)})
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="ProjectListPage">
      
      <AddProject refreshProjects={getAllProjects} />
      
      {/* Below: UPDATE */}
      { projects.map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))}     
       
    </div>
  );
}

export default ProjectListPage;

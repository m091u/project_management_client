// src/pages/ProjectDetailsPage.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const API_URL = "http://localhost:4005";

function TaskDetailsPage(props) {
  const [task, setTask] = useState(null);

  // Get the URL parameter `:taskId`
  const { taskId } = useParams();


  // Helper function that makes a GET request to the API
  // and retrieves the project by id
  const getTask = () => {
    //  <== ADD A NEW FUNCTION
    axios
      .get(`${API_URL}/api/tasks/${taskId}`)
      .then((response) => {
        const oneTask = response.data;
        console.log("Response from server:....", oneTask)
        setTask(oneTask);

      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // <== ADD AN EFFECT
    getTask();
  }, []);

  return (
    <div className="TaskDetails">
      {task && (
        <>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </>
      )}

      {/* <Link to={`/projects/${projectId}`}>
        <button>Back to Project</button>
      </Link> */}

      <Link to={`/tasks/edit/${taskId}`}>
        <button>Edit Task</button>
      </Link>
    </div>
  );
}

export default TaskDetailsPage;

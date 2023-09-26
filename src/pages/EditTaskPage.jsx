// src/pages/EditProjectPage.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:4005";

function EditTaskPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Get the URL parameter `:taskId`
  const { taskId } = useParams();
  const navigate = useNavigate();

  // This effect will run after the initial render and each time
  // the projectId coming from the URL parameter `projectId` changes

  useEffect(() => {
    // <== ADD
    axios
      .get(`${API_URL}/api/tasks/${taskId}`)
      .then((response) => {
        /* 
          We update the state with the project data coming from the response.
          This way we set inputs to show the actual title and description of the project
        */
        const oneTask = response.data;
        setTitle(oneTask.title);
        setDescription(oneTask.description);
      })
      .catch((error) => console.log(error));
  }, [taskId]);

  const handleFormSubmit = (e) => {
    // <== ADD
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { title, description };

    // Make a PUT request to update the project
    axios
      .put(`${API_URL}/api/tasks/${taskId}`, requestBody)
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the details page
        navigate(`/tasks/${taskId}`);
      });
  };

  const deleteTask = () => {
    //  <== ADD
    // Make a DELETE request to delete the project
    axios
      .delete(`${API_URL}/api/tasks/${taskId}`)
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of projects.
        navigate(`/projects/${projectId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditProjectPage">
      <h3>Edit the Task</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Task</button>
      </form>

      <button onClick={deleteTask}>Delete Task</button>
    </div>
  );
}

export default EditTaskPage;

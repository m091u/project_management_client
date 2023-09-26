// src/components/TaskCard.jsx
import { Link } from "react-router-dom";

// We are deconstructing the props object directly in the parentheses of the function
function TaskCard({ title, description, _id }) {
  return (
    <div className="TaskCard card">
      <Link to={`/tasks/${_id}`}>
        <h3>{title}</h3>
      </Link>

      <h5>Description: {description}</h5>
    </div>
  );
}

export default TaskCard;

import React, { useEffect, useState } from "react";
import { fetchTasks } from "../services/TaskAPI";


const TaskDashboard: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; title: string; completed: boolean }[]>([]);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  return (
    <div>
      <h2>Task Dashboard</h2>
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>{task.title} - {task.completed ? "✔" : "✘"}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;

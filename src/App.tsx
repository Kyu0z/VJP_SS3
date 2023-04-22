import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskList from "./components/Task/TaskList";

const App: React.FC = () => {
  return (
    <TaskProvider>
      <TaskList />
    </TaskProvider>
  );
};

export default App;

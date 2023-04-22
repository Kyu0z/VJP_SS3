import React, { useState } from "react";
import { useTasks } from "../../context/TaskContext";

const TaskList: React.FC = () => {
  // Lấy danh sách công việc từ Context Provider
  const { tasks, deleteTask, toggleCompleted } = useTasks();

  // Hàm xử lý sự kiện khi người dùng click vào checkbox đánh dấu công việc là hoàn thành
  const handleToggleCompleted = (id: number) => {
    toggleCompleted(id);
  };

  // Hàm xử lý sự kiện khi người dùng click vào button xóa công việc
  const handleDeleteTask = (id: number) => {
    deleteTask(id);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col bg-[#FFDBC9]">
      <h2 className="text-[#50404E] text-2xl mb-10 font-bold">
        Task list || Please select completed tasks!
      </h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mb-4 flex items-center justify-evenly">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleCompleted(task.id)}
            />
            <span
              className="text-[#8F97F3] ml-2"
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              style={{
                boxShadow: "3px 4px 0px 0px #8a2a21",
                background:
                  "linearGradient(to bottom, #c62d1f 5%, #f24437 100%)",
                backgroundColor: "#c62d1f",
                borderRadius: "18px",
                border: "1px solid #d02718",
                display: "inline-block",
                cursor: "pointer",
                color: "#ffffff",
                fontFamily: "Arial",
                fontSize: "12px",
                padding: "7px 14px",
                textDecoration: "none",
                textShadow: "0px 1px 0px #810e05",
                marginLeft: "30px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

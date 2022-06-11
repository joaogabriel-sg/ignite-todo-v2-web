import { useState } from "react";

import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { Tasks } from "./components/Tasks";
import { TasksStatus } from "./components/TasksStatus";

import styles from "./App.module.css";

import "./styles/global.css";

interface ITask {
  id: number;
  title: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const tasksTotalQuantity = tasks.length;
  const tasksCompletedQuantity = tasks.filter((task) => task.isChecked).length;

  function addNewTask(taskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: taskTitle,
      isChecked: false,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }

  function toggleTaskCheckedById(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === id
          ? { ...prevTask, isChecked: !prevTask.isChecked }
          : prevTask
      )
    );
  }

  function deleteTaskById(id: number) {
    setTasks((prevTasks) => prevTasks.filter((prevTask) => prevTask.id !== id));
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTaskForm onAddNewTask={addNewTask} />
        <main>
          <TasksStatus
            total={tasksTotalQuantity}
            completed={tasksCompletedQuantity}
          />
          <Tasks
            tasks={tasks}
            toggleTaskCheckedById={toggleTaskCheckedById}
            deleteTaskById={deleteTaskById}
          />
        </main>
      </div>
    </div>
  );
}

export default App;

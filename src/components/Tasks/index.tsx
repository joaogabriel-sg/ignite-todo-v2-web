import { Task } from "../Task";

import taskIcon from "../../assets/task-icon.svg";

import styles from "./styles.module.css";

interface ITask {
  id: number;
  title: string;
  isChecked: boolean;
}

interface TasksProps {
  tasks: ITask[];
  toggleTaskCheckedById: (id: number) => void;
  deleteTaskById: (id: number) => void;
}

export function Tasks({
  tasks,
  toggleTaskCheckedById,
  deleteTaskById,
}: TasksProps) {
  return (
    <div className={styles.container}>
      {tasks.length === 0 && (
        <div className={styles.empty}>
          <img src={taskIcon} alt="Ícone de uma prancheta com tarefas" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}

      {tasks.length > 0 &&
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            isChecked={task.isChecked}
            toggleTaskCheckedById={toggleTaskCheckedById}
            deleteTaskById={deleteTaskById}
          />
        ))}
    </div>
  );
}

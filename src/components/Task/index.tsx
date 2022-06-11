import { Check, Trash } from "phosphor-react";

import styles from "./styles.module.css";

interface TaskProps {
  id: number;
  title: string;
  isChecked: boolean;
  toggleTaskCheckedById: (taskId: number) => void;
  deleteTaskById: (id: number) => void;
}

export function Task({
  id,
  title,
  isChecked,
  toggleTaskCheckedById,
  deleteTaskById,
}: TaskProps) {
  const taskClassNames = `${styles.task} ${
    isChecked ? styles.taskCompleted : ""
  }`;

  return (
    <div className={taskClassNames}>
      <button
        type="button"
        onClick={() => toggleTaskCheckedById(id)}
        className={styles.checkTaskButton}
      >
        <div>{isChecked && <Check size={14} />}</div>
      </button>
      <span>{title}</span>
      <button
        type="button"
        title="Deletar tarefa"
        onClick={() => deleteTaskById(id)}
        className={styles.deleteTaskButton}
      >
        <Trash size={18} />
      </button>
    </div>
  );
}

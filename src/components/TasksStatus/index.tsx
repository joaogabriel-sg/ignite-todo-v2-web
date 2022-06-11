import styles from "./styles.module.css";

interface TasksStatusProps {
  total: number;
  completed: number;
}

export function TasksStatus({ total, completed }: TasksStatusProps) {
  const completedText = total === 0 ? completed : `${completed} de ${total}`;

  return (
    <div className={styles.statusContainer}>
      <strong>
        Tarefas criadas <span>{total}</span>
      </strong>

      <strong>
        Concluídas <span>{completedText}</span>
      </strong>
    </div>
  );
}

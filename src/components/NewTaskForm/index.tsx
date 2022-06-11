import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

import styles from "./styles.module.css";

interface NewTaskFormProps {
  onAddNewTask: (taskTitle: string) => void;
}

export function NewTaskForm({ onAddNewTask }: NewTaskFormProps) {
  const [newTask, setNewTask] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    onAddNewTask(newTask);
    setNewTask("");
  }

  return (
    <form onSubmit={handleAddNewTask} className={styles.formContainer}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleNewTaskChange}
      />
      <button type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}

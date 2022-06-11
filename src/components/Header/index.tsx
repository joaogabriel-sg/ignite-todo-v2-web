import logoImage from "../../assets/logo.svg";

import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImage} alt="ToDo" />
    </header>
  );
}

import React, { ReactNode } from "react";
import styles from "./Table.module.css";

const Column: React.FC<{
  children: ReactNode;
  title: String;
}> = ({ children, title }) => {
  return (
    <div className={styles.column}>
      <div className={styles.columnHeader}>{title}</div>
      <div className={styles.columnContent}>{children}</div>
    </div>
  );
};

export default Column;

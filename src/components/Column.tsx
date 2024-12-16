import React, { ReactNode, useEffect, useRef } from "react";
import styles from "./Table.module.css";

const Column: React.FC<{
  children: ReactNode;
  title: String;
  left: number;
}> = ({ children, title, left }) => {
  const columnRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    console.log(left);
    console.log(columnRef.current?.offsetLeft);
  }, [left]);
  return (
    <div ref={columnRef} className={styles.column}>
      <div className={styles.columnHeader}>{title}</div>
      <div className={styles.columnContent}>{children}</div>
    </div>
  );
};

export default Column;

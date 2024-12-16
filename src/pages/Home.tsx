import React from "react";
import Table from "../components/Table";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.homepage}>
      <div className="header"></div>
      <Table />
    </div>
  );
};

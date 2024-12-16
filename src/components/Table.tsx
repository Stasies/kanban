import React, { createRef, useRef, useState } from "react";
import type { taskType } from "../interfaces/Task.interface";
import styles from "./Table.module.css";
import Column from "./Column";
import Task from "./Task";
import Button from "./Button";
import CreateIssueButton from "./CreateIssueButton";

const data = {
  todo: {
    title: "To Do",
    tasks: [
      {
        title: "a long task name for testing styles",
        description: "description blah blah",
        tags: ["front"],
      },
      {
        title: "a long task name for testing styles",
        description: "description blah blah",
        tags: ["front"],
      },
      {
        title: "a long task name for testing styles",
        description: "description blah blah",
        tags: ["front"],
      },
      {
        title: "a long task name for testing styles",
        description: "description blah blah",
        tags: ["front"],
      },
      {
        title: "a long task name for testing styles",
        description: "description blah blah",
        tags: ["front"],
      },
      {
        title: "a long task name for testing styles",
        description: "description blah blah",
        tags: ["front"],
      },
      {
        title: "a long task name for testing styles",
        description: "description blah blah",
        tags: ["front"],
      },
      {
        title: "a long task name for testing styles",
        description: "description blah blah",
        tags: ["front"],
      },
      {
        title: "a long task name for testing styles",
        description: "description blah blah",
        tags: ["front"],
      },
      {
        title: "a long task name for testing styles",
        description: "description blah blah",
        tags: ["front"],
      },
    ],
  },
  inProgress: {
    title: "In Progress",
    tasks: [],
  },
  Done: {
    title: "Done",
    tasks: [],
  },
};
type tasks = {
  [key: string]: {
    title: string;
    tasks: taskType[];
    tags?: string[];
  };
};
const Table = () => {
  const [columns, setColumns] = useState<tasks>(data);
  const [left, setLeft] = useState(0);

  const createIssue = () => {
    let newIssue: taskType = {
      title: "newIssue",
      description: "new description",
      tags: [],
    };
    setColumns((col) => ({
      ...col,
      todo: {
        ...col.todo,
        tasks: [...col.todo.tasks, newIssue],
      },
    }));
  };
  const moveTaskToAnotherColumn = (coords: number) => {
    console.log(coords);
    if (coords) {
      setLeft(left);
    }
  };

  return (
    <div className={styles.board}>
      {Object.values(columns).map((col, index) => (
        <Column left={left} key={col.title} title={col.title}>
          {col.tasks.map((task) => (
            <Task task={task} moveTask={moveTaskToAnotherColumn}></Task>
          ))}
          {col.title === "To Do" && <CreateIssueButton onClick={createIssue} />}
        </Column>
      ))}
      <Button />
    </div>
  );
};

export default Table;

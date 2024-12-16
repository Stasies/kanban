import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { taskType } from "../interfaces/Task.interface";
import styles from "./Task.module.css";
type Position = "absolute" | "relative" | "fixed" | "sticky" | undefined;
type UserSelect = "auto" | "none" | "text" | "contain" | "all" | undefined;
type PropFunction = (value?: any) => void;

const Task: React.FC<{ task: taskType; moveTask: PropFunction }> = ({
  task,
  moveTask,
}) => {
  const draggable = useRef<HTMLDivElement | null>(null);
  const [pressed, setPressed] = useState(false);
  const [coords, setCoords] = useState<number[]>([0, 0]);
  const [initialOffset, setInitialOffset] = useState<number[]>([0, 0]);
  const [currentPosition, setCurrentPosition] = useState<Position>("relative");
  const userSelect: UserSelect = "none";

  const draggingStyle = useMemo(() => {
    return pressed
      ? {
          left: coords[0],
          top: coords[1],
          zIndex: "10",
          position: currentPosition,
          width: draggable.current?.clientWidth + "px",
          userSelect: userSelect,
        }
      : {};
  }, [pressed, coords, currentPosition]);
  const handleDrag = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      if (pressed) {
        setCurrentPosition("fixed");
        setCoords([e.clientX - initialOffset[0], e.clientY - initialOffset[1]]);
      }
    },
    [initialOffset, pressed]
  );
  const handleMouseDown = (e: React.MouseEvent) => {
    setInitialOffset([
      e.clientX - (draggable.current?.offsetLeft || 0),
      e.clientY - (draggable.current?.offsetTop || 0),
    ]);
    setPressed(true);
  };
  const handleMouseUp = () => {
    if (pressed) {
      moveTask(coords[0]);
    }
    setCurrentPosition("relative");
    setPressed(false);
  };

  useEffect(() => {
    if (pressed) {
      document.addEventListener("mousemove", handleDrag, false);
      document.addEventListener("mouseup", handleMouseUp, false);
    }
    return () => {
      document.removeEventListener("mousemove", handleDrag, false);
    };
  }, [pressed, handleDrag]);
  return (
    <div
      className={styles.container}
      ref={draggable}
      style={draggingStyle}
      onMouseDown={handleMouseDown}
    >
      <div className={styles.title}>{task.title}</div>
      {task.tags.map((tag) => (
        <div key={tag} className={styles.tag}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Task;

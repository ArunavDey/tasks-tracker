import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITask, useFetchTasks } from "../../common/hooks/tasks";

const Board = () => {
  const { id } = useParams();
  const [currentTasks, setCurrentTasks] = useState<ITask[]>([]);
  const { tasks, loading, error } = useFetchTasks();
  let componentToRender;

  useEffect(() => {
    if (!loading && !error) {
      setCurrentTasks(tasks);
    }
  }, [loading]);

  const generateTasksList = () => {
    const component = currentTasks
      .filter((task) => task.board_id.toString() === id)
      .map((task) => {
        const component_id = `${id}-task-${task.id}`;
        return <div id={component_id}>{task.subject}</div>;
      });
    if (!component.length) return <div>no tasks</div>;
    return component;
  };

  if (loading) {
    componentToRender = <div>Loading</div>;
  } else {
    componentToRender = generateTasksList();
  }

  return (
    <div>
      <h2>Your tasks</h2>
      {componentToRender}
    </div>
  );
};

export default Board;

import React from "react";
import { useParams } from "react-router-dom";
import { useFetchTasks } from "../../common/hooks/tasks";

const Board = () => {
  const { id } = useParams();
  const { tasks, loading, error } = useFetchTasks();
  let componentToRender;

  const generateTasksList = () => {
    const component = tasks
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

  return <div>{componentToRender}</div>;
};

export default Board;

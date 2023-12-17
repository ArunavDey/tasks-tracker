import React from "react";
import "./App.css";
import useFetchTasks from "./common/hooks/tasks/useFetchTasks";
import useFetchBoards from "./common/hooks/boards/useFetchBoards";

const App = () => {
  const { tasks, loading: tasksLoading } = useFetchTasks();
  const { boards, loading: boardsLoading } = useFetchBoards();

  return (
    <div>
      {tasksLoading && <p>Loading tasks...</p>}
      {!tasksLoading && tasks && <div>Tasks loaded</div>}
      {boardsLoading && <p>Loading boards...</p>}
      {!boardsLoading && boards && <div>Boards loaded</div>}
    </div>
  );
};

export default App;

import React from "react";
import useFetchBoards from "../../common/hooks/boards/useFetchBoards";

const Dashboard = () => {
  const { boards, loading, error } = useFetchBoards();

  const displayBoards = () => {
    if (loading || error) return [];
    const components = boards.map((board) => {
      const boardClass = `board-${board?.id}`;
      return (
        <div className={boardClass}>
          {board.name}
        </div>
      )
    });
    return components;
  };

  return <div>{displayBoards()}</div>;
};

export default Dashboard;

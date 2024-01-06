import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SideBar } from "../../common/components";
import { useFetchBoards } from "../../common/hooks/boards";
import { IEntry } from "../../common/components/SideBar/SideBar.const";
import Board from "./Board";

const Dashboard = () => {
  const { boards } = useFetchBoards();

  const getSideBarEntries = (): IEntry[] => {
    const entries = boards.map((board) => {
      return {
        id: board.id.toString(),
        label: board.name,
      };
    });
    return entries;
  };

  return (
    <div style={{ display: "flex" }}>
      <BrowserRouter>
        <SideBar entries={getSideBarEntries()} />
        <Routes>
          <Route path="/board/:id" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;

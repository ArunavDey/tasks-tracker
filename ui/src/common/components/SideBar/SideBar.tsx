import React, { ReactNode } from "react";
import { ISideBar } from "./SideBar.const";
import { SideBarContainer, SideBarEntry } from "./SideBar.style";
import { useNavigate } from "react-router-dom";

const SideBar: React.FC<ISideBar> = (props) => {
  const { entries } = props;
  const navigate = useNavigate();

  const navigateToBoardWithId = (id: string) => {
    navigate(`/board/${id}`);
  };

  const generateEntryComponents = (): ReactNode[] => {
    const components = entries.map((entry) => {
      const id = `entry-${entry?.id}`;
      const handleEntryClick = (e: any) => {
        e.stopPropagation();
        navigateToBoardWithId(entry.id);
      };
      return (
        <SideBarEntry className={id} onClick={handleEntryClick}>
          {entry?.label}
        </SideBarEntry>
      );
    });
    return components;
  };
  return <SideBarContainer>{generateEntryComponents()}</SideBarContainer>;
};

export default SideBar;

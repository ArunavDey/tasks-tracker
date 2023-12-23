import { styled } from "styled-components";

const SideBarContainer = styled.div`
  height: 100%;
  width: 10rem;
  background-color: #000000aa;
  color: white;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const SideBarEntry = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;

export { SideBarContainer, SideBarEntry };

import styled from "styled-components";
import ItemNav from "./ItemNav";

const StyledList = styled.ul`
  display: block;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 236px;
  height: 100vh;
  background-color: #d8e6f6;
  padding: 10px;
`;

const HeaderSideBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 10px;
  font-size: 20px;
`;

const SideBar = () => {
  return (
    <aside>
      <nav>
        <StyledList>
          <HeaderSideBar>
            <img width="60px" src="public/css3-icon.svg" />
            <h1>Hello Styled World!</h1>
          </HeaderSideBar>
          <ItemNav>Home</ItemNav>
          <ItemNav>Temp 001</ItemNav>
          <ItemNav>Temp 002</ItemNav>
          <ItemNav>Temp 003</ItemNav>
        </StyledList>
      </nav>
    </aside>
  );
};

export default SideBar;

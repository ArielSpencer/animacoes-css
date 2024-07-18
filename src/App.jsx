import { useState } from "react";
import styled from "styled-components";

const DivTemporaria = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  gap: 10px;
  font-size: 35px;
`;

function App() {
  return (
    <>
      <DivTemporaria>
        <img width="35px" src="public/css3-icon.svg" />
        <h1>Hello Styled World!</h1>
      </DivTemporaria>
    </>
  );
}

export default App;

import styled from "styled-components";

const ItemListaEstilizado = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 15px;
  padding-left: 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #3c3d40;
  font-weight: 700;
  &:hover {
    color: #f02893;
  }
`;

const ItemNav = ({ children }) => {
  return <ItemListaEstilizado>{children}</ItemListaEstilizado>;
};

export default ItemNav;

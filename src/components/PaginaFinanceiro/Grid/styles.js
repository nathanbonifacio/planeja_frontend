import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  max-width: 1120px;
  border-spacing: 0 10px;
  overflow-x: auto;
  box-sizing: border-box;
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;

  @media (max-width: 460px){
    padding: 0px;
  }

`;


export const Thead = styled.thead`
  background-color: #f8f8f8;
  font-size: 25px
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  &.editing {
    @media (max-width: 500px) {
      display: inline-grid;
      width: 100%;
    }
  }
`;

export const Th = styled.th`
  text-align: ${(props) => (props.alignCenter ? "center" : "left")};
  padding: 10px;
  border-bottom: 1px solid #ddd;
  width: ${(props) => props.width}%;
  box-sizing: border-box;
`;

export const Td = styled.td`
  text-align: ${(props) => (props.alignCenter ? "center" : "left")};
  padding: 10px;
  border-bottom: 1px solid #ddd;
  width: ${(props) => props.width}%;
  box-sizing: border-box;
  overflow-x: auto;
`;

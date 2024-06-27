import styled from "styled-components";
import { FaSave, FaTimes, FaEdit, FaTrash } from "react-icons/fa";


export const Tr = styled.tr`
  box-sizing: 
  
  @media (Max-width: 550px){
    display:grid;
    flex-direction: column;
  }

  &.editing {
    @media (max-width: 570px) {
      display: inline-grid;
    }

`;




export const Td = styled.td`
  padding: 15px ;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    width: 18px;
    height: 18px;
  }

`;

export const SaveIcon = styled(FaSave)`
  color: blue;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    color: darkblue;
  }

`;

export const CancelIcon = styled(FaTimes)`
  color: red;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    color: darkred;
  }

  
`;

export const DeleteIcon = styled(FaTrash)`
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    color: red;
  }

  
`;

export const EditIcon = styled(FaEdit)`
  color: ;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    color: darkgreen;
  }

`;

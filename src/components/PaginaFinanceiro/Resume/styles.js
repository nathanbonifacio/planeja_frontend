import styled from "styled-components";


export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  margin-top: -50px;
  justify-content: space-around;
  
  @media (max-width:760px){
    width: 100%;
    background: #fff;
    display:flex;
    flex-direction: column;
    margin-top: 15px;
    padding-bottom: 30px;
    border-radius: 5px 5px 5px 5px;
 }
`;


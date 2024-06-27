import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  text-align: center;
  background: teal;
  border-radius: 5px;

`;

export const Header = styled.h1``;

export const Title = styled.div`
  padding-top: 20px;
  color: #fff;

  
  @media (max-width: 760px){
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-itens: center;
  }

  @media (max-width: 493px){
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-itens: center;
  }


`;

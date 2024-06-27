import React from 'react';
import styled from 'styled-components';
import GraficoPizza from './GraficoPizza';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GraficoLine from './GraficoLine';
import GraficoMixed from './GraficoMixed';


const Section = styled.div`
  background-color: #E9F8F9;
  transition: all 0.2s linear;
  box-shadow: 5px 5px 30px 0 rgba(51, 51, 51, 20%);
  padding: 1.6rem 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  display: grid;
  margin: 1.8rem 1.6rem ;


`;

const StyledRow = styled(Row)`
  width: 100%;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding-left:25px;
  }
`;

const StyledCol = styled(Col)`  
  @media (max-width: 900px) {
    width:100%;
  }
`;


const graphMeta = [
  {
    id: 1,
    nome: 'Valor Restante ',
    tipo:'donout',
  
  },
  {
    id: 2,
    nome: 'Valor Acumulado',
    tipo:'pie',
  
  },
  {
    id: 3,
    nome: 'Depósito Mensal',
    tipo:'line',
  
  },
  
];

const DataBox = ({ header, statusDataBox }) => {
  return (
    <div>
      <StyledRow>
         
          <StyledCol style={{ padding: '0' }} sm={12} md={12}>
            <Section style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <h1 style={{display:'flex', justifyContent:'center'}}>{graphMeta[0].nome}</h1>
                <GraficoPizza  />
              </div>
            </Section>
          </StyledCol>

          <StyledCol style={{ padding: '0' }} sm={12} md={12}>
            <Section style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <h1 style={{display:'flex', justifyContent:'center'}}>{graphMeta[1].nome}</h1>
                <GraficoLine />
              </div>
            </Section>
          </StyledCol>

          <StyledCol style={{ padding: '0' }} sm={12} md={12}>
           <Section style={{ display: 'flex', justifyContent: 'center' }}>
             <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
               <h1 style={{display:'flex', justifyContent:'center'}}>{graphMeta[2].nome}</h1>
               <GraficoMixed  />
             </div>
           </Section>
         </StyledCol>

      </StyledRow>
      
    
    </div>
  );
};

export default DataBox;

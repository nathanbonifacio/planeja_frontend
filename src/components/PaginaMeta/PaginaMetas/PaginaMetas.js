import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import NavBar from './NavBar'
import StateSelect from './StateSelect';
import './PaginaMetas.css'
import Status from './Status';
import DataBox from './DataBox';

const HTML = styled.div`
    font-size: 100%;
    color: #111111;
    transition: all 0.2s linear;
`;

const Body = styled.div`
    background-color: #E3FEF7;
    transition: all 0.2s linear;
    height: auto;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-gap: 15px;
    margin: 1.8rem 1.6rem;

    @media screen and (min-width: 960px){
         grid-template-columns: repeat(4, 1fr);
    }    
`;



function PaginaMetas(){
    // const financialId = localStorage.setItem('financialId');

    const [totalValue, setTotalValue] = useState("");
    const [accumulatedValue, setAccumulatedValue] = useState("");
    const [depositedValue, setDepositedValue] = useState("");
    const [monthlyEstimatedValue, setMonthlyEstimatedValue] = useState("");

    useEffect(() => {
        fetchData(); // Chamada inicial para buscar os dados
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('sua_url_da_api_aqui');
            const data = await response.json();

            // Atualiza os estados com os valores retornados da API
            setTotalValue(data.valorTotal);
            setAccumulatedValue(data.valorAcumulado);
            setDepositedValue(data.valorDepositado);
            setMonthlyEstimatedValue(data.valorMensalEstipulado);
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
        }
    };
    
    return(
        <HTML>
            <Body>
                <NavBar />
                <Container>
                    <StateSelect />
                    <Status iconClass="fas fa-money-bill-alt" label="Valor Total" value="R$ 20.000,00" statusClass="status__icon--confirmed info__total--confirmed" />
                    <Status iconClass="fas fa-money-bill-alt" label="Valor Acumulado" value="R$ 11.250,00" statusClass="status__icon--deaths info__total--deaths" />
                    <Status iconClass="fas fa-money-bill-alt" label="Valor Depositado" value="R$ 620,00" statusClass="status__icon--vaccinated-1 info__total--vaccinated-1" />
                    <Status iconClass="fas fa-money-bill-alt" label="Valor Mensal Estipulado" value="R$ 500,00" statusClass="status__icon--vaccinated-2 info__total--vaccinated-2" />
                    
                
                    
                </Container>
                <div><DataBox/></div>
                
            </Body>
        </HTML>
    );

}

export default PaginaMetas;

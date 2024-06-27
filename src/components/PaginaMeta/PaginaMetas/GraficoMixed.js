import React from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

const StyledGraph = styled(ReactApexChart)`
  width: 900px;
  transition: all 0.1s;
  @media (max-width: 1000px) {
    width: 650px;
  }

  @media (max-width: 800px) {
    width: 500px;
  }

  @media (max-width: 700px) {
    width: 400px;
  }
`;


const GraficoMixed = ({ seriesData }) => {
  const options = {
    chart: {
      height: 350,
      type: 'line',
    },
    stroke: {
      width: [0, 4]
    },
    title: {
      text: 'Controle de Depósito'
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    },
    yaxis: [{
      title: {
        text: 'DEPÓSITO',
      },
    }, {
      opposite: true,
      title: {
        text: 'DEPÓSITO IDEAL'
      }
    }]
  };

  const series = [{
    name: 'DEPÓSITO',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'DEPÓSITO IDEAL',
    type: 'line',
    data: [500, 500,500, 500, 500, 500, 500, 500, 500, 500, 500, 500] //Deposito ideal
  }];

  return (
    <div>
      <div id="chart">
        <StyledGraph options={options} series={series} type="line" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default GraficoMixed;

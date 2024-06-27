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

const GraficoLine = () => {
  const options = {
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#77B6EA', '#545454'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Controle de Valor Acumulado'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul','Ago','Set','Out','Nov','Dez'],
      title: {
        text: 'MÊS'
      }
    },
    yaxis: {
      title: {
        text: 'ACUMULADO'
      },
      min: 0,
      max: 100 //Valor total da meta
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  };

  const series = [
    {
      name: "DEPÓSITO IDEAL  ",
      data: [28, 29, 33, 36, 32, 32, 33, 32, 32, 32, 32, 32,]
    },
    {
      name: "DEPOSITADO  ",
      data: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55,]
    }
  ];

  return (
    <div id="chart">
      <StyledGraph options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default GraficoLine;

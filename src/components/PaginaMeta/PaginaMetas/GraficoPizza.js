import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

const StyledGraph = styled(ReactApexChart)`
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

const GraficoPizza = () => {
  const [chartState] = useState({
    series: [1200, 20000],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },  
      labels: ['Acumulado', 'Total'],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270
        }
      },
      dataLabels: {
        enabled: true
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function(val, opts) {
          return val + ": R$ " + opts.w.globals.series[opts.seriesIndex].toFixed(2);
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  });

  return (
    <div>
      <div id="chart">
        <StyledGraph options={chartState.options} series={chartState.series} type="pie" width={400} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default GraficoPizza;
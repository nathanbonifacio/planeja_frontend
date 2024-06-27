import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import * as C from './styles';

const Grafico = ({ total, income, expense }) => {
  const [chartState, setChartState] = useState({
    series: [income, expense, total],
    options: {
      chart: {
        width: 500,
        type: 'donut',
        foreColor: '#fff',
      },
      labels: ['Renda', 'Despesa', 'Restante'],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function(val, opts) {
          return val + ": R$ " + opts.w.globals.series[opts.seriesIndex].toFixed(2);
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    setChartState((prevState) => ({
      ...prevState,
      series: [income, expense, total],
    }));
  }, [total, income, expense]);

  return (
    <C.TGraph>
      <div id="chart">
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="donut"
          width={450}
        />
      </div>
      <div id="html-dist"></div>
    </C.TGraph>
  );
};

export default Grafico;


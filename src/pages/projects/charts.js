import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const Chart = () => {
  // Sample data for the chart
  const data = [1, 3, 3, 4, 5];

  // Chart configuration options
  const options = {
    chart: {
      type: 'line', // Specify the chart type
    },
    title: {
      text: 'My First Highcharts Chart', // Title of the chart
    },
    series: [
      {
        name: 'My Data Series',
        data: data, // Your data goes here
      },
    ],
  };

  // Function to create the chart
  const createChart = () => {
    Highcharts.chart('chart-container', options);
  };

  // Run the createChart function when the component mounts
  useEffect(() => {
    createChart();
  }, []);

  return (
    <div style={{width: "800px"}}>
      <div id="chart-container"></div>
    </div>
  );
};

export default Chart;
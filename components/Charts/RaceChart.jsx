'use client'
import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

const RaceChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      const data = [
        { Gender: "Chinese", count: 4800 },
        { Gender: "Other", count: 4500 },
        { Gender: "Indian", count: 4500 },
        { Gender: "Malay", count: 4300 },
      ];

      const innerBarText = {
        afterDraw: (chart) => {
          const ctx = chart.ctx;
          const xAxis = chart.scales['x-axis-0'];

          chart.data.datasets.forEach((dataset, datasetIndex) => {
            const meta = chart.getDatasetMeta(datasetIndex);
            if (!meta.hidden) {
              meta.data.forEach((bar, index) => {
                const data = dataset.data[index];
                const x = bar.x / 2;
                const centerX = x;
                const labelY = bar.tooltipPosition().y + 5; // Adjust the label position as needed
                ctx.fillStyle = 'white'; // Set the label text color
                ctx.font = 'bold 15px Arial'; // Set the label font
                ctx.textAlign = 'left'; // Align the text in the center
                ctx.fillText(data, centerX, labelY);
                const symbol = 'RM'; // You can replace this with any symbol or text
                const symbolX = centerX - 30; // Adjust the symbol position as needed
                ctx.font = 'bold 15px Arial'; // Set the font for the symbol
                ctx.fillText(symbol, symbolX, labelY);
              });
            }
          });
        },
      };

      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(row => row.Gender),
          datasets: [
            {
              label: 'RM',
              data: data.map(row => row.count),
              backgroundColor: '#7d86ff',
            }
          ],
        },
        options: {
          indexAxis: 'y',
          maintainAspectRatio: false,
          elements: {
            bar: {
              borderWidth: 4,
            }
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              position: 'average',
              backgroundColor: 'rgba(20, 32, 39, 0.9)',
              titleSpacing: 10,
              titleFont: {
                size: 16,
                weight: 'bold',
              },
              bodySpacing: 5,
              bodyFont: {
                size: 15,
                weight: 'bold',
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: 'black',
                font: {
                  size: 14,
                  weight: '',
                },
              },
              display: true,
              title: {
                display: true,
                text: 'Salary RM',
                color: 'black',
                font: {
                  size: 15,
                  weight: 'bold',
                },
                padding: { top: 0, left: 0, right: 0, bottom: 0 }
              },
            },
            y: {
              ticks: {
                color: 'black',
                font: {
                  size: 15,
                  weight: 'bold',
                },
              },
              display: true,
              title: {
                display: false,
                text: 'Amount RM',
                color: 'red',
                font: {
                  size: 16,
                  weight: 'bold',
                },
                padding: { top: 0, left: 0, right: 0, bottom: 13 }
              },
            }
          },
        },
        plugins: [innerBarText]
      });
      return function cleanup() {
        myChart.destroy();
      };
    }
  }, []);

  return (
    <div className='w-full h-full drop-shadow-xl shadow-xl border-purple-800 border-2 rounded-2xl p-7'>
      <p className='text-xl text-center font-semibold'>Ethnicity</p>
      <canvas ref={canvasRef} />
    </div>
  )
}

export default RaceChart

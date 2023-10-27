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
            
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(row => row.Gender),
                    datasets: [
                        {
                            label: 'RM',
                            data: data.map(row => row.count),
                            backgroundColor : '#7d86ff',
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
                            position: 'nearest',
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
                            color: '',
                            font: {
                              size: 14,
                              weight: '',
                          },
                          },
                          display: true,
                          title: {
                            display: true,
                            text: 'RM',
                            color: '',
                            font: {
                              size: 15,
                              weight: 'bold',
                          },
                          padding: {top: 0, left: 0, right: 0, bottom: 0}
                          },
                        },
                        y: {
                          ticks: {
                            color: '',
                            font: {
                              size: 15,
                              weight: '',
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
                          padding: {top: 0, left: 0, right: 0, bottom: 13}
                          },
                        }
                      },
                }
            });
            return function cleanup() {
                myChart.destroy();
              };
        }
    }, []);

    return (
        <div className='w-full max-h-[42vh] drop-shadow-xl shadow-xl border-purple-800 border-2 rounded-2xl p-8'>
             <p className='text-xl text-center font-semibold'>Gender Pay Gap</p>
            <canvas ref={canvasRef} />
        </div>
    )
}

export default RaceChart

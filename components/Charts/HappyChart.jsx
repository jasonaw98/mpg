'use client'
import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

const HappyChart = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');

            const data = [
                { happy: "<30", count: 4 },
                { happy: "30 to 50", count: 3.5 },
                { happy: ">50", count: 2.9 },
            ];
            
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(row => row.happy),
                    datasets: [
                        {
                            label: 'Happiness Level',
                            data: data.map(row => row.count),
                            backgroundColor : '#7d86ff',
                        }
                    ],
                },
                options: {
                    maintainAspectRatio: false,
                    plugins: {
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
                            size: 14,
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
                              weight: 'bold',
                            },
                          },
                          display: true,
                          title: {
                            display: true,
                            text: 'Work Hours',
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
                }
            });
            return function cleanup() {
                myChart.destroy();
              };
        }
    }, []);

    return (
        <div className='w-full h-full drop-shadow-xl shadow-xl border-purple-800 border-2 rounded-2xl p-8'>
             <p className='text-xl text-center font-semibold -mt-3'>Happiness Level</p>
            <canvas ref={canvasRef} />
        </div>
    )
}

export default HappyChart

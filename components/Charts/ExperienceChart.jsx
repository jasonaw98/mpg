'use client'
import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

const ExperienceChart = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');

            const data = [
                { year: 0, count: 3215.7 },
                { year: 2, count: 3875 },
                { year: 4, count: 5000 },
                { year: 6, count: 6300 },
                { year: 8, count: 7967.5 },
                { year: 10, count: 9000 },
                { year: 12, count: 9300 },
                { year: 14, count: 9250 },
                { year: 16, count: 14000 },
                { year: 18, count: 20000 },
                { year: 20, count: 12000 },
                { year: 22, count: 10600 },
                { year: 24, count: 12400 },
                { year: 26, count: 9500 },
                { year: 28, count: 20948.5 },
                { year: 30, count: 102000 },
            ];
            
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(row => row.year),
                    datasets: [
                                {
                                    label: 'RM',
                                    data: data.map(row => row.count),
                                    backgroundColor : '#7d86ff',
                                }
                            ],
                        },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                }
            });

            return function cleanup() {
                myChart.destroy();
              };
        }
    }, []);

    return (
        <div className='w-full h-full drop-shadow-xl shadow-xl border-purple-800 border-2 rounded-2xl p-8'>
            <p className='text-xl text-center font-semibold -mt-3'>Years of Experience</p>
            <canvas ref={canvasRef} />
        </div>
    )
}

export default ExperienceChart

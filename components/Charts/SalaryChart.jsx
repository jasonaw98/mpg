'use client'
import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

const SalaryChart = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');

            const data = [
                { year: 2010, count: 10 },
                { year: 2011, count: 20 },
                { year: 2012, count: 15 },
                { year: 2013, count: 25 },
                { year: 2014, count: 22 },
                { year: 2015, count: 30 },
                { year: 2016, count: 28 },
            ];
            
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(row => row.year),
                    datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: data.map(row => row.count),
                            backgroundColor : '#7d86ff',
                        }
                    ],
                },
                options: {
                    maintainAspectRatio: false,
                }
            });
            return function cleanup() {
                myChart.destroy();
              };
        }
    }, []);

    return (
        <div className='w-full max-h-[42vh] drop-shadow-xl shadow-xl border-purple-800 border-2 rounded-2xl p-8'>
             <p className='text-xl text-center font-semibold'>Years of Experience</p>
            <canvas ref={canvasRef} />
        </div>
    )
}

export default SalaryChart

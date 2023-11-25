'use client'
import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

const SalaryChart = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');

            const data = [
                { pay: "1K", count: 41 },
                { pay: "2K", count: 198 },
                { pay: "3K", count: 726 },
                { pay: "4K", count: 1222 },
                { pay: "5K", count: 885 },
                { pay: "6K", count: 618 },
                { pay: "7K", count: 425 },
                { pay: "8K", count: 324 },
                { pay: "9K", count: 229 },
                { pay: "10K", count: 150 },
                { pay: "11K", count: 144 },
                { pay: "12K", count: 91 },
                { pay: "13K", count: 89 },
                { pay: "14K", count: 63 },
                { pay: "15K", count: 40 },
                { pay: "16K", count: 54 },
                { pay: "17K", count: 31 },
                { pay: "18K", count: 28 },
                { pay: "19K", count: 47 },
                { pay: "20K", count: 20 },
                { pay: "21K", count: 28 },
                { pay: "22K", count: 12 },
                { pay: "23K", count: 13 },
                { pay: "24K", count: 2 },
                { pay: "25K", count: 16 },
            ]
            
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(row => row.pay),
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
        <div className='w-full h-full drop-shadow-xl shadow-xl border-purple-800 border-2 rounded-2xl p-8'>
             <p className='text-xl text-center font-semibold -mt-3'>Submission Salary</p>
            <canvas ref={canvasRef} />
        </div>
    )
}

export default SalaryChart

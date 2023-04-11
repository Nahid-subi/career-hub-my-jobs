import { Chart as ChartJS, Legend, LineElement, Title, Tooltip, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    Legend, LineElement, Title, Tooltip, CategoryScale, LinearScale, PointElement, Filler
)
const Statistics = () => {
    const [data, setData] = useState({
        labels: ["Assignment 1", "Assignment 2", "Assignment 3", "Assignment 4", "Assignment 5", "Assignment 6", "Assignment 7", "Incoming"],
        datasets: [
            {
                label: 'Assignment',
                data: [60, 60, 60, 60, 59, 60, 60, 0],
                tension: 0.4,
                borderColor: '#8c00ff',
                backgroundColor: 'rgba(119, 0, 255, 0.5)',
                fill: true,
            }
        ]
    })
    return (
        <div className=''>
            <section className='bg-gray-100 h-48 flex justify-center items-center'>
                <h1 className='font-bold text-2xl'>Statistics</h1>
            </section>
            <div className='lg:max-w-screen-xl mx-auto my-10'>
                <Line data={data}>Hello</Line>
            </div>
        </div>
    );
};

export default Statistics;

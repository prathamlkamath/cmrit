import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function SalesChart() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                backgroundColor: 'rgba(75,192,192,0.5)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.8)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    return (
        <div className="chart">
            <h2>Sales Overview</h2>
            <Bar
                data={data}
            />
        </div>
    );
}

export default SalesChart;

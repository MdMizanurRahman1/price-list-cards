import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashBoard = () => {
    const marksArray = [
        { id: 1, name: "Alice", math: 90, physics: 80, chemistry: 85 },
        { id: 2, name: "Bob", math: 70, physics: 75, chemistry: 80 },
        { id: 3, name: "Charlie", math: 85, physics: 90, chemistry: 95 },
        { id: 4, name: "David", math: 80, physics: 70, chemistry: 75 },
        { id: 5, name: "Emma", math: 95, physics: 85, chemistry: 90 },
        { id: 6, name: "Frank", math: 75, physics: 80, chemistry: 85 },
        { id: 7, name: "Grace", math: 85, physics: 95, chemistry: 90 },
        { id: 8, name: "Henry", math: 90, physics: 85, chemistry: 80 },
        { id: 9, name: "Isaac", math: 80, physics: 75, chemistry: 70 },
        { id: 10, name: "Jenny", math: 95, physics: 90, chemistry: 85 },
        { id: 11, name: "Kelly", math: 85, physics: 90, chemistry: 95 },
        { id: 12, name: "Liam", math: 75, physics: 80, chemistry: 85 },
    ];

    return (
        <div>
            <LineChart
                width={500}
                height={300}
                data={marksArray}
            >
                <Line dataKey='physics'></Line>
                <Line stroke="#8884d8" dataKey='math'></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default DashBoard;
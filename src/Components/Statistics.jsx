import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        name: "A1",
        uv: 57
    },
    {
        name: "A2",
        uv: 60
    },
    {
        name: "A3",
        uv: 60
    },
    {
        name: "A4",
        uv: 60
    },
    {
        name: "A5",
        uv: 60
    },
    {
        name: "A6",
        uv: 60
    },
    {
        name: "A7",
        uv: 60
    },
    {
        name: "A8",
        uv: 60
    }
];

const Statistics = () => {
    return (
        <div>
            <div className='text-center text-4xl font-bold bg-violet-100 py-12'>
                <h1 className=''>My Assignment Marks</h1>
            </div>
            <div className='mx-auto md:w-2/3 mt-8'>
                <ResponsiveContainer width='100%' height={200}>
                    <AreaChart

                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            <h1 className='mt-8 text-center'><span className='font-semibold'>Fig:</span> Rechart</h1>
            </div>
        </div>
    );
};

export default Statistics;
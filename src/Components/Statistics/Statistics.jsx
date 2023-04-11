import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const assignment = [
    {
      id:1,
      name: 'New Year',
      marks: 58
    },
    {
        id:2,
        name: 'Responsive web',
        marks: 60
      },
      {
        id:3,
        name: 'Landing Page',
        marks: 60
      },
      {
        id:4,
        name: 'javascript',
        marks: 60
      },
      {
        id:5,
        name: 'Integrate JS',
        marks: 58
      },
      {
        id:6,
        name: 'Intermediate JS',
        marks: 56
      },
      {
        id:7,
        name: 'Devtool and Debug',
        marks: 60
      },
      {
        id:8,
        name: 'React',
        marks: 60
      },
  ];
const Statistics = () => {
    // export default class Example extends PureComponent {
    //     static demoUrl = 'https://codesandbox.io/s/simple-composed-chart-h9zif';
      
       
    return (
        <div className='text-center p-10 bg-slate-200'>
        <h2 className='text-center p-3 font-semibold text-3xl'>Area Chart of All the Assignment Marks</h2>
        <AreaChart
          width={1200}
          height={500}
          data={assignment}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
     
        </div>
          )
        };

export default Statistics;
import { useState } from 'react';
import numberData from '../../MOCK_DATA.json';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function Chart() { 
  const [number] = useState(numberData);
  return (
    <LineChart width={600} height={400} data={number}>
      <Line type="monotone" dataKey="number" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>

  );
}
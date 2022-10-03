import { useState } from 'react';
import usersData from '../../users.json';
import { Table as RTable, Column, HeaderCell, Cell } from 'rsuite-table';
// import 'rsuite-table/dist/css/rsuite-table.css';

export default function Table() {
  const [users] = useState(usersData);

 
  return (
    <RTable data={users}>
      <Column width={100} sortable fixed resizable>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column> 
    </RTable>
  );
}
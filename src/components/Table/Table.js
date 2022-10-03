import { useState } from 'react';
import usersData from '../../users.json';
import { Table as RTable, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

export default function Table() {
  const [users] = useState(usersData);

  const ImageCell = ({ rowData, dataKey, ...rest }) => (
    <Cell {...rest}>
      <img src={rowData[dataKey]} width="50" />
    </Cell>
  );

 
  return (
    <RTable data={users}>
      <Column width={100} sortable fixed resizable>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column> 


      <Column width={100} sortable resizable>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="first_name" />
      </Column>

      <Column width={100} sortable resizable>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="last_name" />
      </Column>

      <Column width={100} sortable resizable>
        <HeaderCell>Favorite Color</HeaderCell>
        <Cell dataKey="favorite_color" />
      </Column>

      <Column width={100} sortable resizable>
        <HeaderCell>Image</HeaderCell>
        <ImageCell dataKey="image" />
      </Column>
    </RTable>

    
  );
}
import React from "react";
import { useTable } from "react-table";
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './column';

const DataTable = (props) => {
  // Memos
  // const data = React.useMemo(() => props.data, [props.data]);
  // const columns = React.useMemo(() => props.columns, [props.columns]);
  const columns = React.useMemo(() => COLUMNS, [])
  const data = React.useMemo(() => MOCK_DATA, [])

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });
  //change
  return (
    <table {...getTableProps()} className="table table-striped table-bordered">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;

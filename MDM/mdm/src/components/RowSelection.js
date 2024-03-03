import React, { useMemo } from 'react';
import { useTable, useRowSelect, useGlobalFilter, useSortBy, usePagination } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './column';
import './table.css';
import {GlobalFilter} from './GlobalFilter';
import './buttonPanel.css';
import { Link } from 'react-router-dom';

//Ref forwarding is a technique for automatically passing a ref through a component to one of its children. 
const Checkbox = React.forwardRef(
    ({ indeterminate, ...rest}, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(()=> {
        resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
        <>
            <input type="checkbox" ref={resolvedRef} {...rest}  />
        </>
    )
})


export const RowSelection = ((props) => {
    //useMemo is a React Hook that lets you cache the result of a calculation between re-renders
    //useMemo(calculateValue, dependencies)
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    // const data =  props.items;
    
    //useTable is the root hook for React Table. To use it, pass it with an options object
    // with at least a columns and data value, followed by any React Table compatible hooks
    // you want to use
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, //// rows for the table based on the data passed
        prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
        selectedFlatRows,
        state,
        setGlobalFilter,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        setPageSize,
        gotoPage,
        pageCount,
    } = useTable({columns, data},
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect, //useRowSelect is the hook that implements basic row selection. 
    (hooks)=>{
        hooks.visibleColumns.push((columns)=>
             [
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                       //Use this function to get the props needed for a select all checkbox.
                            <Checkbox {...getToggleAllRowsSelectedProps()} />
                       
                    ),
                    Cell: ({row}) => (
                            <Checkbox {...row.getToggleRowSelectedProps()} />
                        
                    )
                },
                ...columns,
            ]
    )},
    )

    // const firstPageRows = rows.slice(0, 5);
    const { pageIndex, pageSize, globalFilter, selectedRowIds } = state;

    return (
        <>
        <h2>Repositories</h2>
        <br/>
        <div id="btnActionPanel">
            <button disabled={selectedRowIds} className="btn btn-primary" id="deleteBtn">
                <span className="ui-delete-icon-image"></span>
                Delete
            </button>
            &nbsp;
            <button disabled={selectedRowIds} className="btn btn-primary" id="copyBtn">
                <span className="ui-copy-icon-image"></span>
                Copy
            </button>
            &nbsp;
            <button disabled={selectedRowIds} className="btn btn-primary" id="manageInputMapBtn">
                <span className="ui-inputMap-icon-image"></span>
                Manage Input Map
            </button>
            &nbsp;
            <button disabled={selectedRowIds} className="btn btn-primary" id="getRecCountBtn">
                <span className="ui-recCount-icon-image"></span>
                Get Record Count
            </button>
            &nbsp;
            <button disabled={selectedRowIds} className="btn btn-primary" id="createNamedVerBtn">
                <span className="ui-createNamedVer-icon-image"></span>
                Create Named Version
            </button>
            &nbsp;
            <button disabled={selectedRowIds} className="btn btn-primary" id="expoRecordsBtn">    
                <span className="ui-expoRec-icon-image"></span>
                Export Records
            </button>
            &nbsp;
            <button disabled={selectedRowIds} className="btn btn-primary" id="showUsageBtn">
                <span className="ui-showUsage-icon-image"></span>
                Show Usage
            </button>
        </div>
        {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
        <table {...getTableProps()} className="table table-striped table-bordered">
            <thead>
                { headerGroups.map((headerGroup)=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map( column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? '-' : ':') : ''}
                                        </span>
                                    </th>
                                ))
                            } 
                        </tr>
                ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row =>{
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell =>{
                                        return <Link to="/about" {...cell.getCellProps()}>{cell.render('Cell')}</Link>
                                    })
                                }
                            </tr>
                        )
                    })
                }
                
            </tbody>
          
        </table>

        <div>
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span>
                | Go to page: {' '}
                <input type="number" defaultValue={pageIndex + 1} 
                    onChange = {
                        e => {
                            const pageNumber = e.target.value ? Number(e.target.value) -1 : 0;
                            gotoPage(pageNumber);
                        }
                    }
                    style= {{width: '50px'}}
                />
            </span>
            <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                {
                    [10, 25, 50].map(pageSize => {
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    })
                }
            </select>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
        </div>
        <pre>
                <code>
                    {
                        JSON.stringify(
                            {
                                selectedRowIds: selectedRowIds,
                                selectedFlatRows: selectedFlatRows.map(
                                    (row) => 
                                        row.original
                                    )
                            },
                            null,
                            2
                        )
                    }
                </code>
        </pre>
        </>
    )
})

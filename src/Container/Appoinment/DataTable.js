import React from 'react'
import { useTable, usePagination, useSortBy } from 'react-table'

const Table = ({ data, columns }) => {
    const { getTableProps, headerGroups, page, prepareRow, getTableBodyProps, state, gotoPage, setPageSize, pageCount, previousPage, nextPage, getSortByToggleProps } = useTable({
        data,
        columns
    },
        useSortBy,
        usePagination
    )

    const { pageIndex, pageSize } = state

    console.log("state++", state);

    const onChangepage = (event) => {
        setPageSize(event.target.value)
    }

    return (
        <div className='appoinment-section' >
            <table {...getTableProps()}  >
                <thead>
                    {
                        headerGroups.map((headerGroup) => {
                            return (<tr {...headerGroup.getHeaderGroupProps()} >
                                {
                                    headerGroup.headers.map((column) => {
                                        return <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                        </th>
                                    })
                                }
                            </tr>)
                        })
                    }
                </thead>
                <tbody {...getTableBodyProps()} >
                    {
                        page.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} >
                                    {
                                        row.cells.map((cell) => {
                                            return (<td {...cell.getCellProps()} >
                                                {cell.render('Cell')}
                                            </td>)
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <div style={{ display: 'flex' }} className='prince-style'>
                <div>
                    <button onClick={() => gotoPage(0)}> {'<<'} </button>
                    <button onClick={previousPage}> {'<'} </button>
                    <button> <span>{pageIndex + 1}</span> </button>
                    <button onClick={nextPage}> {'>'} </button>
                    <button onClick={() => gotoPage(pageCount - 1)}> {'>>'} </button>
                </div>

                <span> showing {(pageIndex * pageSize) + 1} to {((pageIndex + 1) * pageSize)} records </span>

                <div>
                    <select onChange={onChangepage}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Table

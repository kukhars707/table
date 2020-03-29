import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';

import { StyledTable, Th } from './styled';

import {TableRow} from './TableRow';

export const Table = ({
    headers,
    data,
    handleRemove,
    handleAdd,
    handleEdit,
    uniqId,
    tableClass,
    fieldClass,
    addButtonClass,
    remButtonClass,
    addButtonTitle,
    remButtonTitle
}) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        setTableData(data);
    }, [data])

    const removeRow = useCallback((idx) => {
        const removedElement = tableData.splice(idx, 1);
        const updateDate = [...tableData];
        setTableData(updateDate);
        handleRemove(removedElement);
    }, [tableData, handleRemove])

    const addRow = useCallback(() => {
        const initial = data[0];
        const key = Object.keys(initial);
        const initialData = {};
        key.forEach(item => {
            initialData[item] = '';
        })
        tableData.push(initialData);
        const updateData = [...tableData];
        setTableData(updateData);
        handleAdd(initialData);
    }, [data, tableData, handleAdd]);

    return <StyledTable className={tableClass}>
        {headers && (
            <thead>
                <tr>
                    {handleAdd && (
                        <th>
                            <button onClick={addRow} className={addButtonClass}>
                                {addButtonTitle || "Add"}
                            </button>
                        </th>
                    )}
                    {headers.map((item, idx) => (
                        <Th key={idx}>{item.title}</Th>
                    ))}
                </tr>
            </thead>
        )}
        {tableData && uniqId && (
            <tbody>
                {tableData.map((item, index) => (
                    <TableRow
                        key={index}
                        rowIndex={index}
                        remove={removeRow}
                        data={item}
                        handleEdit={handleEdit}
                        uniqId={uniqId}
                        fieldClass={fieldClass}
                        remButtonClass={remButtonClass}
                        remButtonTitle={remButtonTitle}
                        isRemove={handleRemove}
                    />
                ))}
            </tbody>
        )}
    </StyledTable>
};

Table.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleAdd: PropTypes.func,
    handleEdit: PropTypes.func,
    handleRemove: PropTypes.func,
    uniqId: PropTypes.string.isRequired
}
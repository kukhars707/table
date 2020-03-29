import React, {Fragment, useState, useEffect} from 'react';
import {Td} from './styled';

export const TableRow = ({
    data,
    remove,
    rowIndex,
    handleEdit,
    uniqId,
    fieldClass,
    remButtonClass,
    remButtonTitle,
    isRemove
}) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(data);
    }, [setValue, data])

    const handleChange = e => {
        if(handleEdit) {
            if(data[e.target.name] !== e.target.value) {
                data[e.target.name] = e.target.value;
                handleEdit(data);
            }
        }
    }

    return <tr>
        {isRemove && (
            <td>
                <button onClick={() => remove(rowIndex)} className={remButtonClass}>
                    {remButtonTitle || "Remove"}
                </button>
            </td>
        )}
        {Object.getOwnPropertyNames(data).map((val, i) => (
            <Fragment key={i}>
                {uniqId !== val && (
                    <Td key={`col-${rowIndex}-${i}`} onBlur={(e) => handleChange(e)}>
                        <input
                            name={val}
                            type="text"
                            className={fieldClass}
                            onChange={(e) => setValue(e.target.value)}
                            value={value[val]}
                        />
                    </Td>
                )}
            </Fragment>
        ))}
    </tr>;
}
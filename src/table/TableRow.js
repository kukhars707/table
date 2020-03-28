import React, {Fragment} from 'react';
import {Td} from './styled';

export const TableRow = ({
    data,
    remove,
    rowIndex,
    handleEdit,
    uniqId,
    fieldClass,
    remButtonClass,
    remButtonTitle
}) => {
    const handleChange = e => {
        if(data[e.target.name] !== e.target.value) {
            data[e.target.name] = e.target.value;
            handleEdit(data);
        }
    }

    return <tr>
        {remove && <td><button onClick={() => remove(rowIndex)} className={remButtonClass} >{remButtonTitle}</button></td>}
        {Object.getOwnPropertyNames(data).map((val, i) => (
            <Fragment key={i}>
                {uniqId !== val && (
                    <Td key={`col-${rowIndex}-${i}`} onBlur={(e) => handleChange(e)}>
                        <input name={val} className={fieldClass} type="text" defaultValue={data[val]} />
                    </Td>
                )}
            </Fragment>
        ))}
    </tr>;
}
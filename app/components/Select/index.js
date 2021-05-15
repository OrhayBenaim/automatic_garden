import React, { useEffect, useRef, useState } from 'react'
import {newId} from 'utils';
import style from 'styles/Input.module.css'

export const Select = ({label, value, onChange, children}) => {
    const id = useRef(newId('select'))
    const [_value, setValue] = useState(value || '');

    const onSelectChange  = (e )=>{
        const v = e.target.value;
        if(!onChange) setValue(v);
        else onChange(v);
    }

    useEffect(() => {
        setValue(value);
    }, [value])

    return (
        <div className={style.inputGroup}>
            <label className={style.label} htmlFor={id.current}>{label}</label>
            <select onChange={onSelectChange} value={_value} className={style.select} id={id.current}>
                <option value='-1'>{label} GPIO</option>
                {children}
            </select>
        </div>
    )
}

import React, { useEffect, useRef, useState } from 'react'
import {newId} from 'utils';
import style from 'styles/Input.module.css'

export const Input = ({label, value, onChange}) => {
    const id = useRef(newId('input'))
    const [_value, setValue] = useState(value || '');

    const onIputChange  = (e )=>{
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
            <input onChange={onIputChange} value={_value} className={style.input} id={id.current}/>
        </div>
    )
}

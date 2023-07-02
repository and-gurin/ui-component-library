import React from 'react';
import style from './radio.module.css'

const Radio = ({id, name, value, disabled, checked, onChange}) => {
    return (
        <label htmlFor={id} className={style.radioLabel}>
            <input
                type="radio"
                className={style.radioInput}
                disabled={disabled}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <span className={style.customRadio}/>
        </label>
    );
};

export default Radio;
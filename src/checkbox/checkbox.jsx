import React from 'react';
import style from './checkbox.module.css'

const Checkbox = ({disabled, checked, onChange}) => {
    return (
        <div>
            <input className={style.toggle}
                   disabled={disabled}
                   checked={checked}
                   onChange={onChange}
                   id='checkbox'
                   type='checkbox'/>
            <label className={style.label} htmlFor='checkbox'/>
        </div>
    );
};

export default Checkbox;
import React from 'react';
import style from './checkbox.module.css'

const Checkbox = ({disabled, checked, onChange, id}) => {
    return (
        <div>
            <input className={style.toggle}
                   disabled={disabled}
                   checked={checked}
                   onChange={onChange}
                   id={id}
                   type='checkbox'/>
            <label className={style.label} htmlFor={id}/>
        </div>
    );
};

export default Checkbox;
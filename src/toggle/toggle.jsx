import React from 'react';
import style from './toggle.module.css'

const Toggle = ({disabled, checked, onChange}) => {
    return (
        <div>
            <input className={style.toggle}
                   disabled={disabled}
                   checked={checked}
                   onChange={onChange}
                   id="toggle"
                   type="checkbox"/>
            <label className={style.label} htmlFor="toggle"/>
        </div>
    );
};

export default Toggle;
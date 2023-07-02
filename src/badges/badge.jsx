import React from 'react';
import style from './badge.module.css'

const Badge = ({status}) => {
    return (
        <span className={style.badge + ' ' + style[status]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
    );
};

export default Badge;
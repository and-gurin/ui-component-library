import React from 'react';
import style from './Button.module.css'

const Button = ({className, disabled, name, icon, iconWidth, iconHeight, iconPlace, width, height, xType}) => {

    const finalClassName = style.button
        + (xType === 'primary'
            ? ' ' + style.primary : xType === 'secondary'
                ? ' ' + style.secondary : xType === 'outline'
                    ? ' ' + style.outline : xType === 'transparent'
                        ? style.transparent : '')
        + (className ? ' ' + className : '');

    const iconClassName = iconPlace === 'right'
        ? style.right : iconPlace === 'left'
            ? style.left : iconPlace === 'side' ? style.side : '';

    return (
        <button disabled={disabled} style={{width, height}} className={finalClassName}>
            {icon && <img className={iconClassName}
                          style={{width: iconWidth, height: iconHeight}}
                          src={icon}
                          alt='icon'/>
            }
            <div className={style.name}>{name}</div>
        </button>
    );
};

export default Button;
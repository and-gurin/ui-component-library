import React from 'react';
import style from './Button.module.css'


const Button = ({disabled, title, size, Icon, iconPosition, xType, onClick}) => {

    const finalButtonClassName = [style.button, style[xType], style[size]].filter(Boolean).join(' ')

    let titleClassName;

    if (size === 'large') {
        titleClassName = `${style.titleLarge}`
    }

    if (size === 'small') {
        titleClassName = `${style.titleSmall}`
    }

    if (iconPosition === 'iconSideLargeButton') {
        titleClassName = `${style.titleLargeIconSide}`
    }

    if (iconPosition === 'iconSideSmallButton') {
        titleClassName = `${style.titleSmallIconSide}`
    }

    return (
        <button disabled={disabled}
                onClick={onClick}
                className={finalButtonClassName}>
            {Icon && <Icon finalClassName={style[iconPosition]}/>}
                <div className={titleClassName}>{title}</div>
        </button>
    );
};

export default Button;
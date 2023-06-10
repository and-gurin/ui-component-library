import React from 'react';
import style from './Button.module.css'
import IconArrow from "assets/icons/icon-arrow";
import IconMessage from "assets/icons/icon-message";

const icons = {
    iconArrow :IconArrow,
    iconMessage: IconMessage,
}

const Button = ({disabled, title, size, icon, xType}) => {

    let finalButtonClassName = style.button;
    let iconClassName;
    let titleClassName;

    if (xType) {
        finalButtonClassName += ` ${style[xType]}`
    }

    if (size) {
        finalButtonClassName += ` ${style[size]}`
    }

    if (size === 'large') {
        titleClassName = `${style.titleLarge}`
    }

    if (size === 'small') {
        titleClassName = `${style.titleSmall}`
    }

    if (disabled) {
        finalButtonClassName += ` ${style[`${xType}Disabled`]}`
    }

    if (icon) {
        iconClassName = `${style[icon]}`
    }

    if (icon === 'iconSideLargeButton') {
        titleClassName = `${style.titleLargeIconSide}`
    }

    if (icon === 'iconSideSmallButton') {
        titleClassName = `${style.titleSmallIconSide}`
    }

    return (
        <button disabled={disabled}
                className={finalButtonClassName}>
            {icon && <div className={iconClassName}>
                <icons.iconMessage finalClassName={finalButtonClassName}/>
            </div>
            }
                <div className={titleClassName}>{title}</div>
        </button>
    );
};

export default Button;
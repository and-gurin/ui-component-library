import React from 'react';
import style from './Button.module.css'
import IconArrow from "assets/icons/icon-arrow";

const Button = ({disabled, title, titlePosition, icon, iconMarginLeft, iconMarginRight, iconWidth, iconPosition, buttonWidth, buttonHeight, xType}) => {

    let finalClassName = style.button;
    let iconClassName;

    if (xType) {
        finalClassName += ` ${style[xType]}`
    }

    if (disabled) {
        finalClassName += `${style[`${xType}Disabled`]}`
    }

    if (iconPosition) {
        iconClassName = `${style[iconPosition]}`
    }

    return (
        <button disabled={disabled}
                style={{width: buttonWidth, height: buttonHeight}}
                className={finalClassName}>
            {icon && <div style={{width: iconWidth, left: iconMarginLeft, right: iconMarginRight}} className={iconClassName}>
                <IconArrow finalClassName={finalClassName}/>
            </div>
            }
                <div style={{marginLeft: titlePosition}} >{title}</div>
        </button>
    );
};

export default Button;
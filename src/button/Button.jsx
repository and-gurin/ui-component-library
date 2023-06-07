import React from 'react';
import style from './Button.module.css'

const Button = ({disabled, title, titlePosition, isIcon, iconMarginLeft, iconMarginRight, iconWidth, iconPosition, buttonWidth, buttonHeight, xType}) => {

    const finalClassName = style.button
        + (xType === 'primary'
            ? ' ' + style.primary : xType === 'secondary'
                ? ' ' + style.secondary : xType === 'outline'
                    ? ' ' + style.outline : xType === 'transparent'
                        ? ' ' + style.transparent : '');

    const disabledClassName = style.button
        + (xType === 'primary' && disabled
            ? ' ' + style.primaryDisabled : xType === 'secondary' && disabled
                ? ' ' + style.secondaryDisabled : xType === 'outline' && disabled
                    ? ' ' + style.outlineDisabled : xType === 'transparent' && disabled
                        ? ' ' + style.transparentDisabled : '');

    const iconClassName = iconPosition === 'iconRight'
        ? style.iconRight : iconPosition === 'iconLeft'
            ? style.iconLeft : iconPosition === 'iconSide' ? style.iconSide : '';

    return (
        <button disabled={disabled}
                style={{width: buttonWidth, height: buttonHeight}}
                className={finalClassName + ' ' + disabledClassName}>
            {isIcon && <div style={{width: iconWidth, left: iconMarginLeft, right: iconMarginRight}} className={iconClassName}>
                <svg style={{width: '100%', height: '100%'}} width="16" height="16" viewBox="0 0 16 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className={finalClassName + ' ' + disabledClassName}
                          d="M1 8H15M15 8L7.99998 0.999878M15 8L7.99998 14.9999"
                          stroke="currentColor"
                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            </div>
            }
                <div style={{marginLeft: titlePosition}} >{title}</div>
        </button>
    );
};

export default Button;
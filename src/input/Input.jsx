import React from 'react';
import style from "input/Input.module.css";

const Input = ({
                   disabled,
                   textLabel,
                   caption,
                   error,
                   value,
                   onChangeHandler,
                   placeholderText
               }
) => {

    return (
        <>
            <div className={style.wrapper}>
                {textLabel && <div className={style.textLabel}>{textLabel}</div>}
            </div>
            <input value={value}
                   onChange={onChangeHandler}
                   className={error ? `${style.input} ${style.error}` : style.input}
                   disabled={disabled}
                   placeholder={placeholderText}
            />
            {!error ? <div className={style.caption}>{caption}</div> :
                <div className={style.errorMessage}>Error Message</div>}
        </>
    );
};

export default Input;
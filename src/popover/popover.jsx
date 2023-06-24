import React from "react";
import styles from "./popover.module.css";
import Button from "button/Button";

const Popover = ({setIsOpen}) => {
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)}/>
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <h5 className={styles.heading}>Remove Item?</h5>
                    <div className={styles.modalContent}>
                        Are you sure want to remove this item from your cart?
                    </div>
                    <div style={{marginBottom: '12px'}}>
                        <Button title={'Sure'}
                                size={'block'}
                                xType={'primary'}
                                onClick={() => setIsOpen(false)}/>
                    </div>
                    <Button title={'No, thanks'}
                            size={'block'}
                            xType={'transparent'}
                            onClick={() => setIsOpen(false)}/>
                </div>
            </div>
        </>
    );
};

export default Popover;
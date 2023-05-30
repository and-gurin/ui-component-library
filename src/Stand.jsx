import React from 'react';
import Button from 'buttons/Button';
import iconMessageLight from 'assets/svg/icon-message-light.svg'


const Stand = () => {
    return (
        <div>
            <Button icon={iconMessageLight}
                    disabled name='Block + primary'
                    xType='primary'
                    width='327px'
                    height='48px'
                    iconPlace='left'
                    iconWidth='24px'
                    iconHeight='24px'
            />
        </div>
    );
};

export default Stand;
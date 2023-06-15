import React from 'react';

const IconArrow = ({finalClassName}) => {
    return (
        <svg className={finalClassName} width="100%" height="100%" viewBox="0 0 16 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
            <path
                  d="M1 8H15M15 8L7.99998 0.999878M15 8L7.99998 14.9999"
                  stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default IconArrow;
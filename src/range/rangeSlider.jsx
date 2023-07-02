import React, { useCallback, useEffect, useRef } from "react";
import style from './rangeSlider.module.css';

const RangeSlider = ({ min, max, onChange, value }) => {

    const range = useRef(null);

    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        const minPercent = getPercent(min);
        const maxPercent = getPercent(value);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [value, getPercent, min]);


    return (
        <div className={style.container}>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={onChange}
                className={style.thumb + ' ' + style.thumbRight}
            />
            <div className={style.slider}>
                <div className={style.sliderTrack} />
                <div ref={range} className={style.sliderRange} />
            </div>
        </div>
    );
};


export default RangeSlider;
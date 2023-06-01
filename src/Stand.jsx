import React, {useState} from 'react';
import Button from 'buttons/Button';
import {Slider} from "@mui/material";

const xTypes = [
    {id: 1, value: 'primary'},
    {id: 2, value: 'secondary'},
    {id: 3, value: 'outline'},
    {id: 4, value: 'transparent'}
]

const buttonHeights = [
    {id: 1, value: '48px'},
    {id: 2, value: '32px'},
]

const iconWidths = [
    {id: 1, value: '16px'},
    {id: 2, value: '24px'},
]

const iconPlaces = [
    {id: 1, value: 'iconLeft'},
    {id: 2, value: 'iconRight'},
    {id: 3, value: 'iconSide'},
]

const Stand = () => {
    const [xType, setXType] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [buttonHeight, setButtonHeight] = useState('')
    const [iconPlace, setIconPlace] = useState('')
    const [buttonWidth, setButtonWidth] = useState(400)
    const [titlePlace, setTitlePlace] = useState(100)
    const [iconMarginLeft, setIconMarginLeft] = useState(100)
    const [iconMarginRight, setIconMarginRight] = useState(100)
    const [isIcon, setIcon] = useState(false)
    const [iconWidth, setIconWidth] = useState('')

    return (
        <div>
            <Button isIcon={isIcon}
                    disabled={disabled}
                    title='Block + primary'
                    xType={xType}
                    buttonWidth={buttonWidth}
                    buttonHeight={buttonHeight}
                    iconPosition={iconPlace}
                    titlePosition={titlePlace}
                    iconWidth={iconWidth}
                    iconMarginLeft={iconMarginLeft}
                    iconMarginRight={iconMarginRight}
            />
            <div>
                <b>xType</b>
                <select value={xType} onChange={(e) => setXType(e.currentTarget.value)}>
                    {xTypes.map((option) => (
                        <option
                            key={option.id}
                            value={option.value}
                        >
                            {option.value}
                        </option>))}
                </select>
            </div>
            <div>
                <b>Disabled</b>
                <input checked={disabled}
                       type={'checkbox'}
                       onChange={(e) => setDisabled(e.currentTarget.checked)}/>
            </div>
            <div>
                <b>buttonHeight</b>
                <select value={buttonHeight} onChange={(e) => setButtonHeight(e.currentTarget.value)}>
                    {buttonHeights.map((option) => (
                        <option key={option.id} value={option.value}>
                            {option.value}
                        </option>))}
                </select>
            </div>
            <div>
                <div><b>buttonWidth</b></div>
                <span>{0}</span>
                <Slider sx={{width: 200}} size="small" max={400} onChange={(event, value) => {
                    setButtonWidth(value)
                }}/>
                <span>{buttonWidth}</span>
            </div>
            <div>
                <div><b>titlePosition</b></div>
                <span>{0}</span>
                <Slider sx={{width: 200}} size="small" onChange={(event, value) => {
                    setTitlePlace(value)
                }}/>
                <span>{titlePlace}</span>
            </div>
            <div>
                <b>isIcon</b>
                <input checked={isIcon}
                       type={'checkbox'}
                       onChange={(e) => setIcon(e.currentTarget.checked)}/>
            </div>
            <div>
                <b>iconWidth</b>
                <select value={iconWidth} onChange={(e) => setIconWidth(e.currentTarget.value)}>
                    {iconWidths.map((option) => (
                        <option key={option.id} value={option.value}>
                            {option.value}
                        </option>))}
                </select>
            </div>
            <div>
                <b>iconPosition</b>
                <select value={iconPlace} onChange={(e) => setIconPlace(e.currentTarget.value)}>
                    {iconPlaces.map((option) => (
                        <option key={option.id} value={option.value}>
                            {option.value}
                        </option>))}
                </select>
            </div>
            <div>
                <div><b>iconMarginLeft</b></div>
                <span>{0}</span>
                <Slider sx={{width: 200}} size="small" onChange={(event, value) => {
                    setIconMarginLeft(value)
                }}/>
                <span>{iconMarginLeft}</span>
            </div>
            <div>
                <div><b>iconMarginRight</b></div>
                <span>{0}</span>
                <Slider sx={{width: 200}} size="small" onChange={(event, value) => {
                    setIconMarginRight(value)
                }}/>
                <span>{iconMarginRight}</span>
            </div>
        </div>
    );
};

export default Stand;
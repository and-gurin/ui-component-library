import React, {useState} from 'react';
import Button from 'button/Button';
import IconArrow from "assets/icons/icon-arrow";
import IconMessage from "assets/icons/icon-message";
import Input from 'input/Input';
import Toggle from "toggle/toggle";
import Radio from "radio/radio";
import Checkbox from "checkbox/checkbox";
import MultiRangeSlider from "range/multiRangeSlider";
import RangeSlider from "range/rangeSlider";
import Popover from "popover/popover";

const icons = {
    iconArrow: IconArrow,
    iconMessage: IconMessage,
}

const xTypes = [
    {id: 1, value: 'primary'},
    {id: 2, value: 'secondary'},
    {id: 3, value: 'outline'},
    {id: 4, value: 'transparent'}
]

const sizes = [
    {id: 1, value: 'block'},
    {id: 2, value: 'large'},
    {id: 3, value: 'small'},
]

const Stand = () => {
    //button
    const [xType, setXType] = useState('primary')
    const [disabled, setDisabled] = useState(false)
    const [icon, setIcon] = useState(false)
    const [iconPlace, setIconPlace] = useState('iconLeftBlockButton')
    const [size, setSize] = useState('block')
    const isIcon = icon && icons['iconArrow']

    //input
    const [caption, setCaption] = useState(false)
    const [error, setError] = useState(false)
    const [isTextLabel, setTextLabel] = useState(false)
    const [value, setValue] = useState('')
    const textLabel = isTextLabel && 'Text label'
    const onChangeInputHandler = (e) => setValue(e.target.value)

    //toggle
    const [toggleChecked, setToggleChecked] = useState(false)
    const onChangeToggleHandler = (e) => setToggleChecked(e.currentTarget.checked);

    //radio
    const [radioValue, setRadioValue] = useState({empty: false, full: false})
    const onChangeTheme = (e) => {
        const {name} = e.target
        if (name === 'empty') {
            setRadioValue({empty: true, full: false})
        }
        if (name === 'full') {
            setRadioValue({empty: false, full: true})
        }
    }

    //checkbox
    const [checkboxChecked, setCheckboxChecked] = useState(false)
    const onChangeCheckboxHandler = (e) => setCheckboxChecked(e.currentTarget.checked)

    //slider multiSlider
    const min = 0
    const max = 500
    const [sliderValue, setSliderValue] = useState(min)
    const onChangeRangeHandler = (event) => {
        const value = event.target.value
        setSliderValue(value);
    }

    //popover
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <br/>
            <b>Disabled</b>
            <input checked={disabled}
                   type={'checkbox'}
                   onChange={(e) => setDisabled(e.currentTarget.checked)}/>
            &nbsp;&nbsp;
            <div style={{display: "flex", flexWrap: 'wrap'}}>
                <div style={{marginRight: '50px'}}>
                    <Button disabled={disabled}
                            title='Block + primary'
                            xType={xType}
                            size={size}
                            Icon={isIcon}
                            iconPosition={iconPlace}
                    />
                    <br/>
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
                        <b>size</b>
                        <select value={size} onChange={(e) => setSize(e.currentTarget.value)}>
                            {sizes.map((option) => (
                                <option
                                    key={option.id}
                                    value={option.value}
                                >
                                    {option.value}
                                </option>))}
                        </select>
                    </div>
                    <b>Icon</b>
                    <input checked={icon}
                           type={'checkbox'}
                           onChange={(e) => setIcon(e.currentTarget.checked)}/>
                    &nbsp;&nbsp;
                    <div>
                        <b>iconPosition</b>
                        <select value={iconPlace} onChange={(e) => setIconPlace(e.currentTarget.value)}>
                            {<option value={'iconLeftBlockButton'}>{'iconLeftBlockButton'}</option>}
                            {<option value={'iconRightBlockButton'}>{'iconRightBlockButton'}</option>}
                            {<option value={'iconSideBlockButton'}>{'iconSideBlockButton'}</option>}
                            {<option value={'iconLeftLargeButton'}>{'iconLeftLargeButton'}</option>}
                            {<option value={'iconRightLargeButton'}>{'iconRightLargeButton'}</option>}
                            {<option value={'iconSideLargeButton'}>{'iconSideLargeButton'}</option>}
                            {<option value={'iconLeftSmallButton'}>{'iconLeftSmallButton'}</option>}
                            {<option value={'iconRightSmallButton'}>{'iconRightSmallButton'}</option>}
                            {<option value={'iconSideSmallButton'}>{'iconSideSmallButton'}</option>}
                        </select>
                    </div>
                </div>
                <br/>
                <div style={{marginRight: '50px'}}>
                    <Input disabled={disabled}
                           error={error}
                           caption={caption}
                           placeholderText='Placeholder text'
                           textLabel={textLabel}
                           onChangeHandler={onChangeInputHandler}
                           value={value}
                    />
                    <br/>
                    <div>
                        <b>caption</b>
                        <input checked={caption}
                               type={'checkbox'}
                               onChange={(e) => setCaption(e.currentTarget.checked)}/>
                    </div>
                    <div>
                        <b>error</b>
                        <input checked={error}
                               type={'checkbox'}
                               onChange={(e) => setError(e.currentTarget.checked)}/>
                    </div>
                    <div>
                        <b>text label</b>
                        <input checked={isTextLabel}
                               type={'checkbox'}
                               onChange={(e) => setTextLabel(e.currentTarget.checked)}/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div style={{display: "flex", flexWrap: 'wrap'}}>
                <div style={{marginRight: '50px'}}>
                    <Toggle disabled={disabled}
                            onChange={onChangeToggleHandler}
                            checked={toggleChecked}/>
                </div>
                <div style={{marginRight: '50px'}}>
                    <Radio disabled={disabled}
                           name={'empty'}
                           value={'empty'}
                           id={'empty'}
                           onChange={onChangeTheme}
                           checked={radioValue.empty}/>
                    <Radio disabled={disabled}
                           name={'full'}
                           value={'full'}
                           id={'full'}
                           onChange={onChangeTheme}
                           checked={radioValue.full}/>
                </div>
                <div style={{marginRight: '50px'}}>
                    <Checkbox
                        disabled={disabled}
                        onChange={onChangeCheckboxHandler}
                        checked={checkboxChecked}/>
                </div>
                <div>
                    <div style={{marginBottom: '50px'}}>
                        <RangeSlider
                            min={min}
                            max={max}
                            onChange={onChangeRangeHandler}
                            value={sliderValue}
                            />

                    </div>
                    <div>
                        <MultiRangeSlider
                            min={min}
                            max={max}
                            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                        />
                    </div>
                </div>
            </div>
            <div>
                <Button xType={'secondary'}
                        title={'Open popover'}
                        size={'block'}/>
                {isOpen && <Popover setIsOpen={setIsOpen}/>}
            </div>
        </div>
    );
};

export default Stand;
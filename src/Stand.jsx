import React, {useState} from 'react';
import Button from 'button/Button';
import IconArrow from "assets/icons/icon-arrow";
import IconMessage from "assets/icons/icon-message";
import Input from 'input/Input';

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
    const [xType, setXType] = useState('primary')
    const [disabled, setDisabled] = useState(false)
    const [icon, setIcon] = useState(false)
    const [iconPlace, setIconPlace] = useState('iconLeftBlockButton')
    const [size, setSize] = useState('block')
    const isIcon = icon && icons['iconArrow']

    const [caption, setCaption] = useState(false)
    const [error, setError] = useState(false)
    const [isTextLabel, setTextLabel] = useState(false)
    const [value, setValue] = useState('')
    const textLabel = isTextLabel && 'Text label'
    const onChangeHandler = (e) => setValue(e.target.value)

    return (
        <div>
            <br/>
            <b>Disabled</b>
            <input checked={disabled}
                   type={'checkbox'}
                   onChange={(e) => setDisabled(e.currentTarget.checked)}/>
            &nbsp;&nbsp;
            <div style={{display: "flex"}}>
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
                <div>
                    <Input disabled={disabled}
                           error={error}
                           caption={caption}
                           placeholderText='Placeholder text'
                           textLabel={textLabel}
                           onChangeHandler={onChangeHandler}
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
        </div>
    );
};

export default Stand;
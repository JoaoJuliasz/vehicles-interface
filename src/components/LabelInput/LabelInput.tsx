import React, { InputHTMLAttributes, memo } from 'react';
import { useFocus } from '../../hooks/useFocus/useFocus';
import { Vehicle } from '../../types/types';

import style from './labelinput.module.scss'

type Props = {
    title: string
    objType: keyof Vehicle
    value: string | number
    handleChange: (key: keyof Vehicle, value: string | boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

const LabelInput = ({ title, objType, value, handleChange, ...rest }: Props) => {

    const { focused, handleBlur, handleFocus } = useFocus()

    return (
        <div className={`${style.container} ${focused || value ? style.focused : ''}`}>
            <label htmlFor={title}>{title}</label>
            <input onFocus={handleFocus} onBlur={handleBlur} onChange={e => handleChange(objType, e.target.value)}
                value={value} name={title} type="text" {...rest} />
        </div>
    );
};

export default memo(LabelInput);
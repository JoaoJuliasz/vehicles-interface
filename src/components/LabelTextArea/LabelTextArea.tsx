import { memo, TextareaHTMLAttributes } from 'react';
import { useFocus } from '../../hooks/useFocus/useFocus';
import { Vehicle } from '../../types/types';

import style from './labeltextarea.module.scss'

type Props = {
    title: string
    objType: keyof Vehicle
    value: string | number
    handleChange: (key: keyof Vehicle, value: string | boolean) => void
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const LabelTextArea = ({ title, objType, value, handleChange, ...rest }: Props) => {

    const { focused, handleBlur, handleFocus } = useFocus()

    return (
        <div className={`${style.container} ${focused || value ? style.focused : ''}`}>
            <label htmlFor={title}>{title}</label>
            <textarea rows={10} maxLength={1000}
                onChange={e => handleChange(objType, e.target.value)} value={value}
                onFocus={handleFocus} onBlur={handleBlur} name={title} {...rest} />
        </div>
    );
};

export default memo(LabelTextArea);
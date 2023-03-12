import { memo } from 'react';
import { useFocus } from '../../hooks/useFocus';
import { Vehicle } from '../../types/types';

import style from './labeltextarea.module.scss'

type Props = {
    title: string
    objType: keyof Vehicle
    value: string | number
    handleChange: (key: keyof Vehicle, value: string | boolean) => void
}

const LabelTextArea = ({ title, objType, value, handleChange }: Props) => {

    const { focused, handleBlur, handleFocus } = useFocus()

    return (
        <div className={`${style.container} ${focused || value ? style.focused : ''}`}>
            <label htmlFor="">Description</label>
            <textarea rows={10} maxLength={1000}
                onChange={e => handleChange(objType, e.target.value)}
                onFocus={handleFocus} onBlur={handleBlur} name="" id="" />
        </div>
    );
};

export default memo(LabelTextArea);
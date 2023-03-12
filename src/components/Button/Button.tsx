import { ButtonHTMLAttributes } from 'react';
import style from './button.module.scss'

type Props = {
    children: JSX.Element | JSX.Element[]
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...rest }: Props) => {
    return (
        <button className={style.btn} {...rest}>
            {children}
        </button>
    );
};

export default Button;
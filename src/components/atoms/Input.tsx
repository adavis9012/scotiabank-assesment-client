import React from "react";
import classNames from "classnames";
import './styles/Input.scss';

interface InputProps {
    className?: string,
    placeholder?: string,
    size?: 'small' | 'medium' | 'large' | 'full'
    type?: string
    value?: string
    onChange?: onChangeFunc
}

interface onChangeFunc {
    (event: React.ChangeEvent<HTMLInputElement>): void
}

const Input: React.FC<InputProps> = ((props) => {
    const classes = classNames('inputText', `inputText-${props.size}`, props.className);

    return (
        <input className={classes} placeholder={props.placeholder} value={props.value} type={props.type} onChange={props.onChange}/>
    );
});

Input.defaultProps = {
    placeholder: '',
    size: 'medium',
    value: '',
    type: 'text',
};

export default Input;
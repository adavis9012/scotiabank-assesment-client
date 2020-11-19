import React from 'react';
import classNames from "classnames";
import "./styles/Button.scss";

interface ButtonProps {
    children?: any
    className?: string
    type?: string
    icon?: any
    onClick: onClickFunc
}

interface onClickFunc {
    (event: React.MouseEvent<HTMLButtonElement>): void
}

const Button: React.FC<ButtonProps> = ((props) => {
    const classes = classNames('button', getButtonTypeClass(), props.className);

    function render() {
        const content = props.icon ? <props.icon className="button_icon" /> : props.children;

        return (
            <button className={classes} onClick={props.onClick}>
                {content}
            </button>
        );
    }

    function getButtonTypeClass(): string {
        if(props.icon) return 'button-icon';

        return 'button-primary';
    }

    return render();
});

export default Button;
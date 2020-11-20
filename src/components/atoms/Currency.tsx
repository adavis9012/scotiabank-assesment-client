import React from "react";
import classNames from "classnames";
import './styles/Currency.scss'

interface CurrencyProps {
    className?: {
        currency: string
        value: string
    }
    children: number
    type?: string
}

const Currency: React.FC<CurrencyProps> = ((props) => {
    const className = {
        currency: classNames('currency_sign', props.className?.currency),
        value: classNames('currency_value', props.className?.value),
    };
    const numberFormat = new Intl.NumberFormat('es-CO', {
        style: 'decimal',
        minimumFractionDigits: 0
    });

    return (
        <React.Fragment>
            {props.children < 0 && '('}
            <span className={className.currency}>$</span>
            <span className={className.value}>
                {numberFormat.format(Math.abs(props.children))}
            </span>
            {props.children < 0 && ')'}
        </React.Fragment>
    );
});

Currency.defaultProps = {
    children: 0,
    type: "COP"
};

export default Currency;


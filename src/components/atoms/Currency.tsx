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
        currency: props.type,
        minimumFractionDigits: 0
    });

    return (
        <React.Fragment>
            <span className={className.currency}>$</span>
            <span className={className.value}>
                {numberFormat.format(props.children)}
            </span>
        </React.Fragment>
    );
});

Currency.defaultProps = {
    children: 0,
    type: "COP"
};

export default Currency;


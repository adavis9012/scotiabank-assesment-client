import React from 'react';
import Currency from "../atoms/Currency";
import classNames from 'classnames';
import './styles/Movement.scss';
import {CashIcon, CreditCardIcon, EntryIcon} from "../atoms/Icons";

export interface MovementProps {
    description: string
    amount: number
    type: string
    date: string
}

const Movement: React.FC<MovementProps> = props => {
    const classValue = classNames('movement_value', `movement_value-${props.type}`);

    function render() {
        return (
            <li className="movement">
                <div className="movement_icon">
                    {props.type === 'debit' && <CashIcon className="movement_icon_entry" />}
                    {props.type === 'credit' && <CreditCardIcon className="movement_icon_entry" />}
                </div>
                {renderDate(props.date)}
                <p className="movement_head">{props.description}</p>
                <p className={classValue}>
                    <Currency type="COP">
                        {renderAmount(props.amount)}
                    </Currency>
                </p>
            </li>
        );
    }

    function renderDate(date: string) {
        const formattedDate = new Date(+date);
        const days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
        const dayOfWeek = days[formattedDate.getUTCDay()];
        const day = formattedDate.getUTCDate();

        return (
            <div className="movement_date">
                <p className="movement_date_item movement_date_item-weekDay">{dayOfWeek}</p>
                <p className="movement_date_item">{day}</p>
            </div>
        );
    }

    function renderAmount(amount:any) {
        switch (props.type) {
            case 'debit':
                return -Math.abs(amount);
            case 'credit':
                return Math.abs(amount);
            default:
                return Math.abs(amount);
        }
    }

    return render();
};

export default Movement;

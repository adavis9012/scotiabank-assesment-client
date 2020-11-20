import React from 'react';
import Currency from "../atoms/Currency";
import classNames from 'classnames';
import './styles/Movement.scss';
import {EntryIcon} from "../atoms/Icons";

export interface MovementProps {
    description: string,
    amount: number,
    type: string
}

const Movement: React.FC<MovementProps> = props => {
    const classIcon = classNames('movement_icon', `movement_icon-${props.type}`);

    function render() {
        return (
            <li className="movement">
                <div className={classIcon}>
                    <EntryIcon className="movement_icon_entry"/>
                </div>
                <p className="movement_head">{props.description}</p>
                <p className="movement_content">
                    <Currency type="COP">
                        {renderAmount(props.amount)}
                    </Currency>
                </p>
            </li>
        );
    }

    function renderAmount(amount:any) {
        switch (props.type) {
            case 'debit':
                return -amount;
            case 'credit':
                return amount;
            default:
                return amount;
        }
    }

    return render();
};

export default Movement;

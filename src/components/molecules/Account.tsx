import React from 'react';
import Button from '../atoms/Button';
import Currency from "../atoms/Currency";
import {useHistory} from 'react-router-dom';

import './styles/Account.scss';

export interface AccountProps {
    accountId: number
    accountType: string
    statement: string
    availableValue: number
}

const Account: React.FC<AccountProps> = (props) => {
    const value = props.availableValue || 0;
    const history = useHistory();

    function handleDetailsClick() {
        history.push(`/movements/${props.accountId}`);
    }

    function getAccountName(accountType: string): string {
        switch (accountType.toLowerCase()) {
            case 'savingaccount':
                return 'Cuenta de ahorro';
            case 'currentaccount':
                return 'Cuenta corriente';
            case 'creditcard':
                return  'Tarjeta de credito';
            default:
                return '';
        }
    }

    function getStatement(statement: string): string {
        const split: RegExpMatchArray = statement.match(/.{1,4}/g) || [];

        return split.join(' ');
    }

    return (
        <div className="account">
            <header className="account_header">
                <p className="account_text account_text-header">
                    {getAccountName(props.accountType)}
                    <small className="account_text account_text-small">{getStatement(props.statement)}</small>
                </p>
            </header>
            <article className="account_body">
                <p className="account_text account_text-value">
                    <Currency type="COP">{value}</Currency>
                </p>
                <p className="account_text account_text-description">
                    Saldo disponible
                </p>
                <Button
                    className="account_button"
                    onClick={handleDetailsClick}
                >
                    Ver Detalles
                </Button>
            </article>
        </div>
    );
};

export default Account;

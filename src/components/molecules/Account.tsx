import React from 'react';
import Button from '../atoms/Button';
import Currency from "../atoms/Currency";
import {useHistory} from 'react-router-dom';

import './styles/Account.scss';
import {CreditCardIcon, SavingsIcon} from "../atoms/Icons";

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

    function getAccountIcon(accountType: string) {
        switch (accountType.toLowerCase()) {
            case 'savingaccount':
                return <SavingsIcon className="account_icon" width="36" />;
            case 'currentaccount':
                return <SavingsIcon className="account_icon" width="36" />;
            case 'creditcard':
                return <CreditCardIcon className="account_icon" width="36" />;
            default:
                return '';
        }
    }

    function getAccountName(accountType: string): string {
        switch (accountType.toLowerCase()) {
            case 'savingaccount':
                return 'Cuenta de Ahorros';
            case 'currentaccount':
                return 'Cuenta Corriente';
            case 'creditcard':
                return 'Tarjeta de Credito';
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
                {getAccountIcon(props.accountType)}
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
                <hr/>
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

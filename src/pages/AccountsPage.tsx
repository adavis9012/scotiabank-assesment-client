import React from 'react';
import './styles/AccountsPage.scss';
import {gql, useQuery} from "@apollo/client";
import {RouteComponentProps} from "react-router";
import AccountList from "../components/organisms/AccountList";

interface ACCOUNT_DATA {
    accountId: number
    accountType: string
    statement: string
    availableValue: number
}

interface ACCOUNT_LIST_DATA {
    accounts: ACCOUNT_DATA[]
}

const ACCOUNTS_QUERY = gql`
    {
        accounts(orderBy: {availableValue: desc}) {
            accountId: id
            accountType
            statement
            availableValue
        }
    }
`;

const AccountsPage: React.FC<RouteComponentProps> = (props) => {
    const {loading, error, data} = useQuery<ACCOUNT_LIST_DATA>(
        ACCOUNTS_QUERY
    );

    function render() {
        if (loading) return <div>Buscando datos...</div>

        if (error) return <div>Error!</div>;

        const accounts = geAccountsToRender(data as ACCOUNT_LIST_DATA);

        return (
            <section className="accountsPage">
                <h1>Mis Cuentas</h1>
                <section className="accountsPage_wrapper">
                    <AccountList accounts={accounts} />
                </section>
            </section>
        );
    }

    function geAccountsToRender(data: ACCOUNT_LIST_DATA): ACCOUNT_DATA[] {
        return data.accounts;
    }

    return render();
};

export default AccountsPage;

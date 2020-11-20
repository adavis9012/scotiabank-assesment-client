import React, {FunctionComponent} from 'react';
import Account, {AccountProps} from "../molecules/Account";
import './styles/AccountList.scss';

interface AccountListProps {
    accounts: AccountProps[]
}

const AccountList: FunctionComponent<AccountListProps> = (props) => {
    if (!props.accounts.length) return (
        <div className="accountList">
            <p>
                No tienes productos con nosotros, Te invitamos a conocer nuestros productos y solicitarlos sin salir de tu casa.
            </p>
            <p>
                Adquirir productos <a href="https://www.scotiabankcolpatria.com/" target="_blank" className="accountList_link">aqui</a>.
            </p>
        </div>
    );

    const accountList = props.accounts.map((data: AccountProps) => {
        return <Account key={`account-${data.statement}`} {...data}/>;
    });

    return (<div className="accountList">
        {accountList}
    </div>);
};

export default AccountList;

import React, {FunctionComponent} from 'react';
import Account, {AccountProps} from "../molecules/Account";
import './styles/AccountList.scss';

interface AccountListProps {
    accounts: AccountProps[]
}

const AccountList: FunctionComponent<AccountListProps> = (props) => {
    const accountList =  props.accounts.map((data: AccountProps) => {
        return <Account key={`account-${data.statement}`} {...data}/>;
    });

    return(<div className="accountList">
        {accountList}
    </div>);
};

export default AccountList;

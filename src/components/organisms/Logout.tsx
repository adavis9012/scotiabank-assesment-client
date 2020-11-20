import React from 'react';
import './styles/Logout.scss';
import {ApolloError, gql, useQuery} from "@apollo/client";
import Button from "../atoms/Button";

interface LogoutProps {
    handleLogin: (value: boolean) => void
}

interface CLIENT_DATA {
    client: {
        name: string
        lastname: string
    }
}

const CLIENT_QUERY = gql`
    query {
        client{
            name
        }
    }
`;

const Logout: React.FC<LogoutProps> = (props) => {
    const {loading, error, data} = useQuery<CLIENT_DATA>(
        CLIENT_QUERY
    );

    if (loading) return <div>Buscando datos...</div>

    if (error) return handleError(error);

    const client = getClientToRender(data as CLIENT_DATA);

    function render() {
        return (
            <div className="logout">
                <p className="logout_text logout_text-greeting">Hola, {renderFullName(client)}</p>
                <Button onClick={() => {props.handleLogin(false)}}>
                    Cerrar sesión
                </Button>
            </div>
        );
    }

    function renderFullName(client: CLIENT_DATA["client"]): string {
        return `${client.name}`
    }

    function getClientToRender(data: CLIENT_DATA) {
        return data.client;
    }

    function handleError(error: ApolloError) {
        return <div>Error!</div>;
    }

    return render();
};

export default Logout;

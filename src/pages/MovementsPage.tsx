import React from 'react';
import MovementList from "../components/organisms/MovementList";
import {ApolloError, gql, useQuery} from "@apollo/client";
import {useParams} from 'react-router';
import {Link} from "react-router-dom";
import './styles/MovementsPage.scss';

interface MOVEMENT_DATA {
    description: string
    amount: number
    date: string
    type: string
}

interface MOVEMENT_LIST_DATA {
    account: {
        statement: string
    }
    movements: MOVEMENT_DATA[]
}

const MOVEMENTS_QUERY = (id: string) => {
    return gql`
        {
            account(id: ${id}) {
                statement
            }
            movements(accountId: ${id}) {
                description
                amount
                date: createdAt
                type
            }
        }
    `
};

export const MovementsPage = () => {
    const { id }: {id: string} = useParams();
    const {loading, error, data} = useQuery<MOVEMENT_LIST_DATA>(
        MOVEMENTS_QUERY(id)
    );

    function render() {
        if (loading) return <div>Buscando datos...</div>

        if (error) return handleError(error);

        const movements = getMovementsToRender(data as MOVEMENT_LIST_DATA);

        return (
            <section className="movementsPage">
                <h1 className="movementsPage_title">{`Movimientos del producto ${data?.account.statement}`}</h1>

                {!loading && !error && (
                    <MovementList
                        movements={movements}
                    />
                )}
            </section>
        );
    }

    function getMovementsToRender(data: MOVEMENT_LIST_DATA): MOVEMENT_DATA[] {
        return data.movements;
    }

    function handleError(error: ApolloError) {
        switch (error.message) {
            case 'Not authenticated':
                return <p>
                    Error de autenticación, ¿Desea <Link to="/">ingresar</Link> o <Link to="/">crear una cuenta</Link>?
                </p>;
            case 'Cannot return null for non-nullable field Query.account.':
                return <p>
                    No es posible acceder a este movimiento.
                </p>
            default:
                return <div>Error!</div>;
        }
    }

    return render();
};

export default MovementsPage;

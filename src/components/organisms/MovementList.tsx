import React from 'react';
import Movement, {MovementProps} from "../molecules/Movement";

interface MovementListProps {
    title?: string,
    movements: MovementProps[]
}

const MovementList: React.FC<MovementListProps> = (props) => {
    const movementList = props.movements.map((movement: MovementProps, index) => {
        return <Movement key={`movement-${movement.type}-${index}`} {...movement}>{movement.description}</Movement>;
    });

    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {movementList}
            </ul>
        </div>
    );
}

export default MovementList;

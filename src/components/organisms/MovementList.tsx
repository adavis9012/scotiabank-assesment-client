import React from 'react';
import Movement, {MovementProps} from "../molecules/Movement";
import './styles/MovementList.scss';

interface MovementListProps {
    movements: MovementProps[]
}

const MovementList: React.FC<MovementListProps> = (props) => {
    const movementList = props.movements.map((movement: MovementProps, index) => {
        return <Movement key={`movement-${movement.type}-${index}`} {...movement}>{movement.description}</Movement>;
    });

    return (
        <ul className="movementList">
            {movementList}
        </ul>
    );
}

export default MovementList;

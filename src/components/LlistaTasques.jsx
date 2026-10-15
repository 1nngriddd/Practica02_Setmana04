import './LlistaTasques.css'
import Tasca from './Tasca';

function LlistaTasques({ tasques, onCanviarEstat }) {
    if (tasques.length === 0) {
        return <p className="buit">No hi ha cap tasca amb aquests filtres.</p>;
    }

    return (
        <div className="llista">
            {tasques.map(tasca => (
                <Tasca
                    key={tasca.id}
                    tasca={tasca}
                    onCanviarEstat={onCanviarEstat}
                />
            ))}
        </div>
    );
}

export default LlistaTasques;

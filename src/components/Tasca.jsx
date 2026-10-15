function Tasca({ tasca, onCanviarEstat }) {
    return (
        <div className={tasca.completada ? 'tasca feta' : 'tasca'}>
            <p className="titol">{tasca.titol}</p>
            <p className="descripcio">{tasca.descripcio}</p>
            <div className="etiquetes">
                <span className="etiqueta">{tasca.categoria}</span>
                <span className="etiqueta">Prioritat {tasca.prioritat}</span>
            </div>
            <p className="estat">{tasca.completada ? 'Completada' : 'Pendent'}</p>
            <button onClick={() => onCanviarEstat(tasca.id)}>
                {tasca.completada ? 'Marcar com pendent' : 'Marcar com completada'}
            </button>
        </div>
    );
}

export default Tasca;

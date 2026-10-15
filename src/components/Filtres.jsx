function Filtres({ filtreEstat, setFiltreEstat, filtreCategoria, setFiltreCategoria, filtrePrioritat, setFiltrePrioritat }) {
    return (
        <div className="targeta">
            <h2>Filtres</h2>
            <div className="filtres">
                <div className="filtre">
                    <label>Estat:</label>
                    <button className={filtreEstat === 'Totes' ? 'actiu' : ''} onClick={() => setFiltreEstat('Totes')}>Totes</button>
                    <button className={filtreEstat === 'Pendents' ? 'actiu' : ''} onClick={() => setFiltreEstat('Pendents')}>Pendents</button>
                    <button className={filtreEstat === 'Completades' ? 'actiu' : ''} onClick={() => setFiltreEstat('Completades')}>Completades</button>
                </div>

                <div className="filtre">
                    <label>Categoria:</label>
                    <select value={filtreCategoria} onChange={(event) => setFiltreCategoria(event.target.value)}>
                        <option value="Totes">Totes</option>
                        <option value="Feina">Feina</option>
                        <option value="Personal">Personal</option>
                        <option value="Estudis">Estudis</option>
                    </select>
                </div>

                <div className="filtre">
                    <label>Prioritat:</label>
                    <select value={filtrePrioritat} onChange={(event) => setFiltrePrioritat(event.target.value)}>
                        <option value="Totes">Totes</option>
                        <option value="Baixa">Baixa</option>
                        <option value="Mitjana">Mitjana</option>
                        <option value="Alta">Alta</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Filtres;

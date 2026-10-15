import { useState } from 'react'
import './FormulariTasca.css'

function FormulariTasca({ onAfegir }) {
    const [formulari, setFormulari] = useState({
        titol: '',
        descripcio: '',
        categoria: '',
        prioritat: '',
        completada: false
    });

    const [errors, setErrors] = useState({
        titol: '',
        descripcio: '',
        categoria: '',
        prioritat: ''
    });

    function handleSubmit(event) {
        event.preventDefault();

        const errorsNous = {
            titol: '',
            descripcio: '',
            categoria: '',
            prioritat: ''
        };

        if (formulari.titol.trim() === '') errorsNous.titol = 'La tasca ha de tenir un Títol';
        if (formulari.descripcio.trim() === '') errorsNous.descripcio = 'La tasca ha de tenir una Descripció';
        if (formulari.categoria.trim() === '') errorsNous.categoria = 'La tasca ha de tenir una Categoria';
        if (formulari.prioritat.trim() === '') errorsNous.prioritat = 'La tasca ha de tenir una Prioritat';

        setErrors(errorsNous);

        if (errorsNous.titol !== '' || errorsNous.descripcio !== '' || errorsNous.categoria !== '' || errorsNous.prioritat !== '') {
            return;
        }

        const tascaNova = {
            id: Date.now(),
            ...formulari
        };

        onAfegir(tascaNova);

        setFormulari({
            titol: '',
            descripcio: '',
            categoria: '',
            prioritat: '',
            completada: false
        });
    }

    function canviInput(event) {
        const { name, value, type, checked } = event.target;

        setFormulari({
            ...formulari,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    return (
        <div className="targeta">
            <h2>Nova tasca</h2>
            <form className="formulari" onSubmit={handleSubmit}>
                <label>Títol *</label>
                <input
                    name="titol"
                    value={formulari.titol}
                    onChange={canviInput}
                />
                <div className="error" style={{ color: 'red' }}>
                    {errors.titol}
                </div>

                <label>Descripció *</label>
                <input
                    name="descripcio"
                    value={formulari.descripcio}
                    onChange={canviInput}
                />
                <div className="error" style={{ color: 'red' }}>
                    {errors.descripcio}
                </div>

                <label>Categoria *</label>
                <select name="categoria" value={formulari.categoria} onChange={canviInput}>
                    <option value=""></option>
                    <option value="Feina">Feina</option>
                    <option value="Personal">Personal</option>
                    <option value="Estudis">Estudis</option>
                </select>
                <div className="error" style={{ color: 'red' }}>
                    {errors.categoria}
                </div>

                <label>Prioritat *</label>
                <select name="prioritat" value={formulari.prioritat} onChange={canviInput}>
                    <option value=""></option>
                    <option value="Baixa">Baixa</option>
                    <option value="Mitjana">Mitjana</option>
                    <option value="Alta">Alta</option>
                </select>
                <div className="error" style={{ color: 'red' }}>
                    {errors.prioritat}
                </div>

                <div className="check">
                    <input
                        name="completada"
                        type="checkbox"
                        checked={formulari.completada}
                        onChange={canviInput}
                    />
                    <label>Completada</label>
                </div>

                <button type="submit">Guardar Tasca</button>
            </form>
        </div>
    );
}

export default FormulariTasca;

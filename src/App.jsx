import { useState } from 'react'
import './App.css'
import tasquesInicials from './data/data.js';
import FormulariTasca from './components/FormulariTasca';
import LlistaTasques from './components/LlistaTasques';
import Filtres from './components/Filtres';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [tasques, setTasques] = useState(tasquesInicials);
  const [filtreEstat, setFiltreEstat] = useState('Totes');
  const [filtreCategoria, setFiltreCategoria] = useState('Totes');
  const [filtrePrioritat, setFiltrePrioritat] = useState('Totes');

  function afegirTasca(novaTasca) {
    setTasques([...tasques, novaTasca]);
  }

  function canviarEstat(id) {
    const tasquesNoves = tasques.map(tasca => {
      if (tasca.id === id) {
        return {
          ...tasca,
          completada: !tasca.completada
        };
      }
      return tasca;
    });

    setTasques(tasquesNoves);
  }

  const tasquesFiltrades = tasques
    .filter(tasca => {
      if (filtreEstat === 'Pendents') return !tasca.completada;
      if (filtreEstat === 'Completades') return tasca.completada;
      return true;
    })
    .filter(tasca => filtreCategoria === 'Totes' || tasca.categoria === filtreCategoria)
    .filter(tasca => filtrePrioritat === 'Totes' || tasca.prioritat === filtrePrioritat);

  return (
    <div className="app">
      <Header />
      <FormulariTasca onAfegir={afegirTasca} />
      <Filtres
        filtreEstat={filtreEstat}
        setFiltreEstat={setFiltreEstat}
        filtreCategoria={filtreCategoria}
        setFiltreCategoria={setFiltreCategoria}
        filtrePrioritat={filtrePrioritat}
        setFiltrePrioritat={setFiltrePrioritat}
      />
      <LlistaTasques tasques={tasquesFiltrades} onCanviarEstat={canviarEstat} />
      <Footer />
    </div>
  );
}

export default App;

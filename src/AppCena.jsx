import { useState } from 'react'
import Header from './components/Header'
import { db4 } from './data/db4'
import './App.css'
import Cena from './components/Cena'
import './index.css'

function App() {
  const [data, setData] = useState(db4)

  return (
    <div className="app">
      <Header />
      <main className="container-xl mt-5 main-content">
        <h2 className="read-the-docs">Cenas de Reyes</h2>
        <div className="row mt-5">
        {data.map ((cena)=>(
           
          <Cena
            key={cena.id} cena={cena}
            />
          ))}
        </div>
      </main>
      
      <footer className="bg-dark mt-5 py-5">
    <div className="container-xl">
      <p className="text-white text-center fs-4 mt-4 m-md-0">Delicias - Todos los derechos Reservados</p>
    </div>
  </footer>
    </div>
  );
}

export default App

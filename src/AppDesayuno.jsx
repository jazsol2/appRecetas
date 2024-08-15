import { useState } from 'react'
import Header from './components/Header'
import { db2 } from './data/db2'
import './App.css'
import Desayuno from './components/Desayuno'
import './index.css'

function App() {
  const [data, setData] = useState(db2)

  return (
    <div className="app">
      <Header />
      <main className="container-xl mt-5 main-content">
        <h2 className="read-the-docs">Desayuno de Campeones</h2>
        <div className="row mt-5">
        {data.map ((desayuno)=>(
           
          <Desayuno
            key={desayuno.id} desayuno={desayuno}
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

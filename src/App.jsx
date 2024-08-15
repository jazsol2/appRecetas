import { useState } from 'react'
import Header from './components/Header'
import { db } from './data/db'
import './App.css'
import Receta from './components/Receta'
import './index.css'

function App() {
  const [data, setData] = useState(db)

  return (
    <div className="app">
      <Header />
      <main className="container-xl mt-5 main-content">
        <h2 className="read-the-docs">El sabor de la cocina</h2>
        <div className="row mt-5">
            <img 
              src="img/portada.jpg" 
              alt="Descripción de la imagen" 
              className="img-fluid" 
              style={{ maxWidth: '100%', height: 'auto' }} 
            />
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

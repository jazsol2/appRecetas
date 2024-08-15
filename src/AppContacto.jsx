import { useState } from 'react';
import Header from './components/Header';
import { db } from './data/db';
import './App.css';
import './index.css';

function App() {
  const [data, setData] = useState(db);

  return (
    <div className="app">
      <Header />
      <main className="container-xl mt-5 main-content">
        <div className="row mt-5">
          <div className="col-12">
            <section>
              <h2 className="text-center">Formulario de Contacto</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nombre:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Ingresa tu nombre"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Ingresa tu correo electrónico"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Asunto:</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    placeholder="Ingresa el asunto"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje:</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Escribe tu mensaje"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </section>
          </div>
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

export default App;

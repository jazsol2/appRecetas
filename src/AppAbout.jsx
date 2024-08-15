import { useState } from 'react';
import Header from './components/Header';
import { db } from './data/db';
import './App.css';
import './index.css';

function App() {
  const [data, setData] = useState(db);

  return (
    <div className="app">
      <Header style={{ marginBottom: 0 }} /> 
      <main className="container-xl mt-5 main-content" style={{ marginTop: 0 }}>
        <div className="row mt-5">
          <div className="col-12">
            <section>
              <h3 align="center">Nuestra Misión</h3>
              <p align="left">
                En Receta Saludable, nuestra misión es transformar la forma en que las personas piensan sobre la alimentación saludable. Creemos que comer bien no solo es esencial para una vida sana, sino que también puede ser delicioso y gratificante. Nos dedicamos a ofrecer recetas saludables que son fáciles de preparar, llenas de sabor y adaptadas a todas las necesidades y estilos de vida.
              </p>

              <h3 align="center">Nuestra Visión</h3>
              <p align="left">
                Imaginamos un mundo donde cada comida sea una oportunidad para nutrir el cuerpo y el alma. Nuestro objetivo es inspirar a las personas a hacer elecciones alimenticias conscientes que no solo beneficien su salud, sino también el bienestar de su familia y la sostenibilidad del planeta.
              </p>

              <h3 align="center">Nuestros Valores</h3>
              <p align="left">
                <li><strong>Salud y Bienestar:</strong> Creemos que la comida es una herramienta poderosa para mejorar la salud y el bienestar general.</li>
                <li><strong>Sostenibilidad:</strong> Nos comprometemos a utilizar ingredientes frescos y sostenibles para proteger nuestro planeta.</li>
                <li><strong>Innovación:</strong> Estamos constantemente buscando nuevas formas de hacer que la comida saludable sea accesible y emocionante.</li>
                <li><strong>Comunidad:</strong> Valoramos la conexión con nuestros clientes y nos esforzamos por construir una comunidad basada en el apoyo mutuo y el intercambio de conocimientos.</li>
              </p>

              <h3 align="center">Quiénes Somos</h3>
              <p align="left">
                Somos un equipo apasionado de chefs, nutricionistas y entusiastas de la comida que comparten un amor por la cocina saludable. Con años de experiencia en el campo de la nutrición y la gastronomía, hemos reunido nuestras habilidades para crear una plataforma que no solo ofrece recetas deliciosas, sino que también educa e inspira a nuestros usuarios a hacer elecciones saludables.
              </p>

              <h3 align="center">Nuestra Historia</h3>
              <p align="left">
                Receta Saludable comenzó con una simple idea: mostrar al mundo que la comida saludable puede ser tanto nutritiva como deliciosa. Fundada en [Año de Fundación], nuestra empresa ha crecido a partir de un pequeño blog de recetas a una comunidad en línea vibrante y en expansión. A lo largo de los años, hemos trabajado con expertos en nutrición, chefs y agricultores locales para ofrecer lo mejor en recetas saludables.
              </p>

              <h3 align="center">Nuestro Compromiso</h3>
              <p align="left">
                Nos comprometemos a proporcionarte recetas que no solo sean saludables, sino también fáciles de hacer y adaptadas a tus necesidades. Estamos aquí para ayudarte en cada paso del camino hacia una alimentación más saludable, ofreciendo consejos prácticos, guías de ingredientes y apoyo continuo.
              </p>

              <h3 align="center">Únete a Nosotros</h3>
              <p align="left">
                Si estás buscando formas de hacer que la comida saludable sea parte de tu vida diaria, te invitamos a unirte a nuestra comunidad. Síguenos en nuestras redes sociales, suscríbete a nuestro boletín y no te pierdas nuestras últimas recetas y consejos.
              </p>

              <h3 align="center">Contacto</h3>
              <p align="left">
                Para más información o cualquier pregunta, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte y escuchar tus comentarios.
              </p>
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

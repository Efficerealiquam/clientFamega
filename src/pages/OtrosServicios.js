import React, { useEffect } from "react";
import "../styles/otroServicios.css";

function OtrosServicios() {
  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    Array.prototype.forEach.call(this.querySelectorAll(".layer"), (layer) => {
      const speed = layer.getAttribute("data-speed");

      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  /* PARA QUE AL NAVEGAR EL SCROLL ESTE EN TOP */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="containerOtros">
      <section className="section S1">
        <div className="contCenter">
          <h2 className="h2">Aleister Projects</h2>
          <h2>
            <b>Desarollo de Software</b>
          </h2>
          <p className="pS">
            <b>
              {" "}
              Aleister Projects es una división que se especializa en el
              desarrollo de software , como aplicaciones web , blogs , CMS ,
              sitios webs estaticos ,etc. Usamos tecnologias actuales para poder
              mejorar el rendimiento de la pagina , hacer que un pagina web
              cargue rapido y mejorar la seguridad , hacemos paginas que se
              adapatan a las necesidades de nuestro clientes y atractivas para
              los usuarios ,muchas paginas web son complicadas de navegar por lo
              cual el usuario se aburre y se va de la pagina ,pero aplicando UI
              hacemos que la navegación sea intuitiva y facil para el usuario .
              Unas de las tecnologias que usamos son React, graphql , nodejs,
              mongodb ,etc. Solo imagina tu pagina web ideal y nosotros la
              haremos para ti.
            </b>
          </p>
        </div>
      </section>
      <div className="section S2">
        <div className="contCenter">
          <h2 className="h2">Electricidad Industrial</h2>
          <p className="pS" style={{ textAlign: "center" }}>
            <b>
              Profesionales con mas de 25 años de experiencia.
              <br />
              Mantenimiento, reparación e instalación de maquinaria industrial
              de rubro textil y en general. <br />
              Diseño y cableado de tableros de control industrial y doméstico.
              <br />
              Instalaciones de sistema electrico de bombas de agua industrial y
              domiciliario. <br />
              Detección de fugas a tierra.
            </b>
            <br />
            <b>Ing.Juan Carlos Flores Carrasco</b>
            <br />
            <b>Cel: 961902838</b>
            <br />
            <b>Email: jflores1470@hotmail.com</b>
          </p>
        </div>
      </div>
      <div className="section S3">
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1602270744/1_fvmivg.png"
          alt="img1"
          className="layer"
          data-speed="2"
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1602270831/2_acpctt.png"
          alt="img1"
          className="layer"
          data-speed="2"
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1602270831/3_yudywt.png"
          alt="img1"
          className="layer"
          data-speed="2"
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1602270831/4_aol7gv.png"
          alt="img1"
          className="layer"
          data-speed="6"
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1602270831/5_jsipsv.png"
          alt="img1"
          className="layer"
          data-speed="-1"
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1602270831/6_zmsuae.png"
          alt="img1"
          className="layer"
          data-speed="4"
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1602270831/7_ujuslk.png"
          alt="img1"
          className="layer"
          data-speed="2"
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1602270831/8_bcdwsz.png"
          alt="img1"
          className="layer"
          data-speed="-3"
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1602270831/9_pqvytx.png"
          alt="img1"
          className="layer"
          data-speed="-2"
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1602270837/10_qsaasv.png"
          alt="img1"
          className="layer"
          data-speed="-1"
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1602270837/11_ua6lli.png"
          alt="img1"
          className="layer"
          data-speed="2"
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1602270837/12_cks9qq.png"
          alt="img1"
          className="layer"
          data-speed="2"
        />
        <div className="contCenter">
          <h2 className="h2">Comunicación Corporativa</h2>
          <p className="pS" style={{ textAlign: "center" }}>
            Estrategia y planeamiento de comunicación externa e interna. <br />
            Estrategia de posicionamiento corporativo en medios de comunicación,
            para visualizar los objetivos de la empresa. <br />
            Planeamiento de estrategias con influenciadores digitales. <br />
            Servicio audiovisual y fotografia profesional. <br />
            <br />
            <b> Nuestros profesionales:</b> <br />
            Alexandra Flores Ponce <br />
            Telefono: 920561263
            <br />
            Mario Cotrina Montoya <br />
            Telefono: 957732399
          </p>
        </div>
      </div>
    </div>
  );
}
export default OtrosServicios;

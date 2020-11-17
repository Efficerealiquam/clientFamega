import React, { useEffect } from "react";
import "../styles/sobreNosotros.css";
function SorbreNosotros() {
  /* PARA QUE AL NAVEGAR EL SCROLL ESTE EN TOP */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="open">
      <div className="layer"></div>
      <div className="layer"></div>
      <section className="sectionNosotros">
        <div
          className="bannerText"
          style={{ textAlign: "center", top: "10%", maxWidth: "100%" }}
        >
          <h2>Famega Distribuidores SAC</h2>
        </div>
        <div className="bannerText">
          <h3>
            Calidad y cuidado del medio ambiente a través de nuestros productos{" "}
          </h3>
          <p style={{ marginTop: "10px" }}>
            Somos una empresa enfocada en la distribución de productos para
            instalaciones sanitarias. Distribuidores de válvulas italianas de
            bronce ITAL-VALV, asi como de otras reconocidas marcas en el rubro
            ferretero, las cuales ponemos a su alcance con los mejores precios y
            la rapidez que hoy exige el mercado. <br />
            Tenemos vocación de servicio y para nostros un cliente satisfecho,
            es un logro que nos tomamos muy en serio.
            <br /> Estamos concientes que trabajar con marcas que cumplen con
            todas las normas internacionales, nos ayuda a preservar la salud de
            los consumidores finales, es por ello, que siempre te brindamos
            garantía de los productos que comercializamos. <br />
            Recuerda que nosotros siempre nos preocupamos por tu salud e
            inversión. <br />
            <b> Famega siempre contigo.</b>
          </p>
        </div>
        <img
          className="bulb"
          src="https://res.cloudinary.com/dyav1psn9/image/upload/v1603602150/IMG-20200424-WA0037_1_hpfmfr.jpg"
          alt="Famega SAC"
        />
        <div className="element1"></div>
        <div className="element2"></div>
      </section>
    </div>
  );
}

export default SorbreNosotros;

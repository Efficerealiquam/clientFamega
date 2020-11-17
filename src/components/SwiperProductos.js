import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { Link } from "react-router-dom";
import { FETCH_PRODUCTOS_RELACIONADOS_QUERY } from "../graphql/getQuerys";
import "../styles/detalle-producto.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay, Pagination]);

function SwiperProductos({ subId, redirec, user, setIdProducto }) {
  /* TRAE LOS PRODUCTOS FILTRADO POR SUBCATEGORIA */
  const getPro = useQuery(FETCH_PRODUCTOS_RELACIONADOS_QUERY, {
    variables: { subId },
    onError(err) {
      console.log(err);
    },
  });

  let productosID = "";
  if (getPro.data) {
    productosID = { data: getPro.data.getProductos };
  }

  return (
    <>
      <section className="bodyProRe">
        <h1
          style={{
            color: "#333",
            textTransform: "uppercase",
            textAlign: "center",
            fontFamily: '"Cinzel", serif',
            fontWeight: 700,
            fontSize: "5em",
          }}
        >
          Productos Relacionados{" "}
        </h1>
        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={(true, { delay: 2500, disableOnInteraction: false })}
          loop={true}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
        >
          {productosID.data &&
            productosID.data.map((pro) => (
              <SwiperSlide key={pro.id}>
                {/* equivalenter al card */}
                <div className="face face1">
                  <div className="contentCard">
                    <img src={pro.imagen} alt={pro.nombre} />
                    <h3 style={{ margin: "10px 0 20px" }}>{pro.nombre}</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="contentCard">
                    <p>{pro.descripcion}</p>
                    <div style={{ display: "flex" }}>
                      <form>
                        <Link
                          className="btn2"
                          to={`/detalle-producto/${pro.id}`}
                        >
                          <span className="sp1" />
                          <span className="sp2" />
                          <span className="sp3" />
                          <span className="sp4" />
                          DETALLES
                        </Link>
                      </form>
                      <div style={{ marginLeft: "10px" }}>
                        <button
                          className="btn2"
                          onClick={() => {
                            user ? setIdProducto(pro.id) : redirec();
                          }}
                        >
                          <span className="sp1" />
                          <span className="sp2" />
                          <span className="sp3" />
                          <span className="sp4" />
                          AÑADIR
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  );
}
export default SwiperProductos;

import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TumblrShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  LineShareButton,
  TelegramShareButton,
} from "react-share";
function Footer() {
  return (
    <footer>
      <div className="footer-top" style={{ margin: "0 40px" }}>
        <div className="row ">
          <div className="col-md-4 col-sm-8 col-xs-12 segment-one centradoTodo">
            <div>
              <h3>Famega Distribuidores S.A.C</h3>
              <p>Siempre Contigo</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-8 col-xs-12 segment-two">
            <div className="mx-auto" style={{ width: "fit-content" }}>
              <h2 className="centrar">Contactanos: </h2>
              <div className="listaContactanos ">
                <p style={{ fontSize: "1.2em" }}>Correos: </p>
                <ul
                  style={{
                    color: "#999",
                    fontFamily: '"Josefin Sans", sans-serif',
                  }}
                >
                  <li>
                    <Link to="#" />
                    famega.distribuidores@hotmail.com
                  </li>
                  <li>
                    <Link to="#" />
                    ventas.famegadist@gmail.com
                  </li>
                </ul>
              </div>
              <div className="listaContactanos" style={{ marginTop: "0px" }}>
                <p style={{ fontSize: "1.2em" }}>Telefonos Vendedores: </p>
                <ul
                  style={{
                    color: "#999",
                    fontFamily: '"Josefin Sans", sans-serif',
                  }}
                >
                  <li>
                    <Link to="#" />
                    Guillermo Flores : 978211733
                  </li>
                  <li>
                    <Link to="#" />
                    Hilda Gonzales : 917232768
                  </li>
                  <li>
                    <Link to="#" />
                    Carla Miquilena : 926289260
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-8 col-xs-12 segment-three"
            style={{ top: 0 }}
          >
            <h2>Direccion: </h2>
            <p>Virginia Candamo 252 Urb.Pando 4 Etapa - San Miguel</p>
            <p>
              Oficinas y almacenes : Cooperativa de Vivienda Viña San Francisco
              LTDA Mz G Lote 17 Santa Anita Lima
            </p>
            <h2>Redes Sociales :</h2>
            <ul className="socialUl">
              <li>
                <Link to="https://www.facebook.com/Famega-Distribuidores-SAC-102860464702050">
                  <span />
                </Link>
              </li>
              <li>
                <Link to="https://api.whatsapp.com/send?phone=51978211733&text=Quiero%20una%20cotizacion&fbclid=IwAR1Vog7cIXF7TJ4miGanqjOAk6n-0mRqutFKrwv70YQpSKedCJduCvHh-1s">
                  <span />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/famegadistribuidores/">
                  <span />
                </Link>
              </li>
            </ul>
            <div className="share">
              <div className="toggle" />
              <ul className="ulShare">
                <li>
                  <FacebookShareButton
                    className="social"
                    url={
                      "https://www.facebook.com/Famega-Distribuidores-SAC-102860464702050"
                    }
                    quote="Famega siempre pensando en ti!"
                    hashtag="#Famega"
                  >
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </FacebookShareButton>
                </li>
                <li>
                  <TwitterShareButton
                    className="social"
                    url={
                      "https://www.facebook.com/Famega-Distribuidores-SAC-102860464702050"
                    }
                  >
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </TwitterShareButton>
                </li>
                <li>
                  <PinterestShareButton
                    className="social"
                    url="https://www.facebook.com/Famega-Distribuidores-SAC-102860464702050"
                    media="https://scontent.flim2-1.fna.fbcdn.net/v/t1.0-9/110313253_157887952532634_1935180613107615561_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_eui2=AeE_jF_ewhxSPP2irAhT3A8GOkL9iNg1IYM6Qv2I2DUhg4vORHDLp1VO4n7auSHEpaM&_nc_ohc=HuaDUWJz3AIAX-JhdFU&_nc_ht=scontent.flim2-1.fna&oh=e6aa1f239281f0a3e7fae669fd3f6878&oe=5FA304C1"
                  >
                    <i className="fab fa-pinterest" aria-hidden="true"></i>
                  </PinterestShareButton>
                </li>
                <li>
                  <LinkedinShareButton
                    className="social"
                    url={
                      "https://www.facebook.com/Famega-Distribuidores-SAC-102860464702050"
                    }
                  >
                    <i className="fab fa-linkedin" aria-hidden="true" />
                  </LinkedinShareButton>
                </li>
                <li>
                  <LineShareButton
                    className="social"
                    url={
                      "https://www.facebook.com/Famega-Distribuidores-SAC-102860464702050"
                    }
                  >
                    <i className="fab fa-line" aria-hidden="true" />
                  </LineShareButton>
                </li>
                <li>
                  <TelegramShareButton
                    className="social"
                    url={
                      "https://www.facebook.com/Famega-Distribuidores-SAC-102860464702050"
                    }
                  >
                    <i className="fab fa-telegram-plane" aria-hidden="true" />
                  </TelegramShareButton>
                </li>
                <li>
                  <TumblrShareButton
                    className="social"
                    url={
                      "https://www.facebook.com/Famega-Distribuidores-SAC-102860464702050"
                    }
                  >
                    <i className="fab fa-tumblr" aria-hidden="true" />
                  </TumblrShareButton>
                </li>
                <li>
                  <WhatsappShareButton
                    className="social"
                    url={
                      "https://www.facebook.com/Famega-Distribuidores-SAC-102860464702050"
                    }
                  >
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                  </WhatsappShareButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p
        style={{ textShadow: "0 0 5px white", color: "white" }}
        className="footer-bottom-text"
      >
        All Right reserved by ©Aleister Projects 2020
      </p>
    </footer>
  );
}
export default Footer;

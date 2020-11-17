import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/auth";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Marcas from "./pages/Marcas";
import SobreNosotros from "./pages/SobreNosotros";
import IniciarSesion from "./pages/IniciarSesion";
import ListaCarrito from "./pages/ListaCarrito";
import AuthRoute from "./util/AuthRoute";
import VerifyUserRoute from "./util/verifyUserRoute";
import Footer from "./components/Footer";
import DetalleProducto from "./pages/DetalleProducto";
import OlvidemiPass from "./pages/OlvidemiPass";
import EditarPerfil from "./pages/EditarPerfil";
import CambiarContraseña from "./pages/CambiarContraseña";
import VerifyAdmiRoute from "./util/verifyAdmiRoute";
import LoginAdmin from "./pages/Admin/LoginAdmin";
import AllProductos from "./pages/Admin/Producto/AllProductos";
import AllMarcas from "./pages/Admin/Marcas/AllMarcas";
import EditMarca from "./pages/Admin/Marcas/EditMarca";
import AllCategorias from "./pages/Admin/Categorias/AllCategorias";
import EditCategoria from "./pages/Admin/Categorias/EditCategoria";
import AllSubcategorias from "./pages/Admin/Subcategoria/AllSubcategorias";
import EditSubcategoria from "./pages/Admin/Subcategoria/EditSubcategoria";
import EditProducto from "./pages/Admin/Producto/EditProducto";
import AllMedidas from "./pages/Admin/Producto/AllMedidas";
import ButtonWhatssap from "./components/ButtonWhatssap";
import OtrosServicios from "./pages/OtrosServicios";
import Not404 from "./pages/Not404";

function App() {
  return (
    <AuthProvider>
      <Router>
        <MenuBar />
        <ButtonWhatssap />
        <div id="backgroundR"></div>
        <div className="contBody">
          <Switch>
            <Route exact path="/" render={() => <Redirect to={"/newP/1"} />} />
            <Route exact path="/marcas" component={Marcas} />
            <Route exact path="/sobrenosotros" component={SobreNosotros} />
            <Route exact path="/servicios" component={OtrosServicios} />
            <Route
              exact
              path="/detalle-producto/:proId"
              component={DetalleProducto}
            />
            <AuthRoute exact path="/iniciarsesion" component={IniciarSesion} />
            <VerifyUserRoute
              exact
              path="/listacarrito"
              component={ListaCarrito}
            />
            <VerifyUserRoute
              exact
              path="/editarperfil"
              component={EditarPerfil}
            />
            <VerifyUserRoute
              exact
              path="/cambiar-contraseña"
              component={CambiarContraseña}
            />
            <Route exact path="/newP/:page" component={Home} />
            <Route exact path="/olvide-pass" component={OlvidemiPass} />
            {/* -----------Rutas Administrador -------------*/}
            <Route exact path="/iniciarSesionAdmi" component={LoginAdmin} />
            {/* Marcas */}
            <VerifyAdmiRoute exact path="/all-marcas" component={AllMarcas} />
            <VerifyAdmiRoute
              exact
              path="/edit-marca/:marcaId"
              component={EditMarca}
            />
            {/* Categorias*/}
            <VerifyAdmiRoute
              exact
              path="/all-categorias/:marcaName"
              component={AllCategorias}
            />
            <VerifyAdmiRoute
              exact
              path="/edit-categoria/:catId"
              component={EditCategoria}
            />
            {/* Subcategorias */}
            <VerifyAdmiRoute
              exact
              path="/all-subcategorias/:catId/:nomMarca"
              component={AllSubcategorias}
            />
            <VerifyAdmiRoute
              exact
              path="/edit-subcategoria/:catId/:subId/:nomSub"
              component={EditSubcategoria}
            />
            {/* Productos */}
            <VerifyAdmiRoute
              exact
              path="/all-productos/:catId/:subId/:nomMarca"
              component={AllProductos}
            />
            <VerifyAdmiRoute
              exact
              path="/edit-productos/:proId"
              component={EditProducto}
            />
            <VerifyAdmiRoute
              exact
              path="/all-medidas/:proId"
              component={AllMedidas}
            />
            {/*  <Route exact path="/404" component={Not404} />
          <Redirect to="/404" /> */}
            <Route component={Not404} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;

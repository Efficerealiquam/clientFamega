import React from "react";
import MarcasAdmin from "../../../components/Admin/MarcasAdmin";
import NewMarca from "../../../components/Admin/NewMarca";
import "../../../styles/adminProduct.css";
function AllMarcas(props) {
  return (
    <>
      <NewMarca props={props} />
      <MarcasAdmin props={props} />
    </>
  );
}
export default AllMarcas;

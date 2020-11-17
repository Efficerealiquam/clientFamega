import gql from "graphql-tag";

export const FETCH_MARCAS_QUERY = gql`
  {
    getMarcas {
      id
      nombre
      made
      descripcion
      imagen
      createdAt
    }
  }
`;

export const FETCH_GETLISTA_QUERY = gql`
  {
    getListaActual {
      id
      user
      estado
      productos {
        id
        nombrePro
        cantidad
        medida
      }
      productosCount
    }
  }
`;
export const FETCH_COUNTPRODCUTS_QUERY = gql`
  {
    getListaActual {
      productosCount
    }
  }
`;

export const FETCH_COUNTPRODUC_QUERY = gql`
  {
    getCountProductos
  }
`;

export const FETCH_COUNTPRODUC_ID_QUERY = gql`
  query($subId: String!) {
    getCountProductosID(subId: $subId)
  }
`;
export const FETCH_CATEGORIAS_QUERY = gql`
  query($marca: String!) {
    getCategorias(marca: $marca) {
      id
      nombre
      marca
      subcategorias {
        id
        nombre
      }
    }
  }
`;
export const FETCH_PRODUCTOS_GENERIC_QUERY = gql`
  query($limit: Int, $skip: Int) {
    getProductosGeneric(limit: $limit, skip: $skip) {
      id
      nombre
      descripcion
      cantidad_cajon
      cantidad_caja
      imagen
      medidas {
        id
        body
      }
      subcategoria
      createdAt
    }
  }
`;

export const FETCH_PRODUCTOS_ID_QUERY = gql`
  query($limit: Int, $skip: Int, $subId: String!) {
    getProductos(limit: $limit, skip: $skip, subId: $subId) {
      id
      nombre
      descripcion
      cantidad_cajon
      cantidad_caja
      imagen
      medidas {
        id
        body
      }
      subcategoria
      createdAt
    }
  }
`;

export const FETCH_ALL_MARCAS_QUERY = gql`
  {
    getMarcas {
      id
      nombre
      made
      descripcion
      imagen
      createdAt
    }
  }
`;

export const FETCH_PRODUCTO_DET_QUERY = gql`
  query($proId: ID!) {
    getProducto(proId: $proId) {
      id
      nombre
      descripcion
      cantidad_cajon
      cantidad_caja
      imagen
      medidas {
        id
        body
      }
      subcategoria
    }
  }
`;

export const FETCH_PRODUCTOS_RELACIONADOS_QUERY = gql`
  query($subId: String!) {
    getProductos(subId: $subId) {
      id
      nombre
      descripcion
      cantidad_cajon
      cantidad_caja
      imagen
      medidas {
        id
        body
      }
      subcategoria
    }
  }
`;

export const FECHT_DATOS_USER = gql`
  {
    getDatosUser {
      id
      ruc
      razonsocial
      telefono
      telefono2
      direccion
      correo
    }
  }
`;

export const GET_MARCAS_ADMIN = gql`
  {
    getMarcas {
      id
      nombre
      made
      descripcion
      imagen
      createdAt
    }
  }
`;

export const GET_MARCA_ID_ADMIN = gql`
  query($marcaId: ID!) {
    getMarca(marcaId: $marcaId) {
      id
      nombre
      made
      descripcion
      imagen
      createdAt
    }
  }
`;

export const GET_CATEGORIA_ID = gql`
  query($catId: ID!) {
    getCategoriaID(catId: $catId) {
      id
      nombre
      marca
      subcategorias {
        id
        nombre
      }
    }
  }
`;

export const GET_PRODUCTOS_ID = gql`
  query($limit: Int, $skip: Int, $subId: String!) {
    getProductos(limit: $limit, skip: $skip, subId: $subId) {
      id
      nombre
      descripcion
      cantidad_cajon
      cantidad_caja
      imagen
      medidas {
        id
        body
      }
      subcategoria
      createdAt
    }
  }
`;

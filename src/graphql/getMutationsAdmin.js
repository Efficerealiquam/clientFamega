import gql from "graphql-tag";

/* Mutaciones Marca */
export const NEW_MARCA = gql`
  mutation createMarca(
    $nombre: String!
    $made: String!
    $descripcion: String!
    $imagen: String!
  ) {
    createMarca(
      marcaInput: {
        nombre: $nombre
        made: $made
        descripcion: $descripcion
        imagen: $imagen
      }
    ) {
      id
      nombre
      made
      descripcion
      imagen
      createdAt
    }
  }
`;
export const DELETE_MARCA = gql`
  mutation deleteMarca($marcaId: ID!) {
    deleteMarca(marcaId: $marcaId)
  }
`;

export const UPDATE_MARCA = gql`
  mutation updateMarca(
    $id: ID!
    $nombre: String!
    $made: String!
    $descripcion: String!
    $imagen: String!
  ) {
    updateMarca(
      marcaInput: {
        id: $id
        nombre: $nombre
        made: $made
        descripcion: $descripcion
        imagen: $imagen
      }
    )
  }
`;

/* Mutaciones Categoria */
export const NEW_CATEGORIA = gql`
  mutation createCategoria($nombre: String!, $marca: String!) {
    createCategoria(categoriaInput: { nombre: $nombre, marca: $marca }) {
      nombre
      marca
      subcategorias {
        id
        nombre
      }
    }
  }
`;
export const DELETE_CATEGORIA = gql`
  mutation deleteCategoria($catId: ID!) {
    deleteCategoria(catId: $catId)
  }
`;

export const UPDATE_CATEGORIA = gql`
  mutation updateCategoria($catId: ID!, $nombre: String!) {
    updateCategoria(catId: $catId, nombre: $nombre)
  }
`;

/* Mutaciones Subcategoria */
export const NEW_SUBCATEGORIA = gql`
  mutation createSubCategoria($catId: ID!, $nombre: String!) {
    createSubCategoria(catId: $catId, nombre: $nombre) {
      nombre
    }
  }
`;
export const DELETE_SUB_CATEGORIA = gql`
  mutation deleteSubCategoria($catId: ID!, $subId: ID!) {
    deleteSubCategoria(catId: $catId, subId: $subId)
  }
`;
export const UPDATE_SUB_CATEGORIA = gql`
  mutation updateSubCategoria($catId: ID!, $subId: ID!, $nombre: String!) {
    updateSubCategoria(catId: $catId, subId: $subId, nombre: $nombre) {
      subcategorias {
        id
        nombre
      }
    }
  }
`;

export const ADD_NEW_PRODUCTO = gql`
  mutation createProducto(
    $nombre: String!
    $descripcion: String!
    $cantidad_cajon: String!
    $cantidad_caja: String!
    $imagen: String!
    $subcategoria: String!
  ) {
    createProducto(
      productoInput: {
        nombre: $nombre
        descripcion: $descripcion
        cantidad_cajon: $cantidad_cajon
        cantidad_caja: $cantidad_caja
        imagen: $imagen
        subcategoria: $subcategoria
      }
    ) {
      id
      nombre
      descripcion
      cantidad_cajon
      cantidad_caja
      imagen
      subcategoria
      createdAt
    }
  }
`;

export const DELETE_PRODUCTO = gql`
  mutation deleteProducto($proId: ID!) {
    deleteProducto(proId: $proId)
  }
`;

export const UPDATE_PRODUCTO = gql`
  mutation updateProducto(
    $id: ID!
    $nombre: String!
    $descripcion: String!
    $cantidad_cajon: String!
    $cantidad_caja: String!
    $imagen: String!
  ) {
    updateProducto(
      productoInput: {
        id: $id
        nombre: $nombre
        descripcion: $descripcion
        cantidad_cajon: $cantidad_cajon
        cantidad_caja: $cantidad_caja
        imagen: $imagen
      }
    ) {
      id
      nombre
      descripcion
      cantidad_cajon
      cantidad_caja
      imagen
    }
  }
`;

export const DELETE_MEDIDA = gql`
  mutation deleteMedida($proId: ID!, $medId: ID!) {
    deleteMedida(proId: $proId, medId: $medId)
  }
`;

export const ADD_MEDIDA = gql`
  mutation createMedida($proId: ID!, $medida: String!) {
    createMedida(proId: $proId, medida: $medida)
  }
`;

import gql from "graphql-tag";

export const REGISTER_USER = gql`
  mutation register(
    $ruc: String!
    $razonsocial: String!
    $telefono: String!
    $telefono2: String!
    $password: String!
    $confirmPassword: String!
    $direccion: String!
    $correo: String!
  ) {
    register(
      registerInput: {
        ruc: $ruc
        razonsocial: $razonsocial
        telefono: $telefono
        telefono2: $telefono2
        password: $password
        confirmPassword: $confirmPassword
        direccion: $direccion
        correo: $correo
      }
    ) {
      id
      ruc
      razonsocial
      telefono
      telefono2
      token
      password
      direccion
      correo
      createdAt
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($ruc: String!, $password: String!) {
    login(ruc: $ruc, password: $password) {
      id
      ruc
      razonsocial
      telefono
      telefono2
      token
      password
      correo
      createdAt
    }
  }
`;

export const ADD_PRODUCT_LISTA = gql`
  mutation createListaAddPro(
    $proId: ID!
    $cantidad: String!
    $medida: String!
  ) {
    createListaAddPro(proId: $proId, cantidad: $cantidad, medida: $medida) {
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

export const UPDATE_PRODUCT_LISTA = gql`
  mutation updateListaUpPro($proId: ID!, $cantidad: String!, $medida: String!) {
    updateListaUpPro(proId: $proId, cantidad: $cantidad, medida: $medida) {
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

export const DELETE_PRODUCT_LISTA = gql`
  mutation deleteListaDelPro($proId: ID!) {
    deleteListaDelPro(proId: $proId)
  }
`;

export const SENDLISTEMAIL_QUERY = gql`
  mutation sendEmailLista {
    sendListaEmail
  }
`;

export const FORGOT_PASSWORD = gql`
  mutation forgotPassword($correo: String!) {
    forgotPassword(correo: $correo)
  }
`;
export const EDITAR_PERFIL = gql`
  mutation editarPerfil(
    $telefono: String!
    $telefono2: String!
    $direccion: String!
    $correo: String!
  ) {
    editarPerfil(
      editarPerfilInput: {
        telefono: $telefono
        telefono2: $telefono2
        direccion: $direccion
        correo: $correo
      }
    )
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword($id: ID!, $password: String!, $newPassword: String!) {
    changePassword(id: $id, password: $password, newPassword: $newPassword)
  }
`;

export const LOGIN_ADMIN = gql`
  mutation loginAdmin($ruc: String!, $password: String!) {
    loginAdmin(ruc: $ruc, password: $password) {
      id
      ruc
      token
    }
  }
`;

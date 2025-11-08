export const estadoInicial = {
  listaDeCancion: [],
  listaPlaylist: [],
  errores: {},

};

export const appReducer = (estado, accion) => {
  switch (accion.type) {
    case "LISTA_CANCIONES":
      return { ...estado, listaDeCancion: accion.payload, errores: {} };

    case "ERRORES":
      return { ...estado, errores: accion.payload };

    case "AGREGAR_CANCION":
      return {
        ...estado,
        listaDeCancion: [...estado.listaDeCancion, accion.payload],
      };
      case "AGREGAR_PLAYLIST":
      return {
        ...estado,
        listaPlaylist: [accion.payload, ...estado.listaPlaylist]
      };
    case "ACTUALIZAR":
      return {
        ...estado,
        [accion.campo]: accion.valor,
        error: { ...estado.error, [accion.campo]: "" },
      };
    case "LISTA_PLAYLIST":
      return { ...estado, listaPlaylist: accion.payload, errores: {} };
    case "ELIMINAR_CANCION":
      return {
        ...estado,
        listaDeCancion: estado.listaDeCancion.filter(song => song._id !== accion.payload),
      };
    case "EDITAR_CANCION":
      return {
        ...estado,
        listaDeCancion: estado.listaDeCancion.map((cancion) => 
          cancion._id == accion.payload._id ? accion.payload : cancion
        ),
      };
    case "ELIMINAR_PLAYLIST":
      return {
        ...estado,
        listaPlaylist: estado.listaPlaylist.filter(playlist => playlist._id !== accion.payload),
      };
    case "EDITAR_PLAYLIST":
      return {
        ...estado,
        listaPlaylist: estado.listaPlaylist.map((playlist) =>
          playlist._id === accion.payload._id
            ? {
                ...accion.payload,
                Musica: accion.payload.Musica.map(c => c._id) 
              }
            : playlist
        ),
      };

    default:
      return estado;
  }
};

export default appReducer;

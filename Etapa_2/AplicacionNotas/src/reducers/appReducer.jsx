export const estadoInicial = {
  listaNota: [],
  id: 1,
  nota: "",
  importancia: "",
  error: { nota: "", importancia: "" },
  filtroActual: "todas",
  filtroNota: [],
};

export const appReducer = (estado, accion) => {
  switch (accion.tipo) {
    case "ACTUALIZAR":
      return {
        ...estado,
        [accion.campo]: accion.valor,
        error: { ...estado.error, [accion.campo]: "" },
      };
    case "VALIDAR":
      let errores = { nota: "", importancia: "" };

      if (estado.nota.length < 1) {
        errores.nota = "La nota no puede estar vacia";
      }
      if (estado.importancia == "") {
        errores.importancia = "Debe seleccionar una importancia";
      }
      return { ...estado, error: errores };

    case "AGREGAR_NOTA":
      return {
        ...estado,
        listaNota: [...estado.listaNota, accion.datos],
      };
    case "VACIAR_FORM":
      return {
        ...estado,
        id: estado.id + 1,
        nota: "",
        importancia: "",
      };
    case "FILTRAR":
      return {
        ...estado,
        filtroActual: accion.filtro,
        filtroNota:
          accion.filtro === "todas"
            ? [...estado.listaNota]
            : estado.listaNota.filter((e) => e.importancia === accion.filtro),
      };
    case "ELIMINAR_NOTA":
      return {
        ...estado,
        listaNota: estado.listaNota.filter((nota) => nota.id !== accion.id),
      };

    default:
      return estado;
  }
};

export default appReducer;

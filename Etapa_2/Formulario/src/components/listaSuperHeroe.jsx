const ListaSuperheroe = ({ listaSuperheroe }) => {
  console.log(listaSuperheroe);

  return (
    <div className="w-100 text-white">
      {listaSuperheroe.length === 0 ? (
        <h2 className="text-start ps-5 text-primary">Todavía no hay superhéroes registrados</h2>
      ) : (
        <div className="row justify-content-center gap-2">
        <h2 className="text-start ps-5 text-primary mb-5 ">Superhéroes registrados:</h2>
          {listaSuperheroe.map((heroe, index) => (
            <div className="col-sm-3 " key={index}>
              <div className="card h-100 shadow-lg">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-nowrap overflow-hidden text-truncate">
                    {heroe.nombre} {heroe.apellido}
                  </h5>
                  <p
                    className="card-text text-truncate d-block w-100 text-nowrap overflow-hidden text-truncate"
                    title={heroe.correo}
                  >
                    <span className="fw-bold">Correo:</span> {heroe.correo}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ListaSuperheroe;

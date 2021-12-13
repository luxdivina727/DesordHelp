import React, { Fragment, Component } from "react";
import { consulta } from "../API/funciones";


class ModificarUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <Fragment>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0"></h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Modificar Usuario</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <div className="card-title">
                        <h3 className="card-header">Datos Basicos</h3>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex mb-2">
                      <div className="col-2">Nombre De Usuario:</div>
                      <div className="col-4">
                        <input
                          type="text"
                          placeholder="CADELAHOZ"
                          className="form-control"
                          disabled="true"
                        />
                      </div>
                      <div className="col-2">Fecha De Nacimiento:</div>
                      <div className="col-4">
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                    <div className="d-flex mb-2">
                      <div className="col-2">Primer Nombre:</div>
                      <div className="col-4">
                        <input
                          type="text"
                          placeholder="Cassandra"
                          className="form-control"
                        />
                      </div>
                      <div className="col-2">Segundo Nombre:</div>
                      <div className="col-4">
                        <input
                          type="text"
                          placeholder="Maria"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="d-flex mb-2">
                      <div className="col-2">Primer Apellido:</div>
                      <div className="col-4">
                        <input
                          type="text"
                          placeholder="De La Hoz"
                          className="form-control"
                        />
                      </div>
                      <div className="col-2">Segundo Apellido:</div>
                      <div className="col-4">
                        <input
                          type="text"
                          placeholder="Pinzón"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="d-flex mb-2">
                      <div className="col-2">Tipo De Identificación:</div>
                      <div className="col-4">
                        <select className="form-control">
                          <option value="CC">Cedula de Ciudadania</option>
                          <option value="TI">Tarjeta De Identidad</option>
                          <option value="CE">Cedula De Extrangería </option>
                        </select>
                      </div>
                      <div className="col-2">Identificación:</div>
                      <div className="col-4">
                        <input
                          type="text"
                          placeholder="1507549254"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="d-flex mb-2">
                      <div className="col-2">Correo Electronico</div>
                      <div className="col-4">
                        <input
                          type="text"
                          placeholder="cassandra@hotmail.com"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col text-center mt-4">
                      <button type="button" className="btn btn-dark">
                        {" "}
                        Guardar{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ModificarUsuario;

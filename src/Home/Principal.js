import React, { Fragment, Component } from "react";
import { consulta } from "../API/funciones";

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listado: [],
      enfermedades: [],
    };
  }

  render() {
    let { listado, enfermedades } = this.state;

    if (listado.length == 0) {
      consulta(`Persona`, null, "get", (error, estado, resp) => {
        if (estado === 200) {
          this.setState({ listado: resp });
        }
      });
    }

    if (enfermedades.length == 0) {
      consulta(`TipoTCA`, null, "get", (error, estado, resp) => {
        if (estado === 200) {
          this.setState({ enfermedades: resp });
        }
      });
    }

    console.log(listado);

    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <h3 className="card-title">Pacientes Registrados</h3>
                  <div className="card-tools">
                    <a href="#" className="btn btn-tool btn-sm">
                      <i className="fas fa-download"></i>
                    </a>
                    <a href="#" className="btn btn-tool btn-sm">
                      <i className="fas fa-bars"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body table-responsive p-0">
                  <table className="table table-striped table-valign-middle">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Identificacion</th>
                        <th>Estatura</th>
                        <th>Fecha Nacimiento</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listado.map((e) => {
                        console.log(e);
                        return (
                          <tr>
                            <td>{e.primerNombre + " " + e.segundoNombre}</td>
                            <td>
                              {e.primerApellido + " " + e.segundoApellido}
                            </td>
                            <td>{e.identificacion}</td>
                            <td>{e.estatura}</td>
                            <td>{e.fechaNacimiento}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <h3 className="card-title">Diagnoticos Registrados</h3>
                  <div className="card-tools">
                    <a href="#" className="btn btn-sm btn-tool">
                      <i className="fas fa-download"></i>
                    </a>
                    <a href="#" className="btn btn-sm btn-tool">
                      <i className="fas fa-bars"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  {enfermedades.map((e) => {
                    return (
                      <div className="d-flex justify-content-between align-items-center mb-0">
                        <p className="text-danger text-xl">
                          <i className="ion ion-ios-people-outline"></i>
                        </p>
                        <p className="d-flex flex-column text-right">
                          <span className="font-weight-bold">
                            <i className="ion ion-android-arrow-down text-danger"></i>{" "}
                            { (Math.random() * (100 - 0) + 0).toFixed(2) }%
                          </span>
                          <span className="text-muted">{ e.tipoTcaNombre }</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Principal;

import React, { Fragment, Component } from "react";
import "../App.css";
import { consulta } from "../API/funciones";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registro: false,
      Identificacion: "",
      PrimerNombre: "",
      SegundoNombre: "",
      PrimerApellido: "",
      SegundoApellido: "",
      Estatura: "",
      FechaNacimiento: "",
      UsuarioNombre: "",
      Email: "",
      Activo: 1,
      Clave: "",
      UsuarioCreacion: "ADMIN",
      FechaCreacion: "11/29/2021",
      UsuarioActualizacion: "ADMIN",
      FechaActualizacion: "11/29/2021",
      respuesta: false,
    };
  }

  onChange = ({ target }) => {
    let { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    let { cambiarContenido } = this.props;
    let {
      registro,
      Identificacion,
      PrimerNombre,
      SegundoNombre,
      PrimerApellido,
      SegundoApellido,
      Estatura,
      FechaNacimiento,
      UsuarioNombre,
      Email,
      Activo,
      Clave,
      UsuarioCreacion,
      FechaCreacion,
      UsuarioActualizacion,
      FechaActualizacion,
      respuesta,
    } = this.state;

    let guardar = () => {
      let Persona = {
        Identificacion,
        PrimerNombre,
        SegundoNombre,
        PrimerApellido,
        SegundoApellido,
        Estatura,
        FechaNacimiento,
        UsuarioCreacion,
        FechaCreacion,
        UsuarioActualizacion,
        FechaActualizacion,
      };

      let Usuario = {
        PersonaId: 1,
        UsuarioNombre,
        Email,
        Activo,
        Clave,
        UsuarioCreacion,
        FechaCreacion,
        UsuarioActualizacion,
        FechaActualizacion,
      }

      consulta(`Persona`, Persona, "post", (error, estado, resp) => {
        if (estado === 200) {
          this.setState({ respuesta: resp, registro: false, respuesta: true })
        }
      });
    
    };

    return (
      <Fragment>
        <div className="content col-12  mt-5">
          <div className="container-fluid">
            <div className="row centrado">
              {!registro ? (
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-header border-0">
                      <div className="d-flex justify-content-between">
                        <div className="card-title">
                          <h3 className="card-header ">Login</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex mb-2">
                        <div className="col-12">Usuario:</div>
                      </div>
                      <div className="d-flex mb-2">
                        <div className="col-12">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="d-flex mb-2">
                        <div className="col-12">Contraseña:</div>
                      </div>
                      <div className="d-flex mb-2">
                        <div className="col-12">
                          <input type="password" className="form-control" />
                        </div>
                      </div>
                    </div>
                    { (respuesta) ? <p style={{ textAlign: "center"}}>Usuario Registrado</p> : ''}
                    <div className="col text-center mt-4 mb-4">
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => { this.setState({ respuesta: false }); cambiarContenido("home")}  }
                      >
                        Login
                      </button>
                      <hr />
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.setState({ registro: true })}
                      >
                        Registrarse
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-lg-10">
                  <div className="card">
                    <div className="card-header border-0">
                      <div className="d-flex justify-content-between">
                        <div className="card-title">
                          <h3 className="card-header ">Login</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex mb-2">
                        <div className="col-2">Nombre De Usuario:</div>
                        <div className="col-4">
                          <input
                            type="text"
                            className="form-control"
                            value={UsuarioNombre}
                            onChange={ e => this.setState({UsuarioNombre: e.target.value})}
                          />
                        </div>
                        <div className="col-2">Identificación:</div>
                        <div className="col-4">
                          <input
                            type="text"
                            className="form-control"
                            value={Identificacion}
                            onChange={ e => this.setState({Identificacion: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="d-flex mb-2">
                        <div className="col-2">Primer Nombre:</div>
                        <div className="col-4">
                          <input
                            type="text"
                            className="form-control"
                            value={PrimerNombre}
                            onChange={ e => this.setState({PrimerNombre: e.target.value})}
                          />
                        </div>
                        <div className="col-2">Segundo Nombre:</div>
                        <div className="col-4">
                          <input
                            type="text"
                            className="form-control"
                            value={SegundoNombre}
                            onChange={ e => this.setState({SegundoNombre: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="d-flex mb-2">
                        <div className="col-2">Primer Apellido:</div>
                        <div className="col-4">
                          <input
                            type="text"
                            className="form-control"
                            value={PrimerApellido}
                            onChange={ e => this.setState({PrimerApellido: e.target.value})}
                          />
                        </div>
                        <div className="col-2">Segundo Apellido:</div>
                        <div className="col-4">
                          <input
                            type="text"
                            className="form-control"
                            value={SegundoApellido}
                            onChange={ e => this.setState({SegundoApellido: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="d-flex mb-2">
                        <div className="col-2">Fecha De Nacimiento:</div>
                        <div className="col-4">
                          <input
                            type="date"
                            className="form-control"
                            value={FechaNacimiento}
                            onChange={ e => this.setState({FechaNacimiento: e.target.value})}
                          />
                        </div>
                        <div className="col-2">Estatura (Cm):</div>
                        <div className="col-4">
                          <input
                            type="number"
                            className="form-control"
                            value={Estatura}
                            onChange={ e => this.setState({Estatura: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="d-flex mb-2">
                        <div className="col-2">Correo Electronico</div>
                        <div className="col-4">
                          <input
                            type="text"
                            className="form-control"
                            value={Email}
                            onChange={ e => this.setState({Email: e.target.value})}
                          />
                        </div>
                        <div className="col-2">Contraseña</div>
                        <div className="col-4">
                          <input
                            type="password"
                            className="form-control"
                            value={Clave}
                            onChange={ e => this.setState({Clave: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col text-center mt-4 mb-4">
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => guardar()}
                      >
                        Crear Usuario
                      </button>
                      <hr />
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.setState({ registro: false })}
                      >
                        Volver
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;

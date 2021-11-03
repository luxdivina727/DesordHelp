import React, { Fragment, Component } from "react";
import '../App.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { cambiarContenido } = this.props;
    return (
      <Fragment>
        
          <div className="content col-12  mt-5">
            <div className="container-fluid">
              <div className="row centrado" >
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
                          <input
                            type="text"
                            placeholder="CADELAHOZ"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="d-flex mb-2">
                        <div className="col-12">Contraseña:</div>
                      </div>
                      <div className="d-flex mb-2">
                        <div className="col-12">
                          <input
                            type="password"
                            placeholder="Contraseña"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col text-center mt-4 mb-4">
                      <button type="button" className="btn btn-dark" onClick={ () => cambiarContenido('home')}>
                        Login
                      </button>
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

export default Login;

import React, { Fragment, Component } from "react";

class Diagnostico extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
          <div class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6"></div>

                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item active">Diagnostico</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg">
                  <div class="card">
                    <div class="card-header border-0">
                      <div class="d-flex justify-content-between">
                        <div class="card-title">
                          <h3 class="card-header">Diagnostico</h3>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="d-flex mb-2">
                        <div class="col-6">
                          <input
                            class="form-control"
                            placeholder="¿Cuantas veces has comido al dia?"
                            type="text"
                          />
                        </div>
                        <div class="col-6">
                          <input
                            class="form-control"
                            placeholder="Peso actual"
                            type="number"
                          />
                        </div>
                      </div>
                      <div class="d-flex mb-2">
                        <div class="col-6">
                          <input
                            class="form-control"
                            placeholder="¿Con que frecuencia haces ejercicio?"
                            type="text"
                          />
                        </div>
                        <div class="col-6">
                          <input
                            class="form-control"
                            placeholder="¿Tienes problemas para dormir?"
                            type="text"
                          />
                        </div>
                      </div>
                      <div class="d-flex mb-2">
                        <div class="col">
                          <textarea
                            class="form-control"
                            placeholder="¿Como te sientes?"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col text-center mt-4">
                        <button type="button" class="btn btn-dark">
                          Guardar
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

export default Diagnostico;

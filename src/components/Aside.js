import React, { Fragment, Component } from "react";

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { cambiarContenido } = this.props;

    return (
      <Fragment>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <a href="index3.html" className="brand-link">
            <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">CADELAHOZ</span>
          </a>

          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  Cassanda De La Hoz
                </a>
              </div>
            </div>

            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                  </button>
                </div>
              </div>
            </div>

            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item menu-open" onClick={ () => cambiarContenido('home') }>
                  <p className="nav-link">
                    <i className="nav-icon fas fa-home" />
                    <p>Home</p>
                  </p>
                </li>
                <li className="nav-item" onClick={ () => cambiarContenido('modificar') }>
                  <p className="nav-link">
                    <i className="nav-icon fas fa-user" />
                    <p>Modificar Información</p>
                  </p>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-copy" />
                    <p>Realización de Diagnostico</p>
                  </a>
                </li>
                <li className="nav-item" onClick={ () => cambiarContenido('Login') }>
                  <p className="nav-link">
                    <i className="nav-icon fas fa-sign-out-alt" />
                    <p>Cerrar Sección</p>
                  </p>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </Fragment>
    );
  }
}

export default Aside;

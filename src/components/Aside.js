import React from "react";

export default function Aside() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">CADELAHOZ</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
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
        {/* SidebarSearch Form */}
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
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            
            <li className="nav-item menu-open">
              <a href="" className="nav-link">
                <i className="nav-icon fas fa-home" />
                <p>
                  Home
                </p>
              </a>
            </li>
            <li className="nav-item ">
              <a href="../modificarUsuario.html" className="nav-link">
                <i className="nav-icon fas fa-user" />
                <p>
                  Modificar Información
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../diagnostico.html" className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>
                  Realización de Diagnostico
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../login.html" className="nav-link">
                <i className="nav-icon fas fa-sign-out-alt" />
                <p>
                  Cerrar Sección
                </p>
              </a>
            </li>
            </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}

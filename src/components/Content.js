import React, { Fragment, Component } from "react";
import ModificarUsuario from "../Fomulario/ModificarUsuario";
import Diagnostico from "../Fomulario/Diagnostico";
import Principal from "../Home/Principal";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { contenido } = this.props;

    return (
      <Fragment>
        <div className="content-wrapper">
          <div className="content-header">
            {contenido == "home" && <Principal />}
            {contenido == "modificar" && <ModificarUsuario />}
            {contenido == "diagnostico" && <Diagnostico />}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Content;

import React, { Fragment, Component } from "react";
import Aside from "./components/Aside";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./Fomulario/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: "home",
      persona: {
        "Identificacion" : 12342,
        "PrimerNombre" : "Luz",
        "SegundoNombre" : "Divina",
        "PrimerApellido":"Barrios",
        "SegundoApellido":"Rojas",
        "Estatura":165,
        "FechaNacimiento":"05/11/2001",
        "UsuarioCreacion":"ADMIN",
        "FechaCreacion":"11/29/2021",
        "UsuarioActualizacion":"ADMIN",
        "FechaActualizacion":"11/29/2021"
      }
    };
  }

  render() {
    const cambiarContenido = (contendio) => {
      this.setState({ valor: contendio });
    };

    let { valor, persona } = this.state;

    return (
      <Fragment>
        {valor == "Login" && <Login cambiarContenido={cambiarContenido}/>}

        {valor != "Login" && (
          <>
            <Header />
            <Aside contenido={valor} persona={persona} cambiarContenido={cambiarContenido} />
            <Content contenido={valor} />
            <Footer />
          </>
        )}
      </Fragment>
    );
  }
}
export default App;

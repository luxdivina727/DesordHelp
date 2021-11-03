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
    };
  }

  render() {
    const cambiarContenido = (contendio) => {
      this.setState({ valor: contendio });
    };

    let { valor } = this.state;

    return (
      <Fragment>
        {valor == "Login" && <Login cambiarContenido={cambiarContenido}/>}

        {valor != "Login" && (
          <>
            <Header />
            <Aside contenido={valor} cambiarContenido={cambiarContenido} />
            <Content contenido={valor} />
            <Footer />
          </>
        )}
      </Fragment>
    );
  }
}
export default App;

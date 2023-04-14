import React, { Component } from "react";
import firebase from "../Firebase";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
    };
    this.acessar = this.acessar.bind(this);
  }

  async acessar() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .then(() => {
        window.location.href = "./principal"
      })
      .catch((erro)=>{
        erro(<h2>Usuário não cadastrado!</h2>);
      })
  }
  render() {
    return (
      <form className="form">
        <h2>Login</h2>
        <input
          required
          type="email"
          onChange={(e) => this.setState({ email: e.target.value })}
          placeholder="Email"
        />
        <br />
        <input
          required
          type="password"
          onChange={(e) => this.setState({ senha: e.target.value })}
          placeholder="Senha"
        />

        <br />
        <Link to="/principal">
          <button type="button">Acessar</button>
        </Link>
      </form>
    );
  }
}

export default Login;

import React, { Component } from "react";
import firebase from "../Firebase";
import { Link } from "react-router-dom";

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      dataNascimento: "",
    };
    this.gravar = this.gravar.bind(this);
  }

  async gravar() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .then(async (retorno) => {
        await firebase
          .firestore()
          .collection("usuario")
          .doc(retorno.user.uid)
          .set({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            dataNascimento: this.state.dataNascimento
          });
      });
   
  }
  render() {
    return (
      <form className="form">
        <h2>Cadastro</h2>
        <input
          required
          type="text"
          onChange={(e) => this.setState({ nome: e.target.value })}
          placeholder="Nome"
        />
        <br />

        <input
          required
          type="text"
          onChange={(e) => this.setState({ sobrenome: e.target.value })}
          placeholder="Sobrenome"
        />
        <br />

        <input
          required
          type="email"
          onChange={(e) => this.setState({ email: e.target.value })}
          placeholder="E-mail"
        />
        <br />
        <input
          required
          type="password"
          onChange={(e) => this.setState({ senha: e.target.value })}
          placeholder="Senha"
        />
        <br />
        <input
          required
          type="date"
          onChange={(e) => this.setState({ dataNascimento: e.target.value })}
          placeholder="Data de Nascimento"
        />
        <br />
        <Link to="/login">
          <button type="button" onClick={this.gravar}>
            Cadastrar
          </button>
        </Link>
      </form>
    );
  }
}

export default Cadastro;

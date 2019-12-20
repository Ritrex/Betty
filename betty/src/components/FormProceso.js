import React, { Component } from "react";
import styled from "styled-components";
import { Formulario } from "./commons/styleds/Formulario";
import Axios from "axios";

class FormProceso extends Component {
  render() {
    let { edit } = this.props;
    let { state, handleProcessSubmit, setState } = this.props;
    return (
      <Formulario
        onSubmit={e => handleProcessSubmit(e, state, setState)}
        className="Signup"
        action="submit"
        alto="80%"
        ancho="80%"
      >
        <label htmlFor="processname">Nombre de la nueva Tarea</label>
        <input
          type="text"
          name="processname"
          placeholder="Nombre del proceso"
          defaultValue={Date.now().toString()}
        ></input>
        <button> Crear nueva Tarea</button>
      </Formulario>
    );
  }
}

export default FormProceso;

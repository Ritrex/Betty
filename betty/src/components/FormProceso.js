import React, { Component } from "react";
import styled from "styled-components";
import { Formulario } from "./commons/styleds/Formulario";
import { useParams } from "react-router-dom";

class FormProceso extends Component {
  render() {
    let { userid, taskid } = useParams();
    let { edit } = this.props;
    return (
      <Formulario action="submit" alto="80%" ancho="80%">
        <label htmlFor="processname">Nombre de la nueva Tarea</label>
        <input
          type="text"
          placeholder="Nombre del proceso"
          defaultValue={""}
        ></input>
        <label htmlFor></label>
      </Formulario>
    );
  }

  handleProcessSubmit(e, state) {}
}

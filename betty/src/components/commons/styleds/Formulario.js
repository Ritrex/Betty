import styled from "styled-components";

export const Formulario = styled.form`
    color:black;
    height:${props => (props.alto ? props.alto : "400px")};
    width: ${props => (props.ancho ? props.ancho : "400px")};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button{
      height: 30px;
      width: 200px;

      background-color:${props =>
        props.formButtonColor ? props.formButtonColor : "#77e277"};
      border:1px solid ${props =>
        props.formButtonColor ? props.formButtonColor : "#77ee77"};
      border-radius:8px;
      margin-top:20px;
    }

}
`;

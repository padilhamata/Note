import React from "react";

import Button from "../Button/Button";
import Hearder from "../Header/Header";
import Center from "../Center/Center";

const Error = ({ onRetry }) => (
  <div>
    <Hearder centered>Ops!</Hearder>
    <p>Ocorreu um erro inesperado ao carregar a lista de notas.</p>
    <Button onClick={onRetry}>Tentar novamente</Button>
  </div>
);

export default Error;

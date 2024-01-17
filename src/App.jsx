import React from "react"
import { Container, H1, Image, SubContainer, InputLabel, Input, Button } from "./styles"

const App = () => {

  return(
    
    <Container>
      <Image></Image>

      <SubContainer>

      <H1>Faça seu pedido!</H1>

      <InputLabel>Pedido:</InputLabel>
      <Input placeholder="Pedido"></Input>

      <InputLabel>Nome do Cliente:</InputLabel>
      <Input placeholder="Nome do Cliente"></Input>

      <Button>Novo Pedido</Button>

      </SubContainer>

    </Container>
  )
}

export default App 
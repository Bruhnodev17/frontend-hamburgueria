import React from "react"
import Burguer from "./assets/burguer.png"
import { Container, H1, Image, SubContainer, InputLabel, Input, Button } from "./styles"

const App = () => {

  const users = [{ id: Math.random(), name: "Manoel", age: 22 }, { id: Math.random(), name: "Maria", age: 18 }]

  return (

    <Container>
      <Image alt="logo-imagem" src={Burguer} />

      <SubContainer>

        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido:</InputLabel>
        <Input placeholder="Pedido"></Input>

        <InputLabel>Nome do Cliente:</InputLabel>
        <Input placeholder="Nome do Cliente"></Input>

        <Button>Novo Pedido</Button>
        <ul>{ users.map( user => (
          <li key={user.id}>
            {user.name} - {user.age} 
          </li>
        ))
            }
        </ul>

      </SubContainer>

    </Container>
  )
}

export default App 
import React from "react"
import Burguer from "./assets/burguer.png"
import { Container, H1, Image, SubContainer, InputLabel, Input, Button,User } from "./styles"
import Trash from "./assets/trash.svg"

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
          <User key={user.id}>
            <p>{user.name}</p><p>{user.age} </p>
            <button><img src={Trash} alt="latinha de lixo"/></button>
          </User>
        ))
            }
        </ul>

      </SubContainer>

    </Container>
  )
}

export default App 
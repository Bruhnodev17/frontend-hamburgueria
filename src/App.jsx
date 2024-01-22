import React, { useState, useRef } from "react"
import Burguer from "./assets/burguer.png"
import { Container, H1, Image, SubContainer, InputLabel, Input, Button, User } from "./styles"
import Trash from "./assets/trash.svg"

const App = () => {

  const [users, setUsers] = useState([])

  const inputOrder = useRef()
  const inputName = useRef()

  function addNewUsers() {
    setUsers([...users, { id: Math.random(), order: inputOrder.current.value, name: inputName.current.value }])
  }

  function deleteUser(){
    console.log("hello")
  }


  return (

    <Container>
      <Image alt="logo-imagem" src={Burguer} />

      <SubContainer>

        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido:</InputLabel>
        <Input ref={inputOrder} placeholder="Pedido"></Input>

        <InputLabel>Nome do Cliente:</InputLabel>
        <Input ref={inputName} placeholder="Nome do Cliente"></Input>

        <Button onClick={addNewUsers}>Novo Pedido</Button>

        <ul>{users.map(user => (
          <User key={user.id}>
            <p>{user.order+" - "}</p>
            <p>{user.name}</p>
            <button onClick={deleteUser}><img src={Trash} alt="latinha de lixo" /></button>
          </User>
        ))
        }
        </ul>

      </SubContainer>

    </Container>
  )
}

export default App 
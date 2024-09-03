import api from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import Trash from "../../assets/trash.svg";
import {
  AvatarUser,
  CardUsers,
  Container,
  ContainerUsers,
  Title,
  TrashIcon,
} from "./styles";

function ListUsers() {
  const navigate = useNavigate();

  //Toda vez que eu quiser alterar algo na tela (DOM), eu necessito usar um estado do React
  const [users, setUsers] = useState([]);

  //Trazendo os usuários do banco de dados e mostrando na tela
  /*useEffect -> Toda vez que a página carrega, ele é chamado;
             -> Toda vez que uma variável muda de valor, ele é chamado;*/
  useEffect(() => {
    async function getUsers() {
      //Desestruturando o data para trazer apenas os dados que me interessa da API, que no caso estão em "data"
      const { data } = await api.get("/usuarios");

      setUsers(data);
    }
    getUsers();
  }, []);

  //Deletando usuários
  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);

    const updatedUsers = users.filter((user) => user.id !== id);

    setUsers(updatedUsers);
  }

  return (
    <Container>
      <TopBackground />
      <Title> Lista de Usuários </Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon
              src={Trash}
              alt="icone-lixeira"
              onClick={() => deleteUsers(user.id)}
            />
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;

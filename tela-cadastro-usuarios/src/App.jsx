import {
  Button,
  Container,
  ContainerInputs,
  Form,
  Input,
  InputLabel,
  Title,
  TopBackground,
} from "./styles";

//Importando as imagens do projeto
import UsersImage from "./assets/users.png";

function Home() {
  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="Imagem-Usuarios" />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usuário" />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do usuário" />
        </div>

        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  );
}

export default Home;

/**
 * export default -> exporta apenas um item por página
 * -> import: como se trata apenas de um item, pode dar o nome que quiser para o item importado
 * export         -> exporta um ou mais itens por página
 * -> import: por se tratar de mais de um item, é necessário utilizar os colchetes {} e colocar exatamente o nome utilizado na exportação. Caso haja necessidade de renomear o item, utilizase o 'as' depois do nome, por exemplo: {item1 as teste}
 */

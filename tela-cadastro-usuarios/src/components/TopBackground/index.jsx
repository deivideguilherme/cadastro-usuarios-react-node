import { Background } from "./styles";

//Importando as imagens do projeto
import UsersImage from "../../assets/users.png";

function TopBackground() {
  return (
    <Background>
      <img src={UsersImage} alt="Imagem-Usuarios" />
    </Background>
  );
}

export default TopBackground;

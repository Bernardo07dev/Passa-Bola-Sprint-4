import StructurePages from "../../components/StructurePages";
import Footer from "../../components/footer";
import AtletaPost from "../../components/AtletaPost";
import player from "../../assets/img/palyer.png";
import post1 from "../../assets/img/ohio_post.jpg";
import luiza from "../../assets/img/luiza.png";
import peneira from "../../assets/img/peneira.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import treinadora from "../../assets/img/treinadora.png";




const Comunidade = () => {
    return(
        <StructurePages>
            <header className="flex flex-row justify-between items-center px-10 pt-12 mb-12">
                <img className="w-[11.5%]" src={treinadora} />
                <FontAwesomeIcon icon={faBell} className="text-2xl text-gray-300" />
            </header>

            {/* <h1 className="text-left w-full px-10 py-6 text-lg">Seu Feed</h1> */}

            <AtletaPost like={5} perfil={player} post={post1} descricao="Mais uma vitória para o time, obrigado #OhioUneversity pela oportunidade!!"></AtletaPost>
            <AtletaPost like={13} perfil={luiza} post={peneira} descricao="Hoje fiz uma peneira no Corinthians Sport Clube, muito feliz pela oportunidade, obrigado #passabola"></AtletaPost>

            <Footer estado="comunidade"></Footer>
        </StructurePages>
    )
}

export default Comunidade;
import StructurePages from "../../components/StructurePages";
import Footer from "../../components/footer";
import AtletaPost from "../../components/AtletaPost";
import Header from "../../components/Header";
import player from "../../assets/img/palyer.png";
import post1 from "../../assets/img/ohio_post.jpg";
import luiza from "../../assets/img/luiza.png";
import peneira from "../../assets/img/peneira.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SliderPeneiras from "../../components/SliderPeneiras";
import { useState, useEffect } from "react";
import axios from "axios";

const Comunidade = () => {

    return(
        <StructurePages>
            <Header></Header>

            <h1 className="text-xl mb-2 text-left w-full px-10">Oportunidades</h1>
            <SliderPeneiras></SliderPeneiras>

            <h1 className="text-xl mb-6 text-left w-full px-10">Seu Feed</h1>
            <AtletaPost like={5} perfil={player} post={post1} descricao="Mais uma vitória para o time, obrigado #OhioUneversity pela oportunidade!!"></AtletaPost>
            <AtletaPost like={13} perfil={luiza} post={peneira} descricao="Hoje fiz uma peneira no Corinthians Sport Clube, muito feliz pela oportunidade, obrigado #passabola"></AtletaPost>

            <Footer estado="comunidade"></Footer>
        </StructurePages>
    )
}

export default Comunidade;
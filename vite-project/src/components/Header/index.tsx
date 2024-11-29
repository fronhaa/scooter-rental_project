import { Link } from "react-router-dom";
import { HeaderContainer, HeaderMain, ImageContainer, NavContainer } from "./styles";
import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

export function Header() {
    const context = useContext(LoginContext);

   return (
    <HeaderMain>
        <HeaderContainer>
            <ImageContainer>
                <img src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" alt="iamge"/>
            </ImageContainer>

            <NavContainer>
                <span>Usuario: {context.nome}</span>
            </NavContainer>
        </HeaderContainer>
    </HeaderMain>
   ); 
}
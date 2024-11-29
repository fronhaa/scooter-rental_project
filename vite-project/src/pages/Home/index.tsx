import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";
import { HomeContainer } from "./styles";

export function Home() {
    const context = useContext(LoginContext);

    return (
        <HomeContainer>
            <h1>Home</h1>
            <h2>{context.email}</h2>
            <h2>{context.nome}</h2>
        </HomeContainer>
    );
}
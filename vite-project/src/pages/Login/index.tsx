import { useContext } from "react";
import { LoginApi } from "../../api/loginApi";
import { Input } from "../../components/Input";
import { ButtonContainer, FormContainer, LoginContainer, LoginTitle } from "./styles";
import { useForm } from "react-hook-form";
import { LoginContext } from "../../Context/LoginContext";
import { useNavigate } from "react-router-dom";

export function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const context = useContext(LoginContext);
    const navigate = useNavigate();

    const submitForm = (data: any) => {
        const login: { email: string; password: string; nome: string }  = LoginApi(data);
        console.log(login);

        context.saveUser(login.email, login.password, login.nome);

        navigate('/');
    };

    return (
        <LoginContainer>
            <LoginTitle>Faça seu login na aplicação</LoginTitle>
            <FormContainer onSubmit={handleSubmit(submitForm)}>
                <Input 
                    label="E-mail" 
                    type="email" 
                    register={register("E-mail")} 
                />
                <Input 
                    label="Senha" 
                    type="password" 
                    register={register("Senha")}
                />
                <ButtonContainer>
                    <button type="submit">Entrar</button>
                </ButtonContainer>
            </FormContainer>
        </LoginContainer>
    );
}

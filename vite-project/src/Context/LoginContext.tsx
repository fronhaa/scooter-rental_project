import {createContext, FunctionComponent, ReactElement, useState } from "react";

interface LoginProviderProps {
    children: ReactElement;
};

interface LoginInterfaceProps {
    email: string;
    password: string;
    nome: string;

    saveUser: (email: string, password: string, nome: string) => void;
}

export const LoginContext = createContext({} as LoginInterfaceProps);

export const LoginProvider: FunctionComponent<LoginProviderProps> = ({children}) => {
    const [usuario, setUsuario] = useState({
        email: '',
        password: '',
        nome: '',
    });

    function saveUser(email: string, password: string, nome: string) {
        setUsuario({
            email: email,
            password: password,
            nome: nome
        });
    }

    return (
        <LoginContext.Provider 
        value={
            {
                email: usuario.email,
                nome: usuario.nome,
                password: usuario.password,
                saveUser: saveUser
            } as LoginInterfaceProps
        } >
            {children}
        </LoginContext.Provider>
    );
};
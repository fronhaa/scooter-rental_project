interface LoginApiProps {
    email: string;
    password: string;
}

export function LoginApi({email, password}: LoginApiProps) {
    console.log(email, password);

    return {
        nome: 'Marcelo Martiniano',
        email: 'tichobacelo@gmail.com',
        password: 'teste'
    };
}
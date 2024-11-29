import { Login } from "../../pages/Login";
import { LayoutContainer } from "../DefaultLayout/styles";

export function AuthLayout() {
    return (
        <LayoutContainer>
            <Login />
        </LayoutContainer>
    );
}
import { Outlet } from "react-router-dom";
import { Container, LayoutContainer } from "./styles";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
//import { Slide, ToastContainer } from "react-toastify";
//import 'react-toastify/dist/ReactToastify.css';
export function DefaultLayout() {
  return (
    <>
      <Container>
        <Sidebar />
        <Header />

        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
      </Container>
    </>
  );
}

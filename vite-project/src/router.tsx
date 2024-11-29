import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { AuthLayout } from "./layout/AuthLayout/AuthLayout";


export function Router() {
  return (
    <Routes>
        <Route path="/login" element={<AuthLayout />} />
        <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
        </Route>
    </Routes>
  );
}

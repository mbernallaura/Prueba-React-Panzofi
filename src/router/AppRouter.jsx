import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage";
import { AdminPage, NormalPage } from "../appPrincipal";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={ <LoginPage/> }/>
                <Route path="admin" element= { <AdminPage/> }/>
                <Route path="normal" element={ <NormalPage/> }/>
                <Route path="/" element={ <Navigate  to="/login"/>}/>
            </Routes>
        </>
    )
}

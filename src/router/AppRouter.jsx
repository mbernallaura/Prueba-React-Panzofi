import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={ <LoginPage/> }/>
                <Route path="/" element={ <Navigate  to="/login"/>}/>
            </Routes>
        </>
    )
}

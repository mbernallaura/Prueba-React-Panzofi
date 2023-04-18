import { FormLogin } from "../components/FormLogin"


export const LoginPage = () => {
    return (
        <>
            <div className="card ">
                <div className="card-body">
                    <div className="text-center">
                        <img src="../src/assets/logoPanzofi.png" alt="logo" className="logo"/>
                        <h2 className="card-title">Panzofi</h2>
                    </div>
                    <FormLogin/>
                </div>
            </div>
        </>
    )
}

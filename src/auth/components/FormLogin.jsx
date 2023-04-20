import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks"
import { obtenerUsuario } from "../service/obtenerUsuario"


export const FormLogin = () => {
    const navigate = useNavigate(); 
    const {user, password, onInputChange} = useForm({
        user:'',
        password:''
    });

    const onLogin = async (event) =>{
        event.preventDefault();
        const persona = await obtenerUsuario(user, password);
        localStorage.setItem('user',JSON.stringify(persona));
        if(persona.cod_rol_id === 1){
            return navigate(`/admin`,{
                replace: true
            });
        }else{
            return navigate(`/normal`,{
                replace: false
            });
        }
    }

    return (
        <form className="was-validated" onSubmit={ onLogin }>
            <div className="mb-3">
                <label className="form-label">Usuario</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="user" 
                    value={ user }
                    onChange={ onInputChange }
                    required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input 
                    type="password" 
                    className="form-control"
                    name="password" 
                    value={ password } 
                    onChange={ onInputChange }
                    required/>
            </div>
            <div className="d-grid gap-2">
                <button 
                    className="btn btn-primary mt-2 mb-2"
                    type="submit"
                >Entrar</button>
            </div>
        </form>
    )
}

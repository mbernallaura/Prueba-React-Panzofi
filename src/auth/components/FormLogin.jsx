

export const FormLogin = () => {
    return (
        <form>
            <div className="mb-3">
                <label for="formGroupExampleInput" class="form-label">Usuario</label>
                <input type="text" className="form-control" id="usuario" name="password"/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" name="password"/>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-primary mt-2 mb-2">Entrar</button>
                <div className="separator">
                    <hr />
                        <span>Eres admin?</span> 
                    <hr />
                </div>
                <button className="btn btn-secondary gap-2">Admin</button>
            </div>
        </form>
    )
}

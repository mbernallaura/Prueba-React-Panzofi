import { useNavigate } from "react-router-dom";


export const Navbar = ({user}) => {
    const navigate = useNavigate();

    const onLogout = () =>{
        localStorage.removeItem('user');
        navigate('/login',{
            replace: true,
        });
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-2">
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>{user.user}</span>
                    <button 
                        className='nav-item nav-link btn'
                        onClick={ onLogout }
                    >Logout</button>
                </ul>
            </div>
        </nav>
    )
}

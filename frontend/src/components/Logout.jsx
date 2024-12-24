import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('user'); // Clear user data from localStorage
        navigate('/'); // Navigate to the login page (or any other page you want)
    };

    return (
        <>
            <nav className="container w-full bg-black py-3 px-3 text-white flex justify-between items-center">
                <h5>Grading Application</h5>
                <form onSubmit={(e) => { e.preventDefault(); handleLogout(); }}>
                    <button type="submit" className="text-sm bg-red-900 text-white py-2 px-2">
                        Logout
                    </button>
                </form>
            </nav>
        </>
    )
}

export default Logout;
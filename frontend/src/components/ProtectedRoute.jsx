import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProtectedRoute = ({children, allowedUser}) => {

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const userData = JSON.parse(storedUser);

            if (userData.user.role_id !== allowedUser) { 
                alert("You do not have permission to access this page")
                    navigate("/");
            }
        }else {
            alert ("Your Session is expired");
                navigate("/");
        }
    },[navigate, allowedUser]);

    return <>{children}</>
}

export default ProtectedRoute;
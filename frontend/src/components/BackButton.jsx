import { useNavigate, useParams } from "react-router-dom";
const BackButton = () => {
    const navigate = useNavigate();

    const useR = localStorage.getItem('user');
    const localuseR = JSON.parse(useR);

    const id = localuseR.user.id
    return (
        <button onClick={() => navigate(`/home/${id}`)} className="bg-red-900 text-white px-3 py-2" disabled={!id}>
            Back
        </button>
    );
};

export default BackButton;
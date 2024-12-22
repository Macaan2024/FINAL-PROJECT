import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const SubjectList = ({ id }) => {
    const [enrolledSubjects, setEnrolledSubjects] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEnrolledSubjects = async () => {
            try {
                const response = await axios.get(`/index-enrollment/${id}`);

                if (response.data.length > 0) {
                    setEnrolledSubjects(response.data);
                }else {
                    setError(response.data.message);
                }
            } catch (err) {
                setError(err.response?.data?.message || "Error loading subjects");
            }
        };

        if (id) {
            fetchEnrolledSubjects();
        }
    }, [id]);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full px-2 mt-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-red-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">No</th>
                        <th scope="col" className="px-6 py-3">Subjects</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {error ? (
                        <tr>
                            <td colSpan="3" className="text-center text-red-500">{error}</td>
                        </tr>
                    ) :  (
                        enrolledSubjects.map((subject, index) => (
                            <tr key={subject.id}>
                                <td className="px-6 py-3">{index + 1}</td>
                                <td className="px-6 py-3">{subject.subject.description}</td>
                                <td className="px-6 py-3">
                                    <button 
                                    className="text-white bg-red-900 text-white p-2"
                                    onClick={() => navigate(`/viewSubject/${subject.id}`)}
                                    >View
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default SubjectList;
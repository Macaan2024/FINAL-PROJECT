import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import Footer from './Footer';
import GradesButton from './GradesButton';

const ViewSubject = () => {
    const { id } = useParams();
    const [enrolledSubject, setEnrolledSubject] = useState(null);
    const [error, setError] = useState(null);
    const [grades, setGrades] = useState(null); // State to hold fetched grades

    useEffect(() => {
        const fetchEnrolledSubject = async () => {
            try {
                const response = await axios.get(`/show-enrollment/${id}`);
                if (response.data) {
                    setEnrolledSubject(response.data);
                } else {
                    setError('No subject found.');
                }
            } catch (e) {
                setError(e.message || 'Failed to fetch enrolled subject.'); // Extract the error message
            }
        };

        if (id) {
            fetchEnrolledSubject();
        }
    }, [id]);

    const fetchGrade = async (period_id) => {   
        try {
            const response = await axios.get(`/grade/${id}/${period_id}`);

            if (response.data) {
                setGrades(response.data); // Update state with fetched grades
                setError(response.data.message); // Clear any previous errors
            } else {
                setGrades(null);
                setError(response.data.message);
            }
        } catch (e) {
            setGrades(null);
            setError(e.message || 'An error occurred while fetching grades.'); // Extract the error message
        }
    };

    return (
        <div>
            {/* Header */}
            <div className="w-full bg-black p-4">
                <h1 className="text-white text-xl">Grading Application</h1>
            </div>

            {/* Content */}
            <div className="px-2">
                {/* Enrolled Subject Details */}
                <div className="w-full bg-red-900 text-white font-normal p-4 mt-5">
                    {enrolledSubject ? (
                        <div>
                            <div className="flex gap-4 items-center text-md">
                                <span>Code:</span>
                                <h1 className="text-white text-lg">
                                    {enrolledSubject.subject.subjectCode}
                                </h1>
                            </div>
                            <div className="flex gap-4 items-center text-md">
                                <span>Description:</span>
                                <h1 className="text-white text-lg">
                                    {enrolledSubject.subject.description}
                                </h1>
                            </div>
                            <div className="flex gap-4 items-center text-md">
                                <span>Room:</span>
                                <h1 className="text-lg">{enrolledSubject.subject.room}</h1>
                            </div>
                            <div className="flex gap-4 items-center text-md">
                                <span>Units:</span>
                                <h1>{enrolledSubject.subject.units}</h1>
                            </div>
                        </div>
                    ) : (
                        <div className="text-red-500">{error}</div>
                    )}
                </div>

                {/* GPA Section */}
                <div className="mt-5 bg-green-700 py-2 pl-2 text-white text-md font-medium">
                    <h1>Current GPA: </h1>
                </div>

                {/* Grades Section */}
                <h1 className="mt-10 text-md font-medium">Grades</h1>
                <div className="mt-5">
                    <GradesButton fetchGrade={fetchGrade} />
                </div>

                {/* Display Fetched Grades */}
                {grades && (
                    <div className="mt-5 bg-gray-200 p-4">
                        <h2 className="text-lg font-semibold">Fetched Grades:</h2>
                        <div>
                            <p><strong>Name: </strong>{grades.user.firstname} <span>{grades.user.lastname}</span></p>
                            <p><strong>Grade:</strong> {grades.grade}</p>
                            <p><strong>Status:</strong> {grades.status}</p>
                            <p><strong>Faculty Name:</strong> {grades.faculty_name}</p>
                        </div>
                    </div>
                )}

                {/* Error Message */}
                {error && <div className="text-red-500 mt-4">{error}</div>}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ViewSubject;

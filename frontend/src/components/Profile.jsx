import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import BackButton from './BackButton';

const Profile = () => {
    const { id } = useParams(); // Get the user ID from the URL
    const [error, setError] = useState(null); // For error handling
    const [profile, setProfile] = useState(null); // To store fetched profile data

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`/profile-user/${id}`); // API call to get the profile
                if (response.data) {
                    setProfile(response.data); // Update profile state with fetched data
                }
            } catch (e) {
                setError("Failed to fetch profile data"); // Set error state
            }
        };

        fetchProfile(); // Invoke the function
    }, [id]); // Dependency array ensures fetch happens when `id` changes

    // If there's an error fetching the data, show an error message
    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    // If profile data is available, render it
    if (profile) {
        return (
            <div className="min-h-screen bg-gray-100 py-10">
                <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
                    {/* Logout Button */}
                    <div className="flex justify-start">
                        <BackButton /> 
                    </div>

                    {/* Profile Section */}
                    <div className="text-center mt-10">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile Information</h1>
                        <div className="space-y-4 text-left">
                            <div className="flex justify-between">
                                <span className="font-semibold text-gray-700">Unique ID:</span>
                                <span className="text-gray-500">{profile.unique_id}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold text-gray-700">Lastname:</span>
                                <span className="text-gray-500">{profile.lastname}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold text-gray-700">Firstname:</span>
                                <span className="text-gray-500">{profile.firstname}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold text-gray-700">Middlename:</span>
                                <span className="text-gray-500">{profile.middlename}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold text-gray-700">Gender:</span>
                                <span className="text-gray-500">{profile.gender}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold text-gray-700">Department:</span>
                                <span className="text-gray-500">{profile.department}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold text-gray-700">Course:</span>
                                <span className="text-gray-500">{profile.course}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold text-gray-700">Email:</span>
                                <span className="text-gray-500">{profile.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Default case if no profile is available
    return <div className="text-center text-gray-500">No profile data available.</div>;
};

export default Profile;

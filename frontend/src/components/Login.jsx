import axios from '../api/axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [unique_id, set_unique_id] = useState("");
    const [password, set_password] = useState("");
    const [role_id, set_role_id] = useState("");  // 1 for Admin, 2 for Student
    const [error, set_error] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/login", { unique_id, password });
            if (response.status === 200) {
                const userData = response.data;
                localStorage.setItem("user", JSON.stringify(userData));
                if (userData.user.role_id == 1) {
                    navigate(`/home/${userData.user.id}`);
                } else if (userData.user.role_id === 2) {
                    navigate("/home");
                }
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    set_error("Invalid credentials. Please check your input.");
                } else if (error.response.status === 500) {
                    set_error("Server error. Please try again later.");
                }
            }
        }
    };

    return (
        <div className="h-screen">
            <div className="w-72 sm:w-96 mx-auto mt-12">
                <form className="max-w-sm mx-auto" onSubmit={handleLogin}>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Unique Id</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="2022-00317"
                            value={unique_id}
                            onChange={(e) => set_unique_id(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Password</label>
                        <input
                            type="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={password}
                            onChange={(e) => set_password(e.target.value)}
                            required
                        />
                    </div>
                    <input type="hidden" value={role_id} onChange={(set_role_id)} />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="text-white bg-red-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                    <Link to="/register">
                        <h6 className="mt-2 text-center text-gray-700 text-sm">Create Account</h6>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;

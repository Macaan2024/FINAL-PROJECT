import { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const Register = () => {

    const [role_id, set_role_id] = useState("");
    const [unique_id, set_unique_id] = useState("");
    const [lastname, set_lastname] = useState("");
    const [firstname, set_firstname] = useState("");
    const [middlename, set_middlename] = useState("");
    const [course, set_course] = useState("");
    const [department, set_department] = useState("");
    const [year, set_year] = useState("");
    const [age, set_age] = useState("");
    const [gender, set_gender] = useState("");
    const [status, set_status] = useState("pending");
    const [email, set_email] = useState("");
    const [password, set_password] = useState("");
    const [password_confirmation, set_password_confirmation] = useState("");
    const [loading, set_loading] = useState(false);
    const navigate = useNavigate();


    const handleRegister = async(e) => {
        e.preventDefault();
        set_loading(true);
    
        if (password !== password_confirmation) {
            alert("Password do not match. Please try again.");
            set_loading(false);
            return;
        }   
        const formData = {
            role_id,
            unique_id,
            lastname,
            firstname,
            middlename,
            gender,
            course,
            year,
            department,
            age,
            status,
            email,
            password,
            password_confirmation,
        };
        try {
            const response = await axios.post("/register", formData);
            set_role_id("");
            set_unique_id("");
            set_lastname("");
            set_firstname("");
            set_middlename("");
            set_gender("");
            set_course("");
            set_year("");
            set_department("");
            set_age("");
            set_status("");
            set_email("");
            set_password("");
            set_password_confirmation("");
            

            set_loading(false);
            if (response.status === 201) {
                alert("Registration successful!");
                navigate("/");
            }
        } catch (error) {   
            set_loading(false);
            if (error.response && error.response.data.errors) {
                alert(JSON.stringify(error.response.data.errors));
            } else if (error.response && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert('An unexpected error occurred');
            }   
        }
    }

    return (
        <>
        <div className="bg-slate-100">
            <h4 className="bg-red-950 text-white py-3 px-3 font-medium">SPC Grading Application</h4>
            <Link to="/">
                <h4 className="py-3 px-3 mt-5">Back to Login</h4>
            </Link>
            
            <div className="mt-5 flex justify-center bg-white">
                <div className="w-72 sm:w-96">

                    {/* Roles */}
                    <h4 className="font-normal text-center my-10  text-base bg-red-950 py-2 text-white">Registration</h4>
                    <form className="mt-12" onSubmit={handleRegister} method="POST">
                        <div className="">
                            <label>Choose Role</label>
                            <div className="flex flex-wrapper">
                                <div className="flex items-center me-4 mt-3">
                                    <input 
                                    type="radio" 
                                    name="role_id"
                                    value="1"
                                    checked={role_id === "1"}
                                    onChange={() => set_role_id("1")} 
                                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                                    <label 
                                    className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Student</label>
                                </div>
                                <div className="flex items-center me-4 mt-3">
                                    <input 
                                    type="radio" 
                                    name="role_id"
                                    value="2"
                                    checked={role_id === "2"}
                                    onChange={() => set_role_id("2")} 
                                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label 
                                    className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Faculty</label>
                                </div>
                            </div>
                        </div>

                        {/* Unique ID */}
                        <div className="mt-7">
                            <label 
                            className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Unique ID</label>
                            <input 
                            type="text"
                            name="unique_id"
                            value={unique_id}
                            onChange={(e) => set_unique_id(e.target.value)} 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="2022-00317" 
                            required />
                        </div>

                        {/* Firstname */}
                        <div className="mt-9">
                            <label 
                            className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Firstname</label>
                            <input 
                            type="text" 
                            name="firstname"
                            value={firstname}
                            onChange={(e) => set_firstname(e.target.value)}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                            placeholder="Casan" 
                            required />
                        </div>

                        {/* Lastname */}
                        <div className="mt-9">
                            <label 
                            className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Lastname</label>
                            <input 
                            type="text" 
                            name="lastname"
                            value={lastname}
                            onChange={(e) => set_lastname(e.target.value)}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                            placeholder="Macaan" 
                            required />
                        </div>

                        {/* Middlename */}
                        <div className="mt-9">
                            <label 
                            className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Middlename</label>
                            <input 
                            type="text"
                            name="middlename"
                            value={middlename}
                            onChange={(e) => set_middlename(e.target.value)} 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Macarandas" 
                            required />
                        </div>
                        
                        {/* Courses */}
                        <div className="mt-9">
                            <label 
                            className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Course</label>
                            <select 
                            name="course"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            defaultValue={course}
                            onChange={(e) => set_course(e.target.value)}>
                                <option defaultValue="">Select Course</option>
                                <option value="BSIT">Bachelor Of Science in Information Technology</option>
                                <option value="BSCRIM">Bachelor Of Science in Criminology</option>
                                <option value="BSBA">Bachelor of Science in Business Administration</option>
                                <option value="BASc">Bachelor of Arts and Science</option>
                                <option value="BSCE">Bachelor of Science in Civil Engineering</option>
                                <option value="BSEE">Bachelor of Science in Electrical Engineering</option>
                                <option value="BSME">Bachelor of Science in Mechanical Engineering</option>
                                <option value="BSEd">Bachelor of Science in Education</option>
                            </select>
                        </div>
                        {/* Department */}
                        <div className="mt-9">  
                            <label 
                            className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Department</label>
                            <select 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                            "
                            name="department"
                            defaultValue={department}
                            onChange={(e) => set_department(e.target.value)}>
                                <option defaultValue="">Select Department</option>
                                <option value="CCS">College Of Computer Studies</option>
                                <option value="COC">College Of Criminology</option>
                                <option value="CAS">College Of Arts And Sciences</option>
                                <option value="CBA">College Of Business Administration</option>
                                <option value="CE">College Of Engineering</option>
                                <option value="CED">College Of Education</option>
                            </select>
                        </div>
                        {/* Year */}
                        <div className="mt-9">
                            <label 
                            className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Year</label>
                            <select 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="year"
                            defaultValue={year}
                            onChange={(e) => set_year(e.target.value)}>
                                <option defaultValue="">Select Year Level</option>
                                <option value="1st-Year">1st-Year</option>
                                <option value="2nd-Year">2nd-Year</option>
                                <option value="3rd-Year">3rd-Year</option>
                                <option value="4th-Year">4th-Year</option>
                            </select>
                        </div>
                        
                        {/* Age */}
                        <div className="mt-9 mb-9">
                            <label 
                            className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Age</label>
                            <input 
                            type="text" 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                            name="age"
                            value={age}
                            onChange={(e) => set_age(e.target.value)}
                            placeholder="25" required />
                        </div>

                        {/* Gender */}
                        <div className="mt-9">
                            <label className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Gender</label>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={gender === "Male"}
                                        onChange={() => set_gender("Male")}
                                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor="male" className="text-sm font-normal text-gray-900 dark:text-gray-300">Male</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={gender === "Female"}
                                        onChange={() => set_gender("Female")}
                                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor="female" className="text-sm font-normal text-gray-900 dark:text-gray-300">Female</label>
                                </div>
                            </div>
                        </div>

                        {/* Status */}
                        <input type="hidden" name="status" value={status}/>

                        {/* Email */}
                        <div className="mt-9">
                            <label 
                            className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Email</label>
                            <input 
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => set_email(e.target.value)} 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="macaancasan1@gmail.com" 
                            required />
                        </div>

                        {/* Password */}
                        <div className="mt-9">
                            <label className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => set_password(e.target.value)}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                required
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="mt-9 mb-9">
                            <label className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Confirm Password</label>
                            <input
                                type="password"
                                name="password_confirmation"
                                value={password_confirmation}
                                onChange={(e) => set_password_confirmation(e.target.value)}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                required
                            />
                        </div>
                        <button type="submit" disabled={loading} className="my-9 w-full focus:outline-none text-white bg-red-950 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">{loading ? 'Loading' : 'Submit'}</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register
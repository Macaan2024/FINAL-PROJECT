import { useParams } from "react-router-dom";
import axios from '../api/axios';
import { useState, useEffect} from 'react'
import Header from './Header';
import Greetings from './Greetings';
import CardsGPA from './CardsGPA';
import SubjectList from "./SubjectList";
import Footer from './Footer';


const Home = () => {
    const { id } = useParams();
    const [user, setUser] = useState("");
    const [subject, setSubject] = useState([]);
    const [error, setError] = useState("");

    const fetchUser = async() => {
        try {
            const response = await axios.get(`user/${id}`);
            setUser(response.data);
            
        }catch (err) { 
            setError(err);
        }   
    }

    useEffect(() => {
        fetchUser();
    },[id]);


    // Fetch SUbjects


    const fetchSubject = async() => {

        try {
            const response = await axios.get('subject');
            setSubject(response.data);

        }catch (e) {
            setError(e.response.data.error);
        }
    }

    return (
        <>
            <Header />
            <div className="">
                <div className="mt-5 px-3">
                    <Greetings 
                    firstname={user.firstname}
                    course={user.course}
                    year={user.year}
                    className="" 
                    />
                </div>
                <div className="mt-5 px-3">
                    <CardsGPA 
                    className=""/>
                </div>

                {/* subject */}
                <h5 className="px-3 mt-5">My Subjects</h5>
                <div className="w-full flex justify-center">
                    <SubjectList id={id}/>
                </div>
                <div>
                    <Footer active="home"/>  
                </div>
            </div>
        </>
    );
};

export default Home;

import { useEffect, useState } from "react";
import axios from "../api/axios";

const Feedbacks = ({ id }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        // Get user info from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser) throw new Error("User not found");

        const { role_id, unique_id } = storedUser.user;

        // Fetch all feedbacks
        const response = await axios.get("feedbacks");
        const allFeedbacks = response.data;

        // Filter feedbacks based on user type and unique_id
        const filteredFeedbacks = allFeedbacks.filter(
          (feedback) => feedback.usertype === role_id && feedback.unique_id === unique_id
        );

        setFeedbacks(filteredFeedbacks);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchFeedbacks();
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (feedbacks.length === 0) return <p>No feedbacks found.</p>;

  return (
    <>
      <h1>Feedbacks</h1>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index}>{feedback.statement}</li>
        ))}
      </ul>
    </>
  );
};

export default Feedbacks;

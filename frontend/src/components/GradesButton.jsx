import { useState } from 'react';

const GradesButton = ({ fetchGrade }) => {
    const [activePeriod, setActivePeriod] = useState(null); // Track the active period

    const buttonClick = (period) => {
        setActivePeriod(period); // Set the active period
        fetchGrade(period); // Call the fetchGrade function with the selected period
    };

    return (
        <div className="flex gap-4">
            <button
                onClick={() => buttonClick(1)} // Prelim
                className={`px-4 py-2 rounded transition ${
                    activePeriod === 1 ? 'bg-red-900 text-white' : 'bg-gray-200 text-black hover:bg-gray-400 hover:text-white'
                }`}
            >
                Prelim
            </button>
            <button
                onClick={() => buttonClick(2)} // Midterm
                className={`px-4 py-2 rounded transition ${
                    activePeriod === 2 ? 'bg-red-900 text-white' : 'bg-gray-200 text-black hover:bg-gray-400 hover:text-white'
                }`}
            >
                Midterm
            </button>
            <button
                onClick={() => buttonClick(3)} // Semi Finals
                className={`px-4 py-2 rounded transition ${
                    activePeriod === 3 ? 'bg-red-900 text-white' : 'bg-gray-200 text-black hover:bg-gray-400 hover:text-white'
                }`}
            >
                Semi Finals
            </button>
            <button
                onClick={() => buttonClick(4)} // Finals
                className={`px-4 py-2 rounded transition ${
                    activePeriod === 4 ? 'bg-red-900 text-white' : 'bg-gray-200 text-black hover:bg-gray-400 hover:text-white'
                }`}
            >
                Finals
            </button>
        </div>
    );
};

export default GradesButton;
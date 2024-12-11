import React from 'react';
import { FormData } from '../models/Project';

interface DisplayComponentProps {
    data: FormData;
    onBack: () => void;
}

const DisplayComponent: React.FC<DisplayComponentProps> = ({ data, onBack }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-96 mx-auto"> {/* Added Tailwind classes */}
            <div className="flex justify-end mb-4"> {/* Added Tailwind classes */}
                <button
                    onClick={onBack}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Back to Form
                </button>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-green-600">Submitted Data:</h2> {/* Added Tailwind classes */}
            <div className="space-y-2"> {/* Added spacing between data items */}
                <p className="text-gray-700">Name: {data.name}</p>
                <p className="text-gray-700">Description: {data.description}</p>
                <p className="text-gray-700">Date: {data.date}</p>
                <p className="text-gray-700">Selected Option: {data.selectedOption}</p>
            </div>
        </div>
    );
};

export default DisplayComponent;

import React, { useState, ChangeEvent } from 'react';
import { FormData } from '../models/Project';

interface FormComponentProps {
    onFormSubmit: (data: FormData) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        description: '',
        date: '',
        selectedOption: 'Incomplete',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.name || !formData.description || !formData.date || !formData.selectedOption) {
            alert('Please fill all fields.');
            return;
        }
        onFormSubmit(formData);
    };

    return (
        <div className="bg-green-500 p-8 rounded-lg shadow-md w-96 mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4"> {/* Added spacing */}
                <div>
                    <label htmlFor="name" className="block text-green-700 font-bold mb-2">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                        Description:
                    </label>
                    <input
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                        Date:
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="selectedOption" className="block text-gray-700 font-bold mb-2">
                        Select Option:
                    </label>
                    <select
                        id="selectedOption"
                        name="selectedOption"
                        value={formData.selectedOption}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="Complete">Complete</option>
                        <option value="Incomplete">Incomplete</option>
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;

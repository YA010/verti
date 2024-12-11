import React, { useState, ChangeEvent } from 'react';
import { FormData } from '../models/Project';
import "../css/form.css"
/**
 * Interface defining the props for the FormComponent.
 */
interface FormProps {
    /**
     * This function is to be executed when the form is submitted.
     * @param data < The form data submitted by the user.
     */
    onFormSubmit: (data: FormData) => void;
}

/**
 * 
 * 
 * This is the main form functionality that allows users to input project details and submits the data 
 * to a parent component using a callback function. It includes validation to 
 * ensure all required fields are filled.
 */
const FormComponent: React.FC<FormProps> = ({ onFormSubmit }) => {
   
    const [formData, setFormData] = useState<FormData>({ 
        name: '',
        description: '',
        date: '',
        selectedOption: 'Its amazing :)', 
    });

    
    const [formErrors, setFormErrors] = useState<string[]>([]); 

    /**
     * Event handler for changes in the form input fields.
     * 
     * Updates the form data state with the new value and removes 
     * any previous errors associated with the changed field.
     * 
     * @param event The change event object.
     */
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        // Remove error for the changed field
        setFormErrors(prevErrors => prevErrors.filter(error => 
            !error.startsWith(`${name}:`) 
        ));
    };

    /**
     * Event handler for form submission.
     * 
     * Performs form validation, updates error state, and calls the 
     * onFormSubmit prop with the form data if validation passes.
     * 
     * @param event The submit event object.
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const errors: string[] = [];
        if (!formData.name) errors.push('Name: This field is required.');
        if (!formData.description) errors.push('Description: This field is required.');
        if (!formData.date) errors.push('Date: This field is required.');

        setFormErrors(errors);

        if (errors.length > 0) {
            return;
        }
        onFormSubmit(formData);
    };

    /**
     *  the form structure and input elements.
     */
    return (
        <div className="form-container">
            <h2 className='formtitle'>Add a new project</h2>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label htmlFor="name" className="label">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                        
                    />
                    {formErrors.find(error => error.startsWith('Name:')) && <div className="error">{formErrors.find(error => error.startsWith('Name:'))?.split(': ')[1]}</div>}
                </div>
                <div>
                    <label htmlFor="description" className="label">
                        Description:
                    </label>
                    <input
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="input"
                        
                    />
                    {formErrors.find(error => error.startsWith('Description:')) && <div className="error">{formErrors.find(error => error.startsWith('Description:'))?.split(': ')[1]}</div>}
                </div>
                <div>
                    <label htmlFor="date" className="label">
                        Date:
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="input"
                        
                    />
                    {formErrors.find(error => error.startsWith('Date:')) && <div className="error">{formErrors.find(error => error.startsWith('Date:'))?.split(': ')[1]}</div>}
                </div>
                <div>
                    <label htmlFor="selectedOption" className="label">
                        is this form:
                    </label>
                    <select
                        id="selectedOption"
                        name="selectedOption"
                        className="input"
                        value={formData.selectedOption} 
                        onChange={handleChange}
                    >
                        <option value="Its amazing :)">its amazing</option>
                        <option value="Meh its ok">Meh its ok</option>
                    </select>
                </div>
                <div className="button-container">
                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;

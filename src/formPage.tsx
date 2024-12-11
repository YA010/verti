import React, { useState } from 'react'; // Import necessary React hooks
import FormComponent from './components/form'; // Import the form component
import { FormData } from './models/Project'; // Import the FormData type
import DisplayComponent from './components/projectdisplay'; // Import the display component


/**
 * FormPage component - Manages the display of the form and submitted data.
 */
const Formcontent: React.FC = () => {
    // State to store submitted data, initially null
    const [submittedData, setSubmittedData] = useState<FormData | null>(null); 

    /**
     * handleFormSubmit - Called when the form is submitted.
     * @param data - The data submitted from the form.
     */

    const handleFormSubmit = (data: FormData) => {
        // Update the state with the submitted data
        setSubmittedData(data); 
    };

    /**
     * JSX rendering of the FormPage component.
     * Conditionally renders the form or the display component based on submission status.
     */

    return (
        <div>
            {/* Render the form if data hasn't been submitted */}
            {!submittedData && ( 
                <FormComponent onFormSubmit={handleFormSubmit} /> 
            )}
            {/* Render the display component if data has been submitted */}
            {submittedData && ( 
                <DisplayComponent 
                    data={submittedData} 
                    onBack={() => setSubmittedData(null)} // Callback to reset submitted data and show the form again
                />
            )}
        </div>
    );
};


export default Formcontent;
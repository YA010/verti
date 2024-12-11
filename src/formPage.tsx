import React, { useState } from 'react';
import FormComponent from './components/form';
import { FormData } from './models/Project';
import DisplayComponent from './components/projectdisplay'; // Import the display component


const FormPage: React.FC = () => {
    const [submittedData, setSubmittedData] = useState<FormData | null>(null);


    const handleFormSubmit = (data: FormData) => {
        setSubmittedData(data);
    };


    return (
        <div>
   {!submittedData && (
                <FormComponent onFormSubmit={handleFormSubmit} />
            )}

            {/* Conditionally render the DisplayComponent */}
            {submittedData && (
                <DisplayComponent data={submittedData} onBack={() => setSubmittedData(null)}/>
            )}        </div>
    );
};


export default FormPage;

import React from 'react';

import { FormData } from '../models/Project';

import "../css/projectdisplay.css"

/**
 * defining the props for the DisplayComponent.
 * @property data - The form data to display.
 * @property onBack - A callback function that navigate back to the form.
 */

interface DisplayComponentProps {
    data: FormData;
    onBack: () => void;
}

/**
 * Functional component to display the submitted form data.
 * @param props - The props for the component, including data and onBack function.
 * @returns A React element representing the display component.
 */

const DisplayComponent: React.FC<DisplayComponentProps> = ({ data, onBack }) => {
    return (
        <div className="project-display"> 
            <div className="project-back-button-wrapper"> 
                <button
                    onClick={onBack}
                    className="project-back-button"
                >
                    Back to Form
                </button>
            </div>
            {/* Header for the displayed data. */}
            <h2 className="project-data-header">Submitted Data:</h2> 
            {/* Container for the data items. */}
            <div className="project-data-list"> 
                {/* Display each data item with a label. */}
                <p className="project-data-item">Name: {data.name}</p>
                <p className="project-data-item">Description: {data.description}</p>
                <p className="project-data-item">Date: {data.date}</p>
                <div>
                    <label htmlFor="selectedOption" className="label">
                        Select Option:
                    </label>
                    <select
                        id="selectedOption"
                        name="selectedOption"
                        className="input"
                    >
                        <option value="Complete">Complete</option>
                        <option value="Incomplete">Incomplete</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default DisplayComponent;

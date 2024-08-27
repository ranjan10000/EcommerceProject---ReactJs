// ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProjectDetail() {
    const { id } = useParams();  // Get the 'id' from the URL parameters
    const [data, setData] = useState(null);  // Initialize state to hold the project data

    useEffect(() => {
        // Fetch data for the specific project based on 'id'
        fetch(`https://api.restful-api.dev/objects/${id}`)
            .then(response => response.json())  // Convert the response to JSON
            .then(data => setData(data))  // Set the fetched data to the state
            .catch(error => console.error('Error fetching project data:', error));  // Handle errors
    }, [id]);  // Dependency array ensures this effect runs when 'id' changes

    // Conditional rendering to show a loading message or the project details
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="project-detail-container">
            <div className="project-detail-content">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                {/* Render additional project details here */}
            </div>
        </div>
    );
}

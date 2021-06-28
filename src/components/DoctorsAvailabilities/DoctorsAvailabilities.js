import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from "react-router-dom";
import axios from 'axios';

const DoctorsAvailabilities = (props) => {

    let { DOCTOR_ID } = useParams();

    const [availabilities, setAvailabilities] = useState([]);

    const API_AVAILABILITIES_URL = `https://tech-test.joovence.dev/api/availabilities?doctorId=${DOCTOR_ID}`;

    useEffect(() => {
        axios.get(API_AVAILABILITIES_URL)
        .then((response) => {
            console.log(response);
            // setAvailabilities(response.data);
        }).catch((error) => {
            console.log(error);
        });   
    }, [API_AVAILABILITIES_URL]);
    
    return (
        <div>

        </div>
    );
};

export default DoctorsAvailabilities;
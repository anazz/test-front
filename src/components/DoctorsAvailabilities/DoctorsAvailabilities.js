import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from "react-router-dom";
import axios from 'axios';

const DoctorsAvailabilities = (props) => {

    let { DOCTOR_ID } = useParams();

    const [availabilities, setAvailabilities] = useState([]);

    const API_AVAILABILITIES_URL = `https://tech-test.joovence.dev/api/availabilities?doctorId=${DOCTOR_ID}`;
 
    (async () => {
      try {
            const response = await axios.get(API_AVAILABILITIES_URL)
            console.log(response);
            setAvailabilities(response);
      } catch (error) {
            console.log(error);
      }
    })();
    
    return (
        <div>

        </div>
    );
};

export default DoctorsAvailabilities;
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Doctors.css';

const Doctors = (props) => {

    const history = useHistory();

    const [doctorsList, setDoctorsList] = useState([]);

    const API_DOCTORS_URL = `https://tech-test.joovence.dev/api/doctors`;

    useEffect(() => {
        axios.get(API_DOCTORS_URL)
        .then((response) => {
            console.log(response.data);
            setDoctorsList(response.data);
        }).catch((error) => {
            console.log(error);
        });   
    }, [API_DOCTORS_URL]);      

    console.log(doctorsList);

    return (
        <div>
            {doctorsList
            ?
            <ul>
                {doctorsList.map((doctor, key) => (
                <li key={key}>
                    <Link key={key} onClick={() => {history.push(`/availabilities/${doctor.id}`)}}>
                        <h4>{doctor.name}</h4>
                        <p>Voir disponibilités</p>    
                    </Link>
                    <div className="address">
                        <div className="row">
                            <p>city:</p><p>{doctor.address.city}</p>
                        </div>
                        <div className="row">
                            <p>country:</p><p>{doctor.address.country}</p>
                        </div>
                        <div className="row">
                            <p>line1:</p><p>{doctor.address.line1}</p>
                        </div>
                        <div className="row">
                            <p>line2:</p><p>{doctor.address.line2}</p>
                        </div>
                        <div className="row">
                            <p>postalCode:</p><p>{doctor.address.postalCode}</p>
                        </div>   
                    </div>
                </li>
                ))}
            </ul>
            :
            null
            }
        </div>
    );
};

export default Doctors;
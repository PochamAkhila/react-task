import React, { useEffect, useState } from 'react'
import "./Home.css";
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ConfirmModal from '../../components/ConfirmModal';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {

    const [data, setData] = useState([])
    const [verify, setVerify] = useState(false);
    const [deleteId, setDeleteId] = useState("");

    const nav = useNavigate()

    const params = useParams();
    const { id } = params;

    // const getSingleProduct = async (id) => {
    //     try {
    //         const response = await axios.get(`http://localhost:8081/resume/${id}`)
    //         setData(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // useEffect(() => {
    //     if (id) {
    //         getSingleProduct();
    //     }
    // }, [id]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const url = id ? `http://localhost:8081/resume/${id}` : 'http://localhost:8081/resume';
            const response = await axios.get(url);
            setData(Array.isArray(response.data) ? response.data : [response.data]);
        } catch (error) {
            console.log(error);
        }
    };

    function onEdit(id) {
        nav(`/form/${id}`);
    }

    const handleDelete = async (resumeId) => {
        try {
            await axios.delete(`http://localhost:8081/resume/${resumeId}`);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    function onDelete(resumeId) {
        setVerify(true);
        setDeleteId(resumeId);
    }
    function onVerifyClose(result) {
        if (!result) {
            setVerify(false);
            return;
        }
        handleDelete(deleteId);
        setVerify(false);
    }

    return (
        <>
            <Container className='my-5'>
                {data.map((resume) => (
                    <div key={resume._id}>
                        <Row className='mx-5 my-5 shadow'>
                            <Col lg={8} className='left-side-wrapper p-5' xs={{ order: 'last' }} >
                                <div>
                                    <section>
                                        <h2 className='heading2 mb-3'>
                                            <span className="material-icons-outlined">
                                                account_circle
                                            </span> Career Objective
                                        </h2>
                                        <p className='para mb-4'>{resume.careerDescription}</p>
                                    </section>

                                    <section >
                                        <h2 className='heading2 mb-3'>
                                            <span className="material-icons-outlined">
                                                work
                                            </span> Proffessional Summary
                                        </h2>
                                        <p className='para mb-4'>{resume.professionalDescription}</p>
                                    </section>

                                    <section>
                                        <h2 className='heading2 mb-3'>
                                            <span className="material-icons-outlined">
                                                rocket_launch
                                            </span>
                                            Skills & Profficiency
                                        </h2>
                                        <div className='skill-name'>
                                            <div className='item'>
                                                <p className='title'>Skills: {resume.skillname}</p>
                                                <div className="progress level-bar" style={{ width: "50%" }}>
                                                    <div
                                                        className="progress-bar theme-progress-bar"
                                                        role="progressbar"
                                                        style={{ width: `${resume.proficiency * 10}%` }}
                                                        aria-valuenow={resume.proficiency}
                                                        aria-valuemin="0"
                                                        aria-valuemax="10"
                                                    >
                                                    </div> <span>{resume.proficiency} %</span>
                                                </div>
                                            </div>
                                            <div className='item'>
                                                <p className='title'>Skills: {resume.skillname1}</p>
                                                <div className="progress level-bar" style={{ width: "50%" }}>
                                                    <div
                                                        className="progress-bar theme-progress-bar"
                                                        role="progressbar"
                                                        style={{ width: `${resume.proficiency1 * 10}%` }}
                                                        aria-valuenow={resume.proficiency1}
                                                        aria-valuemin="0"
                                                        aria-valuemax="10"
                                                    >
                                                    </div> <span>{resume.proficiency1} %</span>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className='heading2 mb-3'> Experiences:</h2>
                                        <div>
                                            <p className='para mb-4'>{resume.experiences}</p>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className='heading2 mb-3'> Achievements:</h2>
                                        <div>
                                            <p className='para mb-4'>{resume.achievements}</p>
                                        </div>
                                    </section>
                                </div>
                            </Col>

                            <Col lg={4} className='sidebar p-0' xs={{ order: 'first' }}>
                                <div className=''>
                                    <div className='profile-wrapper p-4 text-center pt-5'>
                                        <img src={resume.image} alt="" style={{ width: "180px", borderRadius: "50%", marginBottom: "15px" }} />
                                        <h1 className='heading'>{resume.username}</h1>
                                        <h3 className='role'>{resume.role}</h3>
                                    </div>

                                    <div className='contact-wrapper p-4'>
                                        <h2 className='header pt-3 pb-2'>Contact Details</h2>
                                        <ul className="list-unstyled">
                                            <li className='mb-3'>
                                                <h6> <span className="material-icons-outlined icon">
                                                    email
                                                </span> {resume.email}</h6>
                                            </li>
                                            <li className='mb-3'>
                                                <h6><span className="material-icons-outlined icon">
                                                    call
                                                </span>{resume.number}</h6> </li>
                                            <li>
                                                <h6><span className="material-icons-outlined icon">
                                                    location_on
                                                </span> {resume.address}</h6></li>
                                        </ul>
                                    </div>

                                    <div className='education-wrapper px-4'>
                                        <h2 className='header pb-2'>Education</h2>
                                        <div>
                                            <h5 className='head-edu mb-1'>{resume.university} - <span>{resume.gpa} GPA</span></h5>
                                            <h6 className='d-inline'>{resume.qualification} - <span>{resume.location}</span></h6>
                                            <p>{resume.year}</p>
                                        </div>
                                        <div>
                                            <h5 className='head-edu mb-1'>{resume.university1} - <span>{resume.gpa1} GPA</span></h5>
                                            <h6 className='d-inline'>{resume.qualification1} - <span>{resume.location1}</span></h6>
                                            <p>{resume.year1}</p>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className=' button-wrapper d-flex justify-content-center '>
                            <button onClick={() => onEdit(resume._id)} className='btn mx-2 btn-warning'> Edit</button>
                            <button onClick={() => onDelete(resume._id)} className='btn btn-danger'>Delete</button>
                        </div>
                    </div>
                ))}
                {verify ? <ConfirmModal onClose={onVerifyClose} /> : ""}
            </Container>
        </>
    )
}

export default Home


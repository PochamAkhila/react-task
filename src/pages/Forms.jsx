import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();

    const params = useParams();
    const { id } = params;

    const defaultValues = {
        image: "",
        username: "",
        role: "",
        qualification: "",
        year: "",
        gpa: "",
        university: "",
        location: "",
        qualification1: "",
        year1: "",
        gpa1: "",
        university1: "",
        location1: "",
        professionalDescription: "",
        careerDescription: "",
        experiences: "",
        skillname: "",
        proficiency: "",
        skillname1: "",
        proficiency1: "",
        achievements: "",
        email: "",
        number: "",
        address: "",
    };

    const [product, setProduct] = useState(defaultValues);

    useEffect(() => {
        if (!id) {
            //id is not available
            return;
        }
        axios("http://localhost:8081/resume/" + id).then((res) => {
            const temp = { ...defaultValues, ...res.data };
            console.log(res.data)
            setProduct(temp);
        });
    }, []);

    const formik = useFormik({
        initialValues: product,
        enableReinitialize: true,
        validationSchema: Yup.object({
            image: Yup.string().required("Image is required"),
            username: Yup.string().min(3, "Must be 4 characters or more")
                .max(150, "Must be 30 characters or less").required("username is required"),
            role: Yup.string().required("role is required").min(3, "Must be 8 characters or more")
                .max(150, "Must be 100 characters or less"),
            qualification: Yup.string().required("qualification is required"),
            year: Yup.string().required("year is required"),
            gpa: Yup.string().required("gpa is required"),
            university: Yup.string().required("university is required"),
            location: Yup.string().required("location is required"),
            professionalDescription: Yup.string().required("professionalDescription is required"),
            careerDescription: Yup.string().required("careerDescription is required"),
            experiences: Yup.string().required("experiences is required"),
            skillname: Yup.string().required("skillname is required"),
            proficiency: Yup.number().required("proficiency is required"),
            achievements: Yup.string().required("achievements is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            number: Yup.number().required("Phone number is required"),
            address: Yup.string().required("address number is required"),
        }),

        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
            if (id) {
                //id is available update request
                axios
                    .patch("http://localhost:8081/resume/" + id, values)
                    .then(function (response) {
                        console.log(response);
                        navigate("/");
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                //id is not available create request
                axios
                    .post("http://localhost:8081/resume", values)
                    .then(function (response) {
                        console.log(response);
                        navigate("/");
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

        },
    });

    return (
        <Container className="w-50 shadow my-5 px-4">
            <Row>
                <Col>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-1 mt-5" controlId="image">
                            <Form.Label>Image:</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                onChange={formik.handleChange}
                                value={formik.values.image}
                                placeholder="Enter Image"
                            />
                            <Form.Text className="text-danger">
                                {formik.touched.image && formik.errors.image ? (
                                    <div className="text-danger">{formik.errors.image}</div>
                                ) : null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="username">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                                placeholder="Enter Username"
                            />
                            <Form.Text className="text-danger">
                                {formik.touched.username && formik.errors.username ? (
                                    <div className="text-danger">{formik.errors.username}</div>
                                ) : null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="role">
                            <Form.Label>Role:</Form.Label>
                            <Form.Control
                                type="text"
                                name="role"
                                onChange={formik.handleChange}
                                value={formik.values.role}
                                placeholder="Enter Role"
                            />
                            <Form.Text className="text-danger">
                                {formik.touched.role && formik.errors.role ? (
                                    <div className="text-danger">{formik.errors.role}</div>
                                ) : null}
                            </Form.Text>
                        </Form.Group>
                        <div className="d-flex justify-content-space-between gap-2">
                            <Form.Group className="mb-1" controlId="qualification">
                                <Form.Label>Qualification:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="qualification"
                                    onChange={formik.handleChange}
                                    value={formik.values.qualification}
                                    placeholder="Enter Qualification"
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.qualification && formik.errors.qualification ? (
                                        <div className="text-danger">{formik.errors.qualification}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="university">
                                <Form.Label>University:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="university"
                                    onChange={formik.handleChange}
                                    value={formik.values.university}
                                    placeholder="Enter University"
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.university && formik.errors.university ? (
                                        <div className="text-danger">{formik.errors.university}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group>
                        </div>
                        <div className="d-flex justify-content-space-between gap-2">
                            <Form.Group className="mb-1" controlId="year">
                                <Form.Label>Year:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="year"
                                    onChange={formik.handleChange}
                                    value={formik.values.year}
                                    placeholder="Enter Year"
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.year && formik.errors.year ? (
                                        <div className="text-danger">{formik.errors.year}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="gpa">
                                <Form.Label>Gpa:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="gpa"
                                    onChange={formik.handleChange}
                                    value={formik.values.gpa}
                                    placeholder="Enter Gpa"
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.gpa && formik.errors.gpa ? (
                                        <div className="text-danger">{formik.errors.gpa}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-1" controlId="location">
                                <Form.Label>Location:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="location"
                                    onChange={formik.handleChange}
                                    value={formik.values.location}
                                    placeholder="Enter Location"
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.location && formik.errors.location ? (
                                        <div className="text-danger">{formik.errors.location}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group>
                        </div>

                        <div className="d-flex justify-content-space-between gap-2">
                            <Form.Group className="mb-1" controlId="qualification1">
                                <Form.Label>Qualification-1:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="qualification1"
                                    onChange={formik.handleChange}
                                    value={formik.values.qualification1}
                                    placeholder="Enter Qualification1"
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.qualification1 && formik.errors.qualification1 ? (
                                        <div className="text-danger">{formik.errors.qualification1}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="university1">
                                <Form.Label>University-1:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="university1"
                                    onChange={formik.handleChange}
                                    value={formik.values.university1}
                                    placeholder="Enter University-1"
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.university1 && formik.errors.university1 ? (
                                        <div className="text-danger">{formik.errors.university1}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group>
                        </div>
                        <div className="d-flex justify-content-space-between gap-2">
                            <Form.Group className="mb-1" controlId="year1">
                                <Form.Label>Year-1:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="year1"
                                    onChange={formik.handleChange}
                                    value={formik.values.year1}
                                    placeholder="Enter Year1"
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.year1 && formik.errors.year1 ? (
                                        <div className="text-danger">{formik.errors.year1}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="gpa1">
                                <Form.Label>Gpa-1:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="gpa1"
                                    onChange={formik.handleChange}
                                    value={formik.values.gpa1}
                                    placeholder="Enter Gpa1"
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.gpa1 && formik.errors.gpa1 ? (
                                        <div className="text-danger">{formik.errors.gpa1}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-1" controlId="location1">
                                <Form.Label>Location-1:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="location1"
                                    onChange={formik.handleChange}
                                    value={formik.values.location1}
                                    placeholder="Enter Location1"
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.location1 && formik.errors.location1 ? (
                                        <div className="text-danger">{formik.errors.location1}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group>
                        </div>


                        <Form.Group className="mb-1" controlId="professionalDescription">
                            <Form.Label>ProfessionalDescription:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                type="text"
                                name="professionalDescription"
                                onChange={formik.handleChange}
                                value={formik.values.professionalDescription}
                                placeholder="Enter ProfessionalDescription"
                            />
                            <Form.Text className="text-danger">
                                {formik.touched.professionalDescription && formik.errors.professionalDescription ? (
                                    <div className="text-danger">{formik.errors.professionalDescription}</div>
                                ) : null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="careerDescription">
                            <Form.Label>CareerDescription:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                type="text"
                                name="careerDescription"
                                onChange={formik.handleChange}
                                value={formik.values.careerDescription}
                                placeholder="Enter CareerDescription"
                            />
                            <Form.Text className="text-danger">
                                {formik.touched.careerDescription && formik.errors.careerDescription ? (
                                    <div className="text-danger">{formik.errors.careerDescription}</div>
                                ) : null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="experiences">
                            <Form.Label>Experience:</Form.Label>

                            <Form.Control
                                as="select"
                                name="experiences"
                                onChange={formik.handleChange}
                                value={formik.values.experiences}
                                placeholder="Select Experience"
                                className="w-50"
                            >
                                <option value="" className="w-25">Select</option>
                                <option value="No Experience">No Experience</option>
                                <option value="internship">1 Internship</option>
                                <option value="experienced">Experience</option>
                                <option value="3 years">1 year</option>
                                <option value="4 years">2 years</option>
                                <option value="3+ years">3+ years</option>
                            </Form.Control>
                            <Form.Text className="text-danger">
                                {formik.touched.experiences && formik.errors.experiences ? (
                                    <div className="text-danger">{formik.errors.experiences}</div>
                                ) : null}
                            </Form.Text>
                        </Form.Group>

                        <div className="d-flex justify-content-space-between gap-2">
                            <Form.Group className="mb-1" controlId="skillname">
                                <Form.Label>Skillname:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="skillname"
                                    onChange={formik.handleChange}
                                    value={formik.values.skillname}
                                    placeholder="Enter Skillname"
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.skillname && formik.errors.skillname ? (
                                        <div className="text-danger">{formik.errors.skillname}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="proficiency">
                                <Form.Label>Proficiency:</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="proficiency"
                                    onChange={formik.handleChange}
                                    value={formik.values.proficiency}
                                    placeholder="Enter Proficiency"
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.proficiency && formik.errors.proficiency ? (
                                        <div className="text-danger">{formik.errors.proficiency}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group>
                        </div>

                        <div className="d-flex justify-content-space-between gap-2">
                            <Form.Group className="mb-1" controlId="skillname1">
                                <Form.Label>Skillname-1:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="skillname1"
                                    onChange={formik.handleChange}
                                    value={formik.values.skillname1}
                                    placeholder="Enter Skillname1"
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.skillname1 && formik.errors.skillname1 ? (
                                        <div className="text-danger">{formik.errors.skillname1}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="proficiency1">
                                <Form.Label>Proficiency-1:</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="proficiency1"
                                    onChange={formik.handleChange}
                                    value={formik.values.proficiency1}
                                    placeholder="Enter Proficiency1"
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.proficiency1 && formik.errors.proficiency1 ? (
                                        <div className="text-danger">{formik.errors.proficiency1}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-1" controlId="achievements">
                            <Form.Label>Achievements:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                type="text"
                                name="achievements"
                                onChange={formik.handleChange}
                                value={formik.values.achievements}
                                placeholder="Enter Achievements"
                            />
                            <Form.Text className="text-danger">
                                {formik.touched.achievements && formik.errors.achievements ? (
                                    <div className="text-danger">{formik.errors.achievements}</div>
                                ) : null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder="Enter Email"
                            />
                            <Form.Text className="text-danger">
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-danger">{formik.errors.email}</div>
                                ) : null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="number">
                            <Form.Label>Number:</Form.Label>
                            <Form.Control
                                type="number"
                                name="number"
                                onChange={formik.handleChange}
                                value={formik.values.number}
                                placeholder="Enter Number"
                            />
                            <Form.Text className="text-danger">
                                {formik.touched.number && formik.errors.number ? (
                                    <div className="text-danger">{formik.errors.number}</div>
                                ) : null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="address">
                            <Form.Label>Address:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                type="text"
                                name="address"
                                onChange={formik.handleChange}
                                value={formik.values.address}
                                placeholder="Enter address"
                            />
                            <Form.Text className="text-danger">
                                {formik.touched.address && formik.errors.address ? (
                                    <div className="text-danger">{formik.errors.address}</div>
                                ) : null}
                            </Form.Text>
                        </Form.Group>

                        <Button variant="info" type="submit" className="my-5 mx-auto d-flex">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Product;



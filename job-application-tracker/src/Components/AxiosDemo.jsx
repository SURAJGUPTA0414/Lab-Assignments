import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Col, ListGroup } from 'react-bootstrap';

export default function AxiosDemo() {
    const url = "http://localhost:4000/Jobapplication";
    const [applications, setApplications] = useState([]);
    const [newApplication, setNewApplication] = useState({
        company: '',
        position: '',
        ctc: '',
        date: '',
        status: '',
        location: '',
    });
    const [editingApplication, setEditingApplication] = useState(null);
    const [showApplicationList, setShowApplicationList] = useState(false);

    // Fetch all job applications
    async function fetchApplications() {
        try {
            const response = await axios.get(url);
            if (Array.isArray(response.data)) {
                setApplications(response.data);
            }
        } catch (error) {
            console.error("Error fetching job applications:", error);
        }
    }

    useEffect(() => {
        fetchApplications();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewApplication({
            ...newApplication,
            [name]: value,
        });
    };

    // Add or update job application
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingApplication) {
                await axios.put(`${url}/${editingApplication.id}`, newApplication);
                alert("data added succesfully")

            } else {
                await axios.post(url, newApplication);
                alert("data added succesfully")
            }
            fetchApplications();
            setNewApplication({ company: '', position: '', ctc: '', date: '', status: '', location: '' });
            setEditingApplication(null);

        } catch (error) {
            console.error("Error saving job application:", error);
            alert("Error saving job application")
        }
    };

    const handleEditClick = (application) => {
        setEditingApplication(application);
        setNewApplication(application);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${url}/${id}`);
            fetchApplications();
            alert("deleted sucessfully")
        } catch (error) {
            console.error("Error deleting job application:", error);
            alert("Error deleting job application")
        }
    };

    return (
        <div className="mt-4">
            <h2 className="text-center mt-4">{editingApplication ? "Edit Job Application" : "Add New Job Application"}</h2>
            <Form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
                <Row className="mb-3">
                    <Col>
                        <Form.Control
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={newApplication.company}
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="position"
                            placeholder="Position"
                            value={newApplication.position}
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Control
                            type="text"
                            name="ctc"
                            placeholder="CTC"
                            value={newApplication.ctc}
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="date"
                            name="date"
                            placeholder="Application Date"
                            value={newApplication.date}
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Control
                            type="text"
                            name="status"
                            placeholder="Status"
                            value={newApplication.status}
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={newApplication.location}
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                </Row>
                <Button variant="primary" type="submit" className="w-100">
                    {editingApplication ? "Update Application" : "Add Application"}
                </Button>
            </Form>

            <div className="text-center mt-4">
                <Button variant="secondary" onClick={() => setShowApplicationList(!showApplicationList)}>
                    {showApplicationList ? "Hide Job Applications" : "Show Job Applications"}
                </Button>
            </div>

            {showApplicationList && (
                <div className="mt-4">
                    <h2 className="text-center mb-4">Job Application </h2>
                    {/* <ListGroup>
            {applications.map((app, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                <span>{app.company} --- {app.position}</span>
                <div>
                  <Button variant="warning" className="me-2" onClick={() => handleEditClick(app)}>
                    Update
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(app.id)}>
                    Delete
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup> */}

                    <ListGroup className='py-3 px-3 mt-2'>
                        {applications.map((app, index) => (
                            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5>{app.id}-{app.company} - {app.position}</h5>
                                    <p><strong>CTC:</strong> {app.ctc}</p>
                                    <p><strong>Date Applied:</strong> {app.date}</p>
                                    <p><strong>Status:</strong> {app.status}</p>
                                    <p><strong>Location:</strong> {app.location}</p>
                                </div>
                                <div>
                                    <Button variant="warning" className="me-2" onClick={() => handleEditClick(app)}>
                                        Update
                                    </Button>
                                    <Button variant="danger" onClick={() => handleDelete(app.id)}>
                                        Delete
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                </div>
            )}
        </div>
    );
}

import { Col, Container, Row, Form, Button, Image } from 'react-bootstrap';
import { Route, useNavigate } from 'react-router-dom';
import loginStyle from '../styles/Login.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    document.title = 'Login | DumbwaysMerch';

    const login = localStorage.getItem('userLogin') ? true : false;

    useEffect(() => {
        if (login) navigate('/home');
    }, []);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
        let login = data.find(item => {
            return item.email == email && item.password == password; // check if user is there
        });
        if (login) {
            localStorage.setItem('userLogin', JSON.stringify(login));
            navigate('/home');
        } else {
            navigate('/');
        }
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <Row>
                <Col sm={6} style={{ marginBottom: '30px', marginTop: '100px' }}>
                    <Image src='./assets/img/logo.png' style={{ maxWidth: '200px', maxHeight: '200px', heigt: '100%', width: '100%' }} alt='Image cannot be loaded!' fluid={true} />
                    <div className="mt-4">
                        <h1 className={loginStyle.fontWhiteBold}> Easy, Fast and Reliable </h1>
                        <p style={{ color: '#6A6A6A' }}>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
                    </div>
                    <Row className="mt-5">
                        <Col sm={6}>
                            <Link to='/' className='btn btn-danger text-white text-decoration-none px-3 mx-2'>Login</Link>
                            <Link to='/register' className='btn btn-outline-secondary text-white text-decoration-none px-3 mx-2'>Register</Link>
                        </Col>
                        <Col sm={6}>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6} className="d-flex align-items-center">
                    <Container style={{ backgroundColor: '#191819', padding: '30px', borderRadius: '10px' }}>
                        <h1 className={loginStyle.fontWhiteBold}>Login</h1>
                        <Form className="mt-4" method='POST'>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Email" style={{ backgroundColor: '#474647' }} name="email" onChange={handleEmailChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" placeholder="Password" style={{ backgroundColor: '#474647' }} name="password" onChange={handlePasswordChange} />
                            </Form.Group>
                            <Button variant="danger" type="submit" className="w-100 mt-4" onClick={handleSubmit}>
                                Login
                            </Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
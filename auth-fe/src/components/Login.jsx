import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState(""); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value); 
  };

  const fetchInfo = (email) => {
 
    return axios.post('/api/generate-otp', { identifier: email }, { headers: { withCredentials: false } })
      .then((res) => console.log(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    fetchInfo(email); // Call the API function with the captured email
  };

  useEffect(() => {
    // fetchInfo(); // You can choose to call this function on component mount, if needed
  }, []);

  return (
    <div className='centered'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange} // Add an onChange handler to capture the email input
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;

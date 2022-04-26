import React from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useServices from "../../../Hooks/useServices";

const Checkout = () => {
  const { serviceId } = useParams();
  const [services] = useServices(serviceId);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const user = { email, pass };
    console.log(user);
  };
  return (
    <div className="w-50 mx-auto my-5 shadow p-4">
      <h2 className="text-center my-4">Please Book: {services.name}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="pass"
            type="password"
            placeholder="Password"
          />
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
};

export default Checkout;

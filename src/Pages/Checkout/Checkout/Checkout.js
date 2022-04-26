import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useServices from "../../../Hooks/useServices";

const Checkout = () => {
  const { serviceId } = useParams();
  const [services] = useServices(serviceId);
  const [user, setUser] = useState({
    name: "Minhajul Alam",
    email: "akibchy1212@gmail.com",
    phone: "01554101441",
    address: "fatickchari, chittagong",
  });
  const handleAddressChaing = (e) => {
    // e.preventDefault();
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const service = e.target.service.value;
    // const phone = e.target.phone.value;
    // const address = e.target.address.value;
    // const user = { name, email, service, phone, address };
    // console.log(user);
    const { address, ...rest } = user;
    const newAddress = e.target.value;
    const newUser = { address: newAddress, ...rest };
    console.log(newUser);
    setUser(newUser);
  };
  return (
    <div className="w-50 mx-auto my-5 shadow p-4">
      <h2 className="text-center my-4">Please Book: {services.name}</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={user.name}
            required
            name="name"
            type="text"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Enter email"
            value={user.email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service</Form.Label>
          <Form.Control
            required
            disabled
            value={services.name}
            type="text"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={user.phone}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={handleAddressChaing}
            required
            name="address"
            type="text"
            placeholder="Address"
            value={user.address}
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

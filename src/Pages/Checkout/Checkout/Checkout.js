import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useServices from "../../../Hooks/useServices";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const { serviceId } = useParams();
  const [services] = useServices(serviceId);
  const [user] = useAuthState(auth);
  // const [user, setUser] = useState({
  //   name: "Minhajul Alam",
  //   email: "akibchy1212@gmail.com",
  //   phone: "01554101441",
  //   address: "fatickchari, chittagong",
  // });
  const serviceName = services?.name || "";
  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const order = {
      name: user?.displayName,
      email: user?.email,
      services: serviceId?.name,
      phone: e.target.phone.value,
      address: e.target.address.value,
    };
    axios.post("http://localhost:5000/order", order).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast.success("Order SuccessFull");
        e.target.reset();
      }
      console.log(response);
    });
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const service = e.target.service.value;
    // const phone = e.target.phone.value;
    // const address = e.target.address.value;
    // const user = { name, email, service, phone, address };
    // console.log(user);
  };

  // const { address, ...rest } = user;
  // const newAddress = e.target.value;
  // const newUser = { address: newAddress, ...rest };
  // console.log(newUser);
  // setUser(newUser);
  return (
    <div className="w-50 mx-auto my-5 shadow p-4">
      <h2 className="text-center my-4">Please Book: {services.name}</h2>
      <Form onSubmit={handleOrderSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control value={user?.displayName} required disabled />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required disabled value={user?.email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service</Form.Label>
          <Form.Control required disabled value={serviceName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            name="phone"
            type="tel"
            placeholder="Phone Number"
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            name="address"
            type="text"
            placeholder="Address"
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

import axios from "axios";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivet from "../../api/axiosPrivet";
import auth from "../../firebase.init";
const Orders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrder = async () => {
      try {
        const email = user?.email;
        const url = `https://tranquil-chamber-61296.herokuapp.com/orders?email=${email}`;
        const { data } = await axiosPrivet.get(url);
        setOrders(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrder();
  }, [user]);
  return (
    <div className="w-50 mx-auto my-5">
      <h1 className="text-center bg-primary text-warning py-2">
        This Is Order: {orders.length}
      </h1>
      {orders.map((order) => (
        <div key={order._id}>
          <h2>
            {order.email} {order.service}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Orders;

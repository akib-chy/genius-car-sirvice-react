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
        const url = `http://localhost:5000/orders?email=${email}`;
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
    <div>
      <h1>This Is Order: {orders.length}</h1>
    </div>
  );
};

export default Orders;

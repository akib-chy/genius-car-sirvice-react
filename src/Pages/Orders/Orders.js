import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:5000/orders?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  return (
    <div>
      <h1>This Is Order: {orders.length}</h1>
    </div>
  );
};

export default Orders;

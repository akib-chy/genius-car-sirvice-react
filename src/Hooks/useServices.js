import { useEffect, useState } from "react";

const useServices = (serviceId) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [serviceId]);
  console.log(services);
  return [services, setServices];
};
export default useServices;

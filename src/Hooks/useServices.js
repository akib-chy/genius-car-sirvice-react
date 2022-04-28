import { useEffect, useState } from "react";

const useServices = (serviceId) => {
  const [services, setServices] = useState({});
  useEffect(() => {
    fetch(`https://tranquil-chamber-61296.herokuapp.com/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [serviceId]);
  return [services, setServices];
};
export default useServices;

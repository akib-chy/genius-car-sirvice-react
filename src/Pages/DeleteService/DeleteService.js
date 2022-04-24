import React, { useEffect, useState } from "react";

// import useServices from "../../Hooks/useServices/useServices";

const DeleteService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDeleteService = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  //   const [services] = useServices();
  return (
    <div className="text-center">
      {services.map((s) => (
        <div>
          <li key={s._id}>
            {s.name}{" "}
            <button onClick={() => handleDeleteService(s._id)}>X</button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default DeleteService;

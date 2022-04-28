import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddService = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const url = `https://tranquil-chamber-61296.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    toast.success("Service Added SuccessFull");
    data.target.reset();
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Add your Service</h2>
      <form
        className="d-flex flex-column gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          placeholder="Description"
          type="text"
          {...register("description")}
        />
        <input placeholder="Price" type="price" {...register("price")} />
        <input placeholder="Photo URL" type="text" {...register("img")} />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddService;

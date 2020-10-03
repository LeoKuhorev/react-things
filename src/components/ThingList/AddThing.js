import React from "react";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

export default function AddThing(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    data.id = uuid();
    props.setThings((things) => [...things, data]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-center border border-light p-2 mb-4 mt-4">
      <p className="h4 mb-4">Add a new item</p>

      <input
        name="name"
        type="text"
        className="form-control mb-4"
        placeholder="Item name"
        ref={register({ required: true, minLength: 2 })}
      />
      {errors.name && errors.name.type === "required" && (
        <p className="alert alert-danger">Name is required!</p>
      )}
      {errors.name && errors.name.type === "minLength" && (
        <p className="alert alert-danger">Min length must be greater than 1 </p>
      )}

      <input
        name="price"
        type="number"
        className="form-control mb-4"
        placeholder="Item price"
        ref={register({ required: true })}
      />
      {errors.price && errors.price.type === "required" && (
        <p className="alert alert-danger">Price is required!</p>
      )}

      <button
        className="btn btn-info"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

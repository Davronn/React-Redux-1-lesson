import { useForm } from "react-hook-form";

export default function Loginteat() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="w-50  m-auto mt-5">
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column mt-5 ">
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="">Login</label>
        <input  {...register("example",{ required: true })}  />
        {errors.example && <span className="mb-3 mt-1" style={{color:'red',fontSize:'12px'}}>Login is required</span>}

        {/* include validation with required or other standard HTML validation rules */}
        <label htmlFor="">Password</label>
        <input className="mb-2" type="password" {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span className="mb-3 mt-1" style={{color:'red',fontSize:'12px'}}>password is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}

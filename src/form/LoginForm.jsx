import { useForm } from "react-hook-form";
import Field from "../components/Field";
import Fieldset from "../components/Fieldset";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <Fieldset label="Enter Login Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required" })}
              className="border border-gray-700 p-2 rounded-md focus:border-blue-600"
              type="email"
              id="email"
              name="email"
              placeholder="email address "
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password must be required",
                minLength: {
                  value: 8,
                  message: "Your Input password at least 8 catecher",
                },
              })}
              className="border border-gray-700 p-2 rounded-md "
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
          </Field>

          <button className="bg-blue-600 w-1/12 mt-2 text-lime-50 px-6 py-2 hover:bg-blue-500 rounded-md">
            Login
          </button>
        </Fieldset>
      </form>
    </div>
  );
}

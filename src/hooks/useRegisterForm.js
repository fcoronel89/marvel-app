import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { register as registerUser } from "../api/auth";
import { registerSchema } from "../lib/validationSchemas";

const useRegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setError,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    if (!isValid) return;

    try {
      await registerUser(data);
      navigate("/login");
    } catch (err) {
      console.log(err);
      reset();
      setError("general", {
        type: "server",
        message: err.response.data.message,
      });
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};

export default useRegisterForm;

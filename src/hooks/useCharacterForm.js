import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { characterSchema } from "../lib/validationSchemas";
import { updateCharacter } from "../api/marvel";

const useCharacterForm = ({ id }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setError,
  } = useForm({
    resolver: zodResolver(characterSchema),
  });

  const onSubmit = async (data) => {
    if (!isValid) return;
    try {
      await updateCharacter(id, data);
      navigate("/characters/" + id);
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

export default useCharacterForm;

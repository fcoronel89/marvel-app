import { useQuery } from "@tanstack/react-query";
import { getCharacter } from "../../api/marvel";
import useCharacterForm from "../../hooks/useCharacterForm";
import { useParams } from "react-router-dom";
import Loading from "../UI/Loading";

const CharacterEdit = () => {
  const characterId = useParams().id;

  const {
    isLoading,
    isError,
    error,
    data: character,
  } = useQuery({
    queryKey: ["character" + characterId],
    queryFn: () => {
      return getCharacter(characterId);
    },
  });

  const { register, handleSubmit, errors, isSubmitting } = useCharacterForm({
    id: characterId,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="character-edit">
        <h2>
          Editar Personaje: <strong>{character.name}</strong>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Nombre:</label>
            <input
              {...register("name")}
              type="text"
              defaultValue={character.name}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div className="input-container">
            <label htmlFor="description">Descripción:</label>
            <textarea
              {...register("description")}
              defaultValue={character.description}
            />
            {errors.description && <p className="error">{errors.description.message}</p>}
          </div>
          <button type="submit" disabled={isSubmitting} className="button">
            Guardar
          </button>
          {errors.general && <p>{errors.general.message}</p>}
        </form>
      </div>
    </>
  );
};

export default CharacterEdit;

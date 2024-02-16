import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { deleteCharacter, getCharacter } from "../../api/marvel";
import "./Characters.scss";
import Loading from "../UI/Loading";

const CharacterView = () => {
  const characterId = useParams().id;
  const navigateTo = useNavigate();

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

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div data-testid="error-message">Error: {error.message}</div>;
  }

  const handleDelete = async (characterId) => {
    try {
      await deleteCharacter(characterId);
      navigateTo("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="character-view" data-testid="character-view">
      <h2>{character.name}</h2>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <p>
        {character.description ? character.description : "No tiene descripcion"}
      </p>
      <h3>Comics</h3>
      {character.comics.items.length === 0 && <p>No tiene comics</p>}
      {character.comics.items.length > 0 && (
        <ul>
          {character.comics.items.map((comic) => (
            <li key={comic.name}>{comic.name}</li>
          ))}
        </ul>
      )}
      <h3>Series</h3>
      {character.series.items.length === 0 && <p>No tiene series</p>}
      {character.series.items.length > 0 && (
        <ul>
          {character.series.items.map((serie) => (
            <li key={serie.name}>{serie.name}</li>
          ))}
        </ul>
      )}
      <br />
      <button onClick={() => handleDelete(character.id)} className="button">
        Borrar
      </button>
    </div>
  );
};

export default CharacterView;

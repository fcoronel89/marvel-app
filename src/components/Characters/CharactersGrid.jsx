import { useInfiniteQuery } from "@tanstack/react-query";
import { getCharacters } from "../../api/marvel";
import { Link } from "react-router-dom";
import "./Characters.scss";
import Loading from "../UI/Loading";

const CharactersGrid = () => {
  const {
    isLoading,
    isError,
    error,
    data: characters,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: ({ pageParam = 0 }) => getCharacters(pageParam),
    select: (data) => {
      const flattenedResults = data.pages.flatMap((page) => page.results);
      return flattenedResults;
    },
    getNextPageParam: (lastPage) => lastPage.offset + lastPage.limit,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="characters-grid">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <div className="image-container">
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
            </div>
            {character.name}
            <div className="buttons">
              <Link to={`/characters/${character.id}`} className="link">
                Ver
              </Link>
              <Link to={`/characters/${character.id}/edit`} className="link">
                Editar
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="loadmore-container">
        {hasNextPage && (
          <button onClick={() => fetchNextPage()} className="button">
            {isFetchingNextPage ? "Cargando..." : "Cargar mas"}
          </button>
        )}
      </div>
    </>
  );
};

export default CharactersGrid;

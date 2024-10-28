import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "./useGames";

type Props = {};

function Games({}: Props) {
  const { data, isLoading } = useGames();
  return (
    <SimpleGrid p="20px" columns={[2, null, 3]}>
      {isLoading && "Cargando..."}
      {data?.map((game) => (
        <GameCard key={game.gameID} gameData={game} />
      ))}
    </SimpleGrid>
  );
}

export default Games;

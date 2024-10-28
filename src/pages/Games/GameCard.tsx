import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Game } from "./useGames";

type Props = {
  gameData: Game;
};

const GameCard = ({ gameData }: Props) => {
  return (
    <div
      onClick={() =>
        (window.location.href = `https://www.cheapshark.com/redirect?dealID=${gameData.dealID}`)
      }
      style={{ cursor: "pointer" }}
    >
      <Box
        maxW={"445px"}
        w={"full"}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image h="210px" src={gameData.thumb} />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {gameData.isOnSale === 1 ? "Oferta" : "Venta Normal"}
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {gameData.title}
          </Heading>
          <Text color={"gray.500"}>Critica: {gameData.steamRatingText}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Puntaje: {gameData.metacriticScore}</Text>
            <Text color={"gray.500"}>
              Antes: {gameData.normalPrice} - Ahora: {gameData.salePrice}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default GameCard;

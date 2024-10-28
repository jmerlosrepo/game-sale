import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import useChuck from "./useChuck";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const { data, isLoading } = useChuck();
  const navigate = useNavigate();

  return (
    <Flex
      background={`linear-gradient(
        rgba(0,0,0,0.7),
        rgba(0,0,0,0.7),
        ), url(https://images.unsplash.com/photo-1640955011254-39734e60b16f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}
      w="full"
      backgroundSize="cover"
      h="calc(100vh - 64px)"
    >
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: "100px" }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color="white"
          >
            Bienvenidos a <br />
            <Text as={"span"} color={"green.400"}>
              Game Sale
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Una web para encontrar ofertas. Ademas contamos chistes:{" "}
            {isLoading ? "Cargando..." : data?.value}
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
              onClick={() => navigate("/games")}
            >
              Empieza ahora
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
}

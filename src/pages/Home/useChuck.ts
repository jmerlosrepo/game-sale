import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useChuck = () => {
  type Chuck = {
    value: string;
  };

  return useQuery({
    queryKey: ["chuck"],
    staleTime: 0,
    queryFn: () =>
      axios
        .get<Chuck>("https://api.chucknorris.io/jokes/random")
        .then((res) => res.data),
  });
};

export default useChuck;

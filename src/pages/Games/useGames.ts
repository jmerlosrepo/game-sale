import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type Game = {
  internalName: string;
  title: string;
  metacriticLink: string;
  dealID: string;
  storeID: number;
  gameID: number;
  salePrice: number;
  normalPrice: number;
  isOnSale: number;
  savings: number;
  metacriticScore: number;
  steamRatingText: string;
  steamRatingPercent: number;
  steamRatingCount: number;
  steamAppID: number;
  releaseDate: number;
  lastChange: number;
  dealRating: number;
  thumb: string;
};

const useGames = () => {
  return useQuery({
    queryKey: ["games"],
    queryFn: () =>
      axios
        .get<Game[]>(
          "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
        )
        .then((res) => res.data),
  });
};

export default useGames;

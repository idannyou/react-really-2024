import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { z } from "zod";

import { foodSchema, Food } from "../food";

export function useFoods(): UseQueryResult<Food[]> {
  return useQuery<Food[]>({
    queryFn: async () => {
      const resp = await fetch("http://localhost:3001/foods");
      const foodsResponse = await resp.json();
      return z.array(foodSchema).parse(foodsResponse);
    },
    queryKey: ["foods"],
  });
}

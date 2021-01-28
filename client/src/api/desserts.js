import { useQuery, useMutation, queryClient } from "react-query";
import { request, gql } from "graphql-request";

const endpoint = "http://localhost:4000/graphql";

export const useFetchDesserts = () => {
  return useQuery("desserts", async () => {
    const data = await request(
      endpoint,
      gql`
        query {
          Desserts {
            Id
            Name
            Calories
            Fat
            Carbs
            Protein
          }
        }
      `
    );
    return data;
  });
};

export const useAddDessert = ({ name, calories, fat, carbs, protein }) => {
  useMutation(
    async () => {
      const { Dessert } = await request(
        endpoint,
        gql`
        mutation {
          AddDessert(
            Name: ${name},
            Calories: ${calories},
            Fat: ${fat},
            Carbs: ${carbs},
            Protein: ${protein}){
            Name
            Calories
            Fat
            Carbs
            Protein
          }
        }
      `
      );
      return Dessert;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("desserts");
      },
    }
  );
};

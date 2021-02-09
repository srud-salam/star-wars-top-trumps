import { gql } from "@apollo/react-hooks";

export const GET_PEOPLE = gql`
  query GetPeople {
    allPeople {
      people {
        name
      }
    }
  }
`;

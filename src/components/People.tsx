import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_PEOPLE } from "../graphql/graphql.queries.graphql";

const People: React.FC = () => {
  const { data, loading, error } = useQuery(GET_PEOPLE, {
    notifyOnNetworkStatusChange: true,
  });

  console.log(data, loading, error);
  return (
    <div>
      <div>{data}</div>
    </div>
  );
};

export default People;

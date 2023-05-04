import { GraphQLClient } from "graphql-request";
import { hasuraHeaders } from "@/app/api/headers";

const client = new GraphQLClient(process.env.HASURA_URL || "", {
  headers: hasuraHeaders,
});

export default client;

const hasuraHeaders = new Headers();
hasuraHeaders.set(
    "x-hasura-admin-secret",
    process.env.HASURA_GRAPHQL_ADMIN_SECRET || ""
);

export {hasuraHeaders}
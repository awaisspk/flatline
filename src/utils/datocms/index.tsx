import { GraphQLClient } from 'graphql-request';

export async function request({ query, variables, preview }: any) {
  let endpoint = 'https://graphql.datocms.com';

  if (process.env.NEXT_DATOCMS_ENVIRONMENT) {
    endpoint += `/environments/${process.env.NEXT_PUBLIC_DATOCMS_READONLY_TOKEN}`;
  }

  if (preview) {
    endpoint += `/preview`;
  }

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_READONLY_TOKEN}`,
    },
  });

  try {
    const data = await client.request(query, variables);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

import { GraphQLClient } from 'graphql-request';

export async function request({ query, variables, preview }: any) {
  let endpoint = 'https://graphql.datocms.com';

  if (process.env.NEXT_DATOCMS_ENVIRONMENT) {
    endpoint += `/environments/${process.env.NEXT_DATOCMS_ENVIRONMENT}`;
  }

  if (preview) {
    endpoint += `/preview`;
  }

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_CMS_DATOCMS_API_TOKEN}`,
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

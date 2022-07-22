import { gql } from 'graphql-request';

import { responsiveImageFragment } from '../datocms/fragments';

export const getPostsByCategories = gql`
  query getPosts($category: ItemId) {
    posts: allPosts(filter: { category: { eq: $category } }) {
      id
      title
      excerpt
      slug
      category {
        name
      }
      coverImage {
        responsiveImage(
          imgixParams: { fit: crop, w: 600, h: 350, auto: format }
        ) {
          ...responsiveImageFragment
        }
      }
    }
  }
  ${responsiveImageFragment}
`;

import { gql } from 'graphql-request';

import { responsiveImageFragment } from '../datocms/fragments';

export const GET_POSTS_BY_CATEGORIES = gql`
  query getPosts($category: ItemId, $first: IntType = 10, $skip: IntType = 0) {
    posts: allPosts(
      filter: { category: { eq: $category } }
      first: $first
      skip: $skip
    ) {
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
    postsCount: _allPostsMeta(filter: { category: { eq: $category } }) {
      count
    }
  }
  ${responsiveImageFragment}
`;

export const PAGINATED_POSTS = gql`
  query getPosts($first: IntType = 10, $skip: IntType = 0) {
    posts: allPosts(first: $first, skip: $skip) {
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
    postsCount: _allPostsMeta {
      count
    }
  }
  ${responsiveImageFragment}
`;

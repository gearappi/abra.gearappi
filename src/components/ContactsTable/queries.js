import { gql } from 'apollo-boost';

export const contactsQuery = gql`
  query contacts{
  	contacts{
      id
      title
      type
      context_1
      context_2
    }
  }
`;

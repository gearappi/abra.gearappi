import { gql } from 'apollo-boost';

export const updatedContactMutation = gql`
mutation contactUpdate($id: ID, $title: String!, $type: String!, $context_1: String!, $context_2: String!){
  updateContactsPhone(id: $id, title: $title, type: $type, context_1: $context_1, context_2: $context_2){
    title
    type
    context_1
    context_2
  }
}
`;

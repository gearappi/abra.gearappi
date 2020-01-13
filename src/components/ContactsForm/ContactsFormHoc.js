import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { styles } from './styles';

import { updatedContactMutation } from './mutations';
import { contactsQuery } from '../ContactsTable/queries';


const withGraphqlUpdate = graphql(updatedContactMutation, {
    props: ({ mutate }) => ({
      updateContact: contact => mutate({
        variables: contact,
        refetchQueries: [{ query: contactsQuery }],
      }),
    }),
  })

export default compose(withStyles(styles), withGraphqlUpdate);

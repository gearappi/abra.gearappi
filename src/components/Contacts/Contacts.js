import React,{Component} from 'react';

import ContactsTable from '../ContactsTable/ContactsTable';
import ContactsForm from '../ContactsForm/ContactsForm';

import withHocs from './ContactsHoc';

class Contacts extends Component {
  state = {
    open: false,
    title: '',
    type: '',
    context_1: '',
    context_2: ''
  }

  handleClickOpen = (data = {}) => {
    this.setState({
      open: true,
      ...data
    });
  };

  handleClose = () => {
    this.setState({
      title: '',
      type: '',
      context_1: '',
      context_2: '',
      open: false
    });
  };

  handleSelectChange = ({ target }) => { this.setState({ [target.name]: target.value }); };
  handleCheckboxChange = title => ({ target }) => { this.setState({ [title]: target.checked }); };
  handleChange = title => ({ target }) => { this.setState({ [title]: target.value }); };

   render() {
    const { id, title, type, context_1, context_2, open } = this.state;
    const { classes } = this.props;
    return (
      <>
      <ContactsForm handleChange={this.handleChange} handleSelectChange={this.handleSelectChange} handleCheckboxChange={this.handleCheckboxChange} selectedValue={{ id, title, type, context_1, context_2 }} open={open} onClose={this.handleClose} />
      <div className={classes.wrapper}>
        <ContactsTable onOpen={this.handleClickOpen} onClose={this.handleClose} />
      </div>
      </>
    );
  }
}
export default withHocs(Contacts);

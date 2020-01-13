import React from 'react';
import TextField from '@material-ui/core/TextField';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import SaveIcon from '@material-ui/icons/Save';

import withHocs from './ContactsFormHoc';

class ContactsForm extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  handleSave = () => {
    const { selectedValue, onClose, updateContact } = this.props;
    const { id, title, type, context_1, context_2  } = selectedValue;
    updateContact({id, title, type, context_1, context_2});
    onClose();
  };

  render() {
    const { 
      // handleSelectChange, handleCheckboxChange,
      classes, open, handleChange, selectedValue = {} } = this.props;
    const { title, type, context_1, context_2 } = selectedValue;

    return (
      <Dialog onClose={this.handleClose} open={open} aria-labelledby="simple-dialog-title">
        <DialogTitle className={classes.title} id="simple-dialog-title">Information about contacts</DialogTitle>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Название"
            className={classes.textField}
            value={title}
            onChange={handleChange('title')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-genre"
            label="Тип"
            className={classes.textField}
            value={type}
            onChange={handleChange('type')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-rate"
            label="Номер телефона"
            value={context_1}
            onChange={handleChange('context_1')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-rate"
            label="Описание"
            value={context_2}
            onChange={handleChange('context_2')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <div className={classes.wrapper}>
            <Button onClick={this.handleSave} variant="contained" color="primary" className={classes.button}>
              <SaveIcon /> Save
            </Button>
          </div>
        </form>
      </Dialog>
    );
  }
};

  export default withHocs(ContactsForm);

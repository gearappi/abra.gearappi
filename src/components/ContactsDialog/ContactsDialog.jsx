import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BlockIcon from '@material-ui/icons/Block';

class ContactsDialog extends React.Component {

  handleDelete = () => {
    const { 
      // id, 
      handleClose } = this.props;
    handleClose();
  }

  render() {
    const { open, handleClose } = this.props;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Вы уверены, что хотите удалить элемент?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you clicked “Confirm”, this item will be deleted from the database.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <BlockIcon /> Cancel
          </Button>
          <Button onClick={this.handleDelete} color="primary" autoFocus>
            <DeleteForeverIcon/> Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ContactsDialog;

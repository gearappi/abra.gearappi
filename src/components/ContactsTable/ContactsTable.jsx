import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Checkbox from '@material-ui/core/Checkbox';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

import ContactsDialog from '../ContactsDialog/ContactsDialog';

import withHocs from './ContactsTableHoc';

class ContactsTable extends React.Component {
  state = {
    anchorEl: null,
    openDialog: false,
  };

  handleDialogOpen = () => { this.setState({ openDialog: true }); };
  handleDialogClose = () => { this.setState({ openDialog: false }); };

  handleClick = ({ currentTarget }, data) => {
    this.setState({
      anchorEl: currentTarget,
      data,
    });
  };

  handleClose = () => { this.setState({ anchorEl: null }); };

  handleEdit = (row) => {
    this.props.onOpen(this.state.data);
    this.handleClose();
  };

  handleDelete = () => {
    this.handleDialogOpen();
    this.handleClose();
  };

  render() {
    const { anchorEl, openDialog, data: activeElem = {} } = this.state;

    const { classes, data } = this.props;

    const { contacts = [] } = data;

    return (
      <>
        <ContactsDialog open={openDialog} handleClose={this.handleDialogClose} id={activeElem.id} />
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Number phone</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map(contact => {
                return (
                  <TableRow key={contact.id}>
                    <TableCell component="th" scope="row">{contact.title}</TableCell>
                    <TableCell>{contact.type}</TableCell>
                    <TableCell>{contact.context_1}</TableCell>
                    <TableCell>{contact.context_2}</TableCell>
                    <TableCell align="right">
                      <>
                        <IconButton color="inherit" onClick={(e) => this.handleClick(e, contact)}>
                          <MoreIcon />
                        </IconButton>
                        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose} >
                          <MenuItem onClick={this.handleEdit}><CreateIcon /> Edit</MenuItem>
                        </Menu>
                      </>
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </>
    );
  }
};
export default withHocs(ContactsTable);
